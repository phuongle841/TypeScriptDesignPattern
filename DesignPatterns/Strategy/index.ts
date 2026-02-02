class duck {
  private _flyBehavior: FlyBehavior;
  public get flyBehavior(): FlyBehavior {
    return this._flyBehavior;
  }
  public set flyBehavior(value: FlyBehavior) {
    this._flyBehavior = value;
  }
  private _quackBehavior: QuackBehavior;
  public get quackBehavior(): QuackBehavior {
    return this._quackBehavior;
  }
  public set quackBehavior(value: QuackBehavior) {
    this._quackBehavior = value;
  }
  constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior) {
    this._flyBehavior = flyBehavior;
    this._quackBehavior = quackBehavior;
  }

  swim = () => {
    console.log("Duck is swim");
  };

  display = () => {
    console.log("duck is being displayed");
  };

  performFly = () => {
    this.flyBehavior.fly();
  };

  performQuack = () => {
    this.quackBehavior.quack();
  };
}

interface FlyBehavior {
  fly: Function;
}
class FlyWitWings implements FlyBehavior {
  fly = () => {
    console.log("wow, I am flying");
  };
}

class FlyNoWay implements FlyBehavior {
  fly = function () {
    console.log("I cannot fly???");
  };
}

class FlyWithJetEngine implements FlyBehavior {
  fly = () => {
    console.log("Bum bum bum!!! to the moon");
  };
}

interface QuackBehavior {
  quack: Function;
}

class Quack implements QuackBehavior {
  quack = () => {
    console.log("wow, I am quacking");
  };
}

class MuteQuack implements QuackBehavior {
  quack = function () {
    console.log("I cannot fly???");
  };
}

class DwellerDuck extends duck {
  constructor() {
    super(new FlyWitWings(), new Quack());
  }
  display = () => {
    console.log("Dweller duck");
  };
}

class PlasticDuck extends duck {
  constructor() {
    super(new FlyWithJetEngine(), new MuteQuack());
  }
}

class Swan extends duck {}

class WoodDuck extends duck {}

const duckList: duck[] = [];
const dwellerDuck = new DwellerDuck();
const plasticDuck = new PlasticDuck();
duckList.push(dwellerDuck);
duckList.push(plasticDuck);
duckList.forEach((d) => {
  d.performFly();
});
