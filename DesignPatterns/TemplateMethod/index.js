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
var Coffee = /** @class */ (function () {
    function Coffee() {
        var _this = this;
        this.prepareRecipe = function () {
            _this.boildWater();
            _this.brewCoffeGrinds();
            _this.pourInCup();
            _this.addSugarAndMilk();
        };
        this.boildWater = function () {
            console.log("Boiling Water");
        };
        this.brewCoffeGrinds = function () {
            console.log("Dripping Coffee through filter");
        };
        this.pourInCup = function () {
            console.log("Pouring into cup");
        };
        this.addSugarAndMilk = function () {
            console.log("Adding Sugar and milk");
        };
    }
    return Coffee;
}());
var Tea = /** @class */ (function () {
    function Tea() {
        var _this = this;
        this.prepareRecipe = function () {
            _this.boildWater();
            _this.steepTeaBag();
            _this.pourInCup();
            _this.addLemon();
        };
        this.boildWater = function () {
            console.log("Boiling Water");
        };
        this.steepTeaBag = function () {
            console.log("Steeping the tea");
        };
        this.pourInCup = function () {
            console.log("Pouring into cup");
        };
        this.addLemon = function () {
            console.log("Adding Lemon");
        };
    }
    return Tea;
}());
var CaffeinBeverage = /** @class */ (function () {
    function CaffeinBeverage() {
        var _this = this;
        this.prepareRecipe = function () {
            _this.boildWater();
            _this.brew();
            _this.pourInCup();
            if (_this.customerWantCondiments()) {
                _this.addCondiments();
            }
        };
        this.boildWater = function () {
            console.log("Boiling Water");
        };
        this.pourInCup = function () {
            console.log("Pouring into cup");
        };
        this.customerWantCondiments = function () { return true; };
    }
    return CaffeinBeverage;
}());
var TeaSecond = /** @class */ (function (_super) {
    __extends(TeaSecond, _super);
    function TeaSecond() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.brew = function () {
            console.log("Stepping the tea");
        };
        _this.addCondiments = function () {
            console.log("Adding lemon");
        };
        return _this;
    }
    return TeaSecond;
}(CaffeinBeverage));
var CoffeSecond = /** @class */ (function (_super) {
    __extends(CoffeSecond, _super);
    function CoffeSecond() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.brew = function () {
            console.log("Dripping coffe through filter");
        };
        _this.addCondiments = function () {
            console.log("Adding sugar and milk");
        };
        _this.customerWantCondiments = function () {
            return false;
        };
        return _this;
    }
    return CoffeSecond;
}(CaffeinBeverage));
var coffee = new CoffeSecond();
coffee.prepareRecipe();
var tea = new TeaSecond();
tea.prepareRecipe();
