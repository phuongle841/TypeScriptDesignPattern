interface QuackAble {
  quack(): void;
}

class MallardDuck implements QuackAble {
  quack(): void {
    console.log("Quack");
  }
}

class RedHeadDuck implements QuackAble {
  quack(): void {
    console.log("Quack");
  }
}

class DuckCall implements QuackAble {
  quack(): void {
    console.log("Quack~~~");
  }
}

class RubberDuck implements QuackAble {
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

      console.log("Duck Simulator");
      this.Simulate(duckCall);
      this.Simulate(mallardDuck);
      this.Simulate(redHeadDuck);
      this.Simulate(rubberDuck);
      this.Simulate(goose);

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

  quack(): void {
    this.duck.quack();
    QuackCounter.NumberOfQuack++;
  }

  getQuacks(): number {
    return QuackCounter.NumberOfQuack;
  }
}

abstract class abstractDuckFactory {
  abstract createMallardDUck(): QuackAble;
  abstract createRedHeadDuck(): QuackAble;
  abstract createDuckCall(): QuackAble;
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

const simulator = new DuckSimulator();
const duckFactory: abstractDuckFactory = new CountingDuckFactory();
simulator.Simulate(duckFactory);
