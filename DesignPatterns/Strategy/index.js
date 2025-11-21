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
var duck = /** @class */ (function () {
    function duck(flyBehavior, quackBehavior) {
        var _this = this;
        this.swim = function () {
            console.log("Duck is swim");
        };
        this.display = function () {
            console.log("duck is being displayed");
        };
        this.performFly = function () {
            _this.flyBehavior.fly();
        };
        this.performQuack = function () {
            _this.quackBehavior.quack();
        };
        this._flyBehavior = flyBehavior;
        this._quackBehavior = quackBehavior;
    }
    Object.defineProperty(duck.prototype, "flyBehavior", {
        get: function () {
            return this._flyBehavior;
        },
        set: function (value) {
            this._flyBehavior = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(duck.prototype, "quackBehavior", {
        get: function () {
            return this._quackBehavior;
        },
        set: function (value) {
            this._quackBehavior = value;
        },
        enumerable: false,
        configurable: true
    });
    return duck;
}());
var FlyWitWings = /** @class */ (function () {
    function FlyWitWings() {
        this.fly = function () {
            console.log("wow, I am flying");
        };
    }
    return FlyWitWings;
}());
var FlyNoWay = /** @class */ (function () {
    function FlyNoWay() {
        this.fly = function () {
            console.log("I cannot fly???");
        };
    }
    return FlyNoWay;
}());
var FlyWithJetEngine = /** @class */ (function () {
    function FlyWithJetEngine() {
        this.fly = function () {
            console.log("Brum brum brum!!! to the moon");
        };
    }
    return FlyWithJetEngine;
}());
var Quack = /** @class */ (function () {
    function Quack() {
        this.quack = function () {
            console.log("wow, I am quacking");
        };
    }
    return Quack;
}());
var MuteQuack = /** @class */ (function () {
    function MuteQuack() {
        this.quack = function () {
            console.log("I cannot fly???");
        };
    }
    return MuteQuack;
}());
var DwellerDuck = /** @class */ (function (_super) {
    __extends(DwellerDuck, _super);
    function DwellerDuck() {
        var _this = _super.call(this, new FlyWitWings(), new Quack()) || this;
        _this.display = function () {
            console.log("Dweller duck");
        };
        return _this;
    }
    return DwellerDuck;
}(duck));
var PlasticDuck = /** @class */ (function (_super) {
    __extends(PlasticDuck, _super);
    function PlasticDuck() {
        return _super.call(this, new FlyWithJetEngine(), new MuteQuack()) || this;
    }
    return PlasticDuck;
}(duck));
var Swan = /** @class */ (function (_super) {
    __extends(Swan, _super);
    function Swan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Swan;
}(duck));
var WoodDuck = /** @class */ (function (_super) {
    __extends(WoodDuck, _super);
    function WoodDuck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WoodDuck;
}(duck));
var duckList = [];
var dwellerduck = new DwellerDuck();
var plasticDuck = new PlasticDuck();
duckList.push(dwellerduck);
duckList.push(plasticDuck);
duckList.forEach(function (d) {
    d.performFly();
});
