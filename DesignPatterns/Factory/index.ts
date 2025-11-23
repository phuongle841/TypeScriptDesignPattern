class simplePizzaFactory {
  pizza!: Pizza;
  constructor() {}
  public createPizza(type: string): Pizza {
    if (type.match("cheese")) {
      this.pizza = new CheesePizza(new NYIngredientFactory());
    } else if (type.match("pepperoni ")) {
      this.pizza = new ChicagoChesePizza(new CaliforniaIngredientFactory());
    }
    return this.pizza;
  }
}

abstract class Pizza {
  name: string = "Pizza";
  dough!: Dough;
  sauce!: Sauce;
  Veggies: Veggie[] = new Array<Veggie>();
  pizzaIngredientFactory: PizzaIngredientFactory;
  constructor(pizzaIngredientFactory: PizzaIngredientFactory) {
    this.pizzaIngredientFactory = pizzaIngredientFactory;
  }
  abstract prepare: () => void;
  bake: () => void = () => {
    console.log("Baking");
  };
  cut: () => void = () => {
    console.log("Cutting");
  };
  box: () => void = () => {
    console.log("Boxing");
  };
}

class CheesePizza extends Pizza {
  constructor(pizzaIngredientFactory: PizzaIngredientFactory) {
    super(pizzaIngredientFactory);
    this.name = "Cheese Pizza";
  }
  prepare: () => void = () => {
    console.log("Preparing");
    this.dough = this.pizzaIngredientFactory.createDough();
    this.sauce = this.pizzaIngredientFactory.createSauce();
  };
}
class ChicagoChesePizza extends Pizza {
  prepare: () => void = () => {
    console.log("Preparing");
  };
  override cut: () => void = () => {
    console.log("Cutting but in square shape");
  };
}

interface Dough {
  getDough: () => string;
}
class ThickCrust implements Dough {
  getDough: () => string = () => {
    return "ThickCrust";
  };
}
class Calamari implements Dough {
  getDough: () => string = () => {
    return "Calamari";
  };
}

interface Sauce {}
class Marinara implements Sauce {}
class PlumTomato implements Sauce {}

interface Veggie {}
class Garlic implements Veggie {}
class Onion implements Veggie {}

abstract class PizzaStore {
  constructor() {}
  orderPizza: (type: string) => Pizza = (type: string) => {
    const pizza: Pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  };
  // Factory method rely on this class for create unique sub class
  // while Abstract factory using dependency injection(sort of)
  protected abstract createPizza: (type: string) => Pizza;
}

class NYPizzaStore extends PizzaStore {
  createPizza: (type: string) => Pizza = () => {
    return new CheesePizza(new NYIngredientFactory());
  };
}

class ChicagoPizzaStore extends PizzaStore {
  createPizza: (type: string) => Pizza = () => {
    return new ChicagoChesePizza(new CaliforniaIngredientFactory());
  };
}

interface PizzaIngredientFactory {
  createDough: () => Dough;
  createSauce: () => Sauce;
  createVeggies: () => Array<Veggie>;
}

class NYIngredientFactory implements PizzaIngredientFactory {
  createDough: () => Dough = () => {
    return new ThickCrust();
  };
  createSauce: () => Sauce = () => {
    return new PlumTomato();
  };
  createVeggies: () => Array<Veggie> = () => {
    return [new Onion(), new Garlic()];
  };
}

class CaliforniaIngredientFactory implements PizzaIngredientFactory {
  createDough: () => Dough = () => {
    return new Calamari();
  };
  createSauce: () => Sauce = () => {
    return new Marinara();
  };
  createVeggies: () => Array<Veggie> = () => {
    return [new Onion()];
  };
}

const YNStore = new NYPizzaStore();
const YNPizza = YNStore.orderPizza("cheese");

const ChicagoStore = new ChicagoPizzaStore();
const ChicagoPizza = ChicagoStore.orderPizza("cheese");
