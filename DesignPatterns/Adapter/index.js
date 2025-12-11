var MallerDuck = /** @class */ (function () {
    function MallerDuck() {
        this.quack = function () {
            console.log("Quack");
        };
        this.fly = function () {
            console.log("I'm flying");
        };
    }
    return MallerDuck;
}());
var TurkeyAdapter = /** @class */ (function () {
    function TurkeyAdapter(turkey) {
        var _this = this;
        this.quack = function () {
            _this.turkey.gobble();
        };
        this.fly = function () {
            for (var i = 0; i < 5; i++) {
                _this.turkey.fly();
            }
        };
        this.turkey = turkey;
    }
    return TurkeyAdapter;
}());
var WildTurkey = /** @class */ (function () {
    function WildTurkey() {
        this.gobble = function () {
            console.log("Gobble gobble");
        };
        this.fly = function () {
            console.log("I'm flying a short distance");
        };
    }
    return WildTurkey;
}());
var mallerDuck = new MallerDuck();
var wildTurkey = new WildTurkey();
var AdaptedTurkey = new TurkeyAdapter(wildTurkey);
console.log("The turkey say...");
wildTurkey.gobble();
wildTurkey.fly();
console.log("The duck say...");
testDuck(mallerDuck);
console.log("The turkey Adapter say..");
testDuck(AdaptedTurkey);
function testDuck(duck) {
    duck.fly();
    duck.quack();
}
