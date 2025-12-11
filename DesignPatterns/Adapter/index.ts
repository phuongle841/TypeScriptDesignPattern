interface Duck {
  quack: Function;
  fly: Function;
}

class MallerDuck implements Duck {
  quack = () => {
    console.log("Quack");
  };
  fly = () => {
    console.log("I'm flying");
  };
}

class TurkeyAdapter implements Duck {
  private turkey: Turkey;
  constructor(turkey: Turkey) {
    this.turkey = turkey;
  }
  quack: Function = () => {
    this.turkey.gobble();
  };
  fly: Function = () => {
    for (let i = 0; i < 5; i++) {
      this.turkey.fly();
    }
  };
}

interface Turkey {
  gobble: () => void;
  fly: () => void;
}

class WildTurkey implements Turkey {
  gobble: () => void = () => {
    console.log("Gobble gobble");
  };
  fly: () => void = () => {
    console.log("I'm flying a short distance");
  };
}

const mallerDuck: Duck = new MallerDuck();
const wildTurkey: Turkey = new WildTurkey();
const AdaptedTurkey: Duck = new TurkeyAdapter(wildTurkey);

console.log("The turkey say...");
wildTurkey.gobble();
wildTurkey.fly();

console.log("The duck say...");
testDuck(mallerDuck);

console.log("The turkey Adapter say..");
testDuck(AdaptedTurkey);

function testDuck(duck: Duck) {
  duck.fly();
  duck.quack();
}
