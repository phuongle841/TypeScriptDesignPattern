var MallardDuck = /** @class */ (function () {
    function MallardDuck() {
    }
    MallardDuck.prototype.quack = function () {
        console.log("Quack");
    };
    return MallardDuck;
}());
var RedHeadDuck = /** @class */ (function () {
    function RedHeadDuck() {
    }
    RedHeadDuck.prototype.quack = function () {
        console.log("Quack");
    };
    return RedHeadDuck;
}());
var DuckCall = /** @class */ (function () {
    function DuckCall() {
    }
    DuckCall.prototype.quack = function () {
        console.log("Quack~~~");
    };
    return DuckCall;
}());
var RubberDuck = /** @class */ (function () {
    function RubberDuck() {
    }
    RubberDuck.prototype.quack = function () {
        console.log("Squeak");
    };
    return RubberDuck;
}());
var Goose = /** @class */ (function () {
    function Goose() {
    }
    Goose.prototype.honk = function () {
        console.log("Honk");
    };
    return Goose;
}());
var GooseAdapter = /** @class */ (function () {
    function GooseAdapter(goose) {
        this.goose = goose;
    }
    GooseAdapter.prototype.quack = function () {
        this.goose.honk();
    };
    return GooseAdapter;
}());
var DuckSimulator = /** @class */ (function () {
    function DuckSimulator() {
    }
    DuckSimulator.prototype.Simulate = function (duckFactoryOrDuck) {
        if ("createDuckCall" in duckFactoryOrDuck) {
            var duckCall = duckFactoryOrDuck.createDuckCall();
            var mallardDuck = duckFactoryOrDuck.createMallardDUck();
            var redHeadDuck = duckFactoryOrDuck.createRedHeadDuck();
            var rubberDuck = duckFactoryOrDuck.createRubberDuck();
            var goose = new GooseAdapter(new Goose());
            console.log("Duck Simulator");
            this.Simulate(duckCall);
            this.Simulate(mallardDuck);
            this.Simulate(redHeadDuck);
            this.Simulate(rubberDuck);
            this.Simulate(goose);
            console.log("The ducks quacked " + QuackCounter.NumberOfQuack + " times.");
        }
        else {
            duckFactoryOrDuck.quack();
        }
    };
    return DuckSimulator;
}());
var QuackCounter = /** @class */ (function () {
    function QuackCounter(duck) {
        this.duck = duck;
    }
    QuackCounter.prototype.quack = function () {
        this.duck.quack();
        QuackCounter.NumberOfQuack++;
    };
    QuackCounter.prototype.getQuacks = function () {
        return QuackCounter.NumberOfQuack;
    };
    QuackCounter.NumberOfQuack = 0;
    return QuackCounter;
}());
var abstractDuckFactory = /** @class */ (function () {
    function abstractDuckFactory() {
    }
    return abstractDuckFactory;
}());
var DuckFactory = /** @class */ (function () {
    function DuckFactory() {
    }
    DuckFactory.prototype.createMallardDUck = function () {
        return new MallardDuck();
    };
    DuckFactory.prototype.createRedHeadDuck = function () {
        return new RedHeadDuck();
    };
    DuckFactory.prototype.createDuckCall = function () {
        return new DuckCall();
    };
    DuckFactory.prototype.createRubberDuck = function () {
        return new RubberDuck();
    };
    return DuckFactory;
}());
var CountingDuckFactory = /** @class */ (function () {
    function CountingDuckFactory() {
    }
    CountingDuckFactory.prototype.createMallardDUck = function () {
        return new QuackCounter(new MallardDuck());
    };
    CountingDuckFactory.prototype.createRedHeadDuck = function () {
        return new QuackCounter(new RedHeadDuck());
    };
    CountingDuckFactory.prototype.createDuckCall = function () {
        return new QuackCounter(new DuckCall());
    };
    CountingDuckFactory.prototype.createRubberDuck = function () {
        return new QuackCounter(new RubberDuck());
    };
    return CountingDuckFactory;
}());
var simulator = new DuckSimulator();
var duckFactory = new CountingDuckFactory();
simulator.Simulate(duckFactory);
