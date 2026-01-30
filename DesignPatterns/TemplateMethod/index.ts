class Coffee {
  prepareRecipe: () => void = () => {
    this.boildWater();
    this.brewCoffeGrinds();
    this.pourInCup();
    this.addSugarAndMilk();
  };
  boildWater: () => void = () => {
    console.log("Boiling Water");
  };
  brewCoffeGrinds: () => void = () => {
    console.log("Dripping Coffee through filter");
  };
  pourInCup: () => void = () => {
    console.log("Pouring into cup");
  };
  addSugarAndMilk: () => void = () => {
    console.log("Adding Sugar and milk");
  };
}

class Tea {
  prepareRecipe: () => void = () => {
    this.boildWater();
    this.steepTeaBag();
    this.pourInCup();
    this.addLemon();
  };
  boildWater: () => void = () => {
    console.log("Boiling Water");
  };
  steepTeaBag: () => void = () => {
    console.log("Steeping the tea");
  };
  pourInCup: () => void = () => {
    console.log("Pouring into cup");
  };
  addLemon: () => void = () => {
    console.log("Adding Lemon");
  };
}

abstract class CaffeinBeverage {
  prepareRecipe: () => void = () => {
    this.boildWater();
    this.brew();
    this.pourInCup();
    if (this.customerWantCondiments()) {
      this.addCondiments();
    }
  };
  boildWater: () => void = () => {
    console.log("Boiling Water");
  };
  abstract brew: () => void;
  pourInCup: () => void = () => {
    console.log("Pouring into cup");
  };
  abstract addCondiments: () => void;
  customerWantCondiments: () => boolean = () => true;
}

class TeaSecond extends CaffeinBeverage {
  brew: () => void = () => {
    console.log("Stepping the tea");
  };
  addCondiments: () => void = function () {
    console.log("Adding lemon");
  };
}

class CoffeSecond extends CaffeinBeverage {
  brew: () => void = () => {
    console.log("Dripping coffe through filter");
  };
  addCondiments: () => void = function () {
    console.log("Adding sugar and milk");
  };
  customerWantCondiments: () => boolean = () => {
    // this is a hook
    // that subclass can override this method,
    // but they don't have to
    return false;
  };
}

const coffee = new CoffeSecond();
coffee.prepareRecipe();
const tea = new TeaSecond();
tea.prepareRecipe();
