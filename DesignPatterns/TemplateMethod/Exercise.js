var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var MyArray = /** @class */ (function () {
    function MyArray() {
    }
    var _a;
    _a = MyArray;
    MyArray.sort = function (a) {
        var replicateArray = __spreadArray([], a, true);
        _a.mergeSort(replicateArray, a, 0, a.length, 0);
    };
    MyArray.swap = function (des, a, b) {
        var intermediate = des[a];
        des[a] = des[b];
        des[b] = intermediate;
    };
    MyArray.mergeSort = function (src, des, low, high, off) {
        for (var i = low; i < high; i++) {
            for (var j = i; j > low &&
                des[j - 1].ComparedTo(des[j]) == true; j--) {
                _a.swap(des, j, j - 1);
            }
        }
    };
    return MyArray;
}());
var Duck = /** @class */ (function () {
    function Duck(name, weight) {
        var _this = this;
        this.name = "";
        this.weight = 0;
        this.toString = function () {
            return _this.name + " weight:" + _this.weight;
        };
        this.ComparedTo = function (a) {
            var otherDuck = a;
            if (_this.weight > otherDuck.weight) {
                return true;
            }
            else {
                return false;
            }
        };
        this.name = name;
        this.weight = weight;
    }
    return Duck;
}());
var displayAl = function (duck) {
    console.log(duck.toString());
};
var ducks = [
    new Duck("Daffy", 8),
    new Duck("Dewey", 2),
    new Duck("Howard", 7),
    new Duck("Louie", 2),
    new Duck("Donald", 10),
    new Duck("Huey", 2),
];
ducks.forEach(displayAl);
MyArray.sort(ducks);
console.log("After sorted:");
ducks.forEach(displayAl);
