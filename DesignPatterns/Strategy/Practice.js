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
var Character = /** @class */ (function () {
    function Character(weaponBehavior) {
        var _this = this;
        this.fight = function () {
            _this.weaponBehavior.useWeapon();
        };
        this._weaponBehavior = weaponBehavior;
    }
    Object.defineProperty(Character.prototype, "weaponBehavior", {
        get: function () {
            return this._weaponBehavior;
        },
        set: function (value) {
            this._weaponBehavior = value;
        },
        enumerable: false,
        configurable: true
    });
    return Character;
}());
var KnifeBehavior = /** @class */ (function () {
    function KnifeBehavior() {
        this.useWeapon = function () {
            console.log("deal 8 damages");
        };
    }
    return KnifeBehavior;
}());
var BowAndArrowBehavior = /** @class */ (function () {
    function BowAndArrowBehavior() {
        this.useWeapon = function () {
            console.log("deal 6 damages");
        };
    }
    return BowAndArrowBehavior;
}());
var AxeBehavior = /** @class */ (function () {
    function AxeBehavior() {
        this.useWeapon = function () {
            console.log("deal 10 damages");
        };
    }
    return AxeBehavior;
}());
var SwordBehavior = /** @class */ (function () {
    function SwordBehavior() {
        this.useWeapon = function () {
            console.log("deal 2 damages");
        };
    }
    return SwordBehavior;
}());
var Queen = /** @class */ (function (_super) {
    __extends(Queen, _super);
    function Queen() {
        var _this = _super.call(this, new BowAndArrowBehavior()) || this;
        _this.Emote = function () {
            console.log("(⁄ ⁄•⁄ω⁄•⁄ ⁄) AHHHHHHHHHHHH!!!");
        };
        return _this;
    }
    return Queen;
}(Character));
var queen = new Queen();
console.log(queen.weaponBehavior);
queen.fight();
queen.Emote();
