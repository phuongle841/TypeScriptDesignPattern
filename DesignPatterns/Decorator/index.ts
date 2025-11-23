abstract class Beverage {
  protected description: string;
  protected size: SIZE;

  constructor() {
    this.description = "";
    this.size = SIZE.big;
  }
  abstract cost: () => number;
  getDescription: () => string = () => {
    return this.description;
  };
}
enum SIZE {
  small,
  big,
  venti,
}

class Espresso extends Beverage {
  constructor() {
    super();
    this.description = "Espresso";
  }
  cost: () => number = () => {
    return 150;
  };
}

class DarkRoast extends Beverage {
  constructor() {
    super();
    this.description = "Dark Roast";
  }
  cost: () => number = () => {
    return 100;
  };
}

class Decaf extends Beverage {
  constructor() {
    super();
    this.description = "Decaf";
  }
  cost: () => number = () => {
    return 120;
  };
}

abstract class CondimentDecorator extends Beverage {
  abstract getDescription: () => string;
}

class WhipDecorator extends CondimentDecorator {
  private beverage: Beverage;
  constructor(wrappedObj: Beverage) {
    super();
    this.beverage = wrappedObj;
  }
  getDescription: () => string = () => {
    return this.beverage.getDescription() + ", Whipped";
  };
  cost: () => number = () => {
    return this.beverage.cost() + 5;
  };
}

class MochaDecorator extends CondimentDecorator {
  private beverage: Beverage;
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }
  cost: () => number = () => {
    return this.beverage.cost() + 3;
  };
  getDescription: () => string = () => {
    return this.beverage.getDescription() + ", Mochaed";
  };
}

abstract class SizeDecorator extends Beverage {
  abstract setSize: () => void;
  abstract getSize: () => void;
}

let WhippedDarkRoast: Beverage = new WhipDecorator(new DarkRoast());
WhippedDarkRoast = new MochaDecorator(WhippedDarkRoast);
WhippedDarkRoast = new MochaDecorator(WhippedDarkRoast);
console.log(WhippedDarkRoast.getDescription());
console.log(WhippedDarkRoast.cost());

let MochaDecaf: Beverage = new MochaDecorator(new Decaf());
MochaDecaf = new MochaDecorator(MochaDecaf);
console.log(MochaDecaf.getDescription());
console.log(MochaDecaf.cost());
