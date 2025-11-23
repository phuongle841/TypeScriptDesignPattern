var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Beverage = /** @class */ (function () {
    function Beverage() {
        var _this = this;
        this.getDescription = function () {
            return _this.description;
        };
        this.description = "";
    }
    return Beverage;
}());
var Espresso = /** @class */ (function (_super) {
    __extends(Espresso, _super);
    function Espresso() {
        var _this = _super.call(this) || this;
        _this.cost = function () {
            return 150;
        };
        _this.description = "Espresso";
        return _this;
    }
    return Espresso;
}(Beverage));
var DarkRoast = /** @class */ (function (_super) {
    __extends(DarkRoast, _super);
    function DarkRoast() {
        var _this = _super.call(this) || this;
        _this.cost = function () {
            return 100;
        };
        _this.description = "Dark Roast";
        return _this;
    }
    return DarkRoast;
}(Beverage));
var Decaf = /** @class */ (function (_super) {
    __extends(Decaf, _super);
    function Decaf() {
        var _this = _super.call(this) || this;
        _this.cost = function () {
            return 120;
        };
        _this.description = "Decaf";
        return _this;
    }
    return Decaf;
}(Beverage));
var CondimentDecorator = /** @class */ (function (_super) {
    __extends(CondimentDecorator, _super);
    function CondimentDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CondimentDecorator;
}(Beverage));
var WhipDecorator = /** @class */ (function (_super) {
    __extends(WhipDecorator, _super);
    function WhipDecorator(wrappedObj) {
        var _this = _super.call(this) || this;
        _this.getDescription = function () {
            return _this.beverage.getDescription() + ", Whipped";
        };
        _this.cost = function () {
            return _this.beverage.cost() + 5;
        };
        _this.beverage = wrappedObj;
        _this.description = wrappedObj.getDescription();
        return _this;
    }
    return WhipDecorator;
}(CondimentDecorator));
var MochaDecorator = /** @class */ (function (_super) {
    __extends(MochaDecorator, _super);
    function MochaDecorator(beverage) {
        var _this = _super.call(this) || this;
        _this.cost = function () {
            return _this.beverage.cost() + 3;
        };
        _this.getDescription = function () {
            return _this.beverage.getDescription() + ", Mochaed";
        };
        _this.beverage = beverage;
        return _this;
    }
    return MochaDecorator;
}(CondimentDecorator));
var WhippedDarkRoast = new WhipDecorator(new DarkRoast());
WhippedDarkRoast = new MochaDecorator(WhippedDarkRoast);
WhippedDarkRoast = new MochaDecorator(WhippedDarkRoast);
console.log(WhippedDarkRoast.getDescription());
console.log(WhippedDarkRoast.cost());
var MochaDecaf = new MochaDecorator(new Decaf());
MochaDecaf = new MochaDecorator(MochaDecaf);
console.log(MochaDecaf.getDescription());
console.log(MochaDecaf.cost());
