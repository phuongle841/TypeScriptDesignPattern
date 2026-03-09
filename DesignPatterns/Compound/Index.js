var MallardDuck = /** @class */ (function () {
    function MallardDuck() {
        this.observable = new Observable(this);
    }
    MallardDuck.prototype.registerObserver = function (observer) {
        this.observable.registerObserver(observer);
    };
    MallardDuck.prototype.notifyObservers = function () {
        this.observable.notifyObservers();
    };
    MallardDuck.prototype.quack = function () {
        console.log("Quack");
        this.notifyObservers();
    };
    return MallardDuck;
}());
var RedHeadDuck = /** @class */ (function () {
    function RedHeadDuck() {
        this.observable = new Observable(this);
    }
    RedHeadDuck.prototype.registerObserver = function (observer) {
        this.observable.registerObserver(observer);
    };
    RedHeadDuck.prototype.notifyObservers = function () {
        this.observable.notifyObservers();
    };
    RedHeadDuck.prototype.quack = function () {
        console.log("Quack");
        this.notifyObservers();
    };
    return RedHeadDuck;
}());
var DuckCall = /** @class */ (function () {
    function DuckCall() {
        this.observable = new Observable(this);
    }
    DuckCall.prototype.registerObserver = function (observer) {
        this.observable.registerObserver(observer);
    };
    DuckCall.prototype.notifyObservers = function () {
        this.observable.notifyObservers();
    };
    DuckCall.prototype.quack = function () {
        console.log("Quack~~~");
    };
    return DuckCall;
}());
var RubberDuck = /** @class */ (function () {
    function RubberDuck() {
        this.observable = new Observable(this);
    }
    RubberDuck.prototype.registerObserver = function (observer) {
        this.observable.registerObserver(observer);
    };
    RubberDuck.prototype.notifyObservers = function () {
        this.observable.notifyObservers();
    };
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
        this.observable = new Observable(this);
    }
    GooseAdapter.prototype.registerObserver = function (observer) {
        this.observable.registerObserver(observer);
    };
    GooseAdapter.prototype.notifyObservers = function () {
        this.observable.notifyObservers();
    };
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
            var mallardDuck = duckFactoryOrDuck.createMallardDuck();
            var redHeadDuck = duckFactoryOrDuck.createRedHeadDuck();
            var rubberDuck = duckFactoryOrDuck.createRubberDuck();
            var goose = new GooseAdapter(new Goose());
            var FlockOfDuck = new Flock();
            FlockOfDuck.add(duckCall);
            FlockOfDuck.add(mallardDuck);
            FlockOfDuck.add(redHeadDuck);
            FlockOfDuck.add(rubberDuck);
            FlockOfDuck.add(goose);
            var FlockOfMallard = new Flock();
            for (var i = 0; i < 4; i++) {
                var NewMallard = duckFactoryOrDuck.createMallardDuck();
                FlockOfMallard.add(NewMallard);
            }
            FlockOfDuck.add(FlockOfMallard);
            console.log("Duck simulator: with Observer");
            var quackologist = new Quackologist();
            FlockOfDuck.registerObserver(quackologist);
            FlockOfDuck.quack();
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
    QuackCounter.prototype.registerObserver = function (observer) {
        this.duck.registerObserver(observer);
    };
    QuackCounter.prototype.notifyObservers = function () {
        this.duck.notifyObservers();
    };
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
    DuckFactory.prototype.createMallardDuck = function () {
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
    CountingDuckFactory.prototype.createMallardDuck = function () {
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
var Flock = /** @class */ (function () {
    // observer: Observer;
    function Flock() {
        this.quackers = [];
    }
    Flock.prototype.registerObserver = function (observer) {
        for (var _i = 0, _a = this.quackers; _i < _a.length; _i++) {
            var duck = _a[_i];
            duck.registerObserver(observer);
        }
    };
    Flock.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.quackers; _i < _a.length; _i++) {
            var duck = _a[_i];
            duck.notifyObservers();
        }
    };
    Flock.prototype.add = function (duck) {
        this.quackers.push(duck);
    };
    Flock.prototype.quack = function () {
        for (var _i = 0, _a = this.quackers; _i < _a.length; _i++) {
            var duck = _a[_i];
            duck.quack();
        }
    };
    return Flock;
}());
var MyArrayList = /** @class */ (function () {
    function MyArrayList() {
        this.arrayList = [];
        this.NumberOfElements = 0;
    }
    MyArrayList.prototype.length = function () {
        return this.NumberOfElements;
    };
    MyArrayList.prototype.add = function (element) {
        this.arrayList.push(element);
    };
    MyArrayList.prototype.Iterator = function () {
        return this.arrayList;
    };
    return MyArrayList;
}());
var Observable = /** @class */ (function () {
    function Observable(duck) {
        this.duck = duck;
        this.observers = [];
    }
    Observable.prototype.registerObserver = function (observer) {
        this.observers.push(observer);
    };
    Observable.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var element = _a[_i];
            element.update(this.duck);
        }
    };
    return Observable;
}());
var Quackologist = /** @class */ (function () {
    function Quackologist() {
    }
    Quackologist.prototype.update = function (duck) {
        console.log("Quackologist: " + Object.keys(duck) + " just quacked");
    };
    return Quackologist;
}());
var simulator = new DuckSimulator();
var duckFactory = new CountingDuckFactory();
simulator.Simulate(duckFactory);
