var Singleton = /** @class */ (function () {
    function Singleton() {
        this._Data = 0;
    }
    Object.defineProperty(Singleton.prototype, "Data", {
        get: function () {
            return this._Data;
        },
        set: function (value) {
            this._Data = value;
        },
        enumerable: false,
        configurable: true
    });
    var _a;
    _a = Singleton;
    Singleton.getInstance = function () {
        if (_a.uniqueInstance == null) {
            _a.uniqueInstance = new _a();
        }
        return _a.uniqueInstance;
    };
    return Singleton;
}());
var singleton = Singleton.getInstance();
singleton.Data = 10;
console.log(singleton.Data);
var singleton2 = Singleton.getInstance();
singleton2.Data = 20;
if (singleton === singleton2) {
    console.log("this is singleton baby");
    console.log(singleton.Data);
}
