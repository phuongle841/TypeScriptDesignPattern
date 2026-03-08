interface QuackAble extends QuackObservable {
  quack(): void;
}

class MallardDuck implements QuackAble {
  observable: Observable;

  constructor() {
    this.observable = new Observable(this);
    this.notifyObservers();
  }
  registerObserver(observer: Observer): void {
    this.observable.registerObserver(observer);
  }
  notifyObservers(): void {
    this.observable.notifyObservers();
  }
  quack(): void {
    console.log("Quack");
  }
}

class RedHeadDuck implements QuackAble {
  registerObserver(observer: Observer): void {
    throw new Error("Method not implemented.");
  }
  notifyObservers(): void {
    throw new Error("Method not implemented.");
  }
  quack(): void {
    console.log("Quack");
  }
}

class DuckCall implements QuackAble {
  registerObserver(observer: Observer): void {
    throw new Error("Method not implemented.");
  }
  notifyObservers(): void {
    throw new Error("Method not implemented.");
  }
  quack(): void {
    console.log("Quack~~~");
  }
}

class RubberDuck implements QuackAble {
  registerObserver(observer: Observer): void {
    throw new Error("Method not implemented.");
  }
  notifyObservers(): void {
    throw new Error("Method not implemented.");
  }
  quack(): void {
    console.log("Squeak");
  }
}

class Goose {
  honk(): void {
    console.log("Honk");
  }
}

class GooseAdapter implements QuackAble {
  goose: Goose;
  constructor(goose: Goose) {
    this.goose = goose;
  }
  registerObserver(observer: Observer): void {
    throw new Error("Method not implemented.");
  }
  notifyObservers(): void {
    throw new Error("Method not implemented.");
  }
  quack(): void {
    this.goose.honk();
  }
}

class DuckSimulator {
  Simulate(duck: QuackAble): void;
  Simulate(duckFactory: abstractDuckFactory): void;
  Simulate(duckFactoryOrDuck: abstractDuckFactory | QuackAble): void {
    if ("createDuckCall" in duckFactoryOrDuck) {
      const duckCall = duckFactoryOrDuck.createDuckCall();
      const mallardDuck = duckFactoryOrDuck.createMallardDUck();
      const redHeadDuck = duckFactoryOrDuck.createRedHeadDuck();
      const rubberDuck = duckFactoryOrDuck.createRubberDuck();
      const goose = new GooseAdapter(new Goose());

      const FlockOfDuck: Flock = new Flock();

      FlockOfDuck.add(duckCall);
      FlockOfDuck.add(mallardDuck);
      FlockOfDuck.add(redHeadDuck);
      FlockOfDuck.add(rubberDuck);
      FlockOfDuck.add(goose);

      const FlockOfMallard: Flock = new Flock();

      for (let i = 0; i < 4; i++) {
        const NewMallard: QuackAble = duckFactoryOrDuck.createMallardDUck();
        FlockOfMallard.add(NewMallard);
      }
      FlockOfDuck.add(FlockOfMallard);

      console.log("Whole flock simulation");
      this.Simulate(FlockOfDuck);
      console.log("Mallard flock simulation");
      this.Simulate(FlockOfMallard);

      console.log(
        "The ducks quacked " + QuackCounter.NumberOfQuack + " times.",
      );
    } else {
      duckFactoryOrDuck.quack();
    }
  }
}

class QuackCounter implements QuackAble {
  duck: QuackAble;
  static NumberOfQuack: number = 0;

  constructor(duck: QuackAble) {
    this.duck = duck;
  }
  registerObserver(observer: Observer): void {
    throw new Error("Method not implemented.");
  }
  notifyObservers(): void {
    throw new Error("Method not implemented.");
  }

  quack(): void {
    this.duck.quack();
    QuackCounter.NumberOfQuack++;
  }

  getQuacks(): number {
    return QuackCounter.NumberOfQuack;
  }
}

abstract class abstractDuckFactory {
  abstract createDuckCall(): QuackAble;
  abstract createMallardDUck(): QuackAble;
  abstract createRedHeadDuck(): QuackAble;
  abstract createRubberDuck(): QuackAble;
}

class DuckFactory implements abstractDuckFactory {
  createMallardDUck(): QuackAble {
    return new MallardDuck();
  }
  createRedHeadDuck(): QuackAble {
    return new RedHeadDuck();
  }
  createDuckCall(): QuackAble {
    return new DuckCall();
  }
  createRubberDuck(): QuackAble {
    return new RubberDuck();
  }
}

class CountingDuckFactory implements abstractDuckFactory {
  createMallardDUck(): QuackAble {
    return new QuackCounter(new MallardDuck());
  }
  createRedHeadDuck(): QuackAble {
    return new QuackCounter(new RedHeadDuck());
  }
  createDuckCall(): QuackAble {
    return new QuackCounter(new DuckCall());
  }
  createRubberDuck(): QuackAble {
    return new QuackCounter(new RubberDuck());
  }
}

class Flock implements QuackAble {
  quackers: Array<QuackAble>;

  constructor() {
    this.quackers = [];
  }
  registerObserver(observer: Observer): void {
    throw new Error("Method not implemented.");
  }
  notifyObservers(): void {
    throw new Error("Method not implemented.");
  }

  add(duck: QuackAble) {
    this.quackers.push(duck);
  }

  quack(): void {
    for (const duck of this.quackers) {
      duck.quack();
    }
  }
}

interface MyIterator {
  hasNext: () => boolean;
  next: () => object;
}

class MyArrayList<T> {
  // Basically an linkedList, but...[Feeling ashamed of don't know to implement this in typescript]
  arrayList: Array<T>;
  NumberOfElements: number;
  constructor() {
    this.arrayList = [];
    this.NumberOfElements = 0;
  }

  length(): number {
    return this.NumberOfElements;
  }

  add(element: T) {
    this.arrayList.push(element);
  }

  Iterator(): Array<T> {
    return this.arrayList;
  }
}

interface QuackObservable {
  registerObserver(observer: Observer): void;
  notifyObservers(): void;
}

interface Observer {
  update(duck: QuackObservable): void;
}

class Observable implements QuackObservable {
  observers: Array<Observer>;
  duck: QuackObservable;

  constructor(duck: QuackObservable) {
    this.duck = duck;
    this.observers = [];
  }

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }
  notifyObservers(): void {
    for (const element of this.observers) {
      element.update(this.duck);
    }
  }
}

class Quackologist implements Observer {
  update(duck: QuackObservable): void {
    console.log("Quackologist: " + duck + " just quacked");
  }
}

const simulator = new DuckSimulator();
const duckFactory: abstractDuckFactory = new CountingDuckFactory();
simulator.Simulate(duckFactory);
