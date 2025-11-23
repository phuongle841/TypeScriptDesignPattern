var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var simplePizzaFactory = /** @class */ (function () {
    function simplePizzaFactory() {
    }
    simplePizzaFactory.prototype.createPizza = function (type) {
        if (type.match("cheese")) {
            this.pizza = new CheesePizza(new NYIngredientFactory());
        }
        else if (type.match("pepperoni ")) {
            this.pizza = new ChicagoChesePizza(new CaliforniaIngredientFactory());
        }
        return this.pizza;
    };
    return simplePizzaFactory;
}());
var Pizza = /** @class */ (function () {
    function Pizza(pizzaIngredientFactory) {
        this.name = "Pizza";
        this.toppings = new Array();
        this.bake = function () {
            console.log("Baking");
        };
        this.cut = function () {
            console.log("Cutting");
        };
        this.box = function () {
            console.log("Boxing");
        };
        this.pizzaIngredientFactory = pizzaIngredientFactory;
    }
    return Pizza;
}());
var CheesePizza = /** @class */ (function (_super) {
    __extends(CheesePizza, _super);
    function CheesePizza(pizzaIngredientFactory) {
        var _this = _super.call(this, pizzaIngredientFactory) || this;
        _this.prepare = function () {
            console.log("Preparing");
            _this.dough = _this.pizzaIngredientFactory.createDough();
            _this.sauce = _this.pizzaIngredientFactory.createSauce();
        };
        _this.name = "Cheese Pizza";
        return _this;
    }
    return CheesePizza;
}(Pizza));
var ChicagoChesePizza = /** @class */ (function (_super) {
    __extends(ChicagoChesePizza, _super);
    function ChicagoChesePizza() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prepare = function () {
            console.log("Preparing");
        };
        _this.cut = function () {
            console.log("Cutting but in square shape");
        };
        return _this;
    }
    return ChicagoChesePizza;
}(Pizza));
var ThickCrust = /** @class */ (function () {
    function ThickCrust() {
        this.getDough = function () {
            return "ThickCrust";
        };
    }
    return ThickCrust;
}());
var Calamari = /** @class */ (function () {
    function Calamari() {
        this.getDough = function () {
            return "Calamari";
        };
    }
    return Calamari;
}());
var Marinara = /** @class */ (function () {
    function Marinara() {
    }
    return Marinara;
}());
var PlumTomato = /** @class */ (function () {
    function PlumTomato() {
    }
    return PlumTomato;
}());
var Garlic = /** @class */ (function () {
    function Garlic() {
    }
    return Garlic;
}());
var Onion = /** @class */ (function () {
    function Onion() {
    }
    return Onion;
}());
var PizzaStore = /** @class */ (function () {
    function PizzaStore() {
        var _this = this;
        this.orderPizza = function (type) {
            var pizza = _this.createPizza(type);
            pizza.prepare();
            pizza.bake();
            pizza.cut();
            pizza.box();
            return pizza;
        };
    }
    return PizzaStore;
}());
var NYPizzaStore = /** @class */ (function (_super) {
    __extends(NYPizzaStore, _super);
    function NYPizzaStore() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createPizza = function () {
            return new CheesePizza(new NYIngredientFactory());
        };
        return _this;
    }
    return NYPizzaStore;
}(PizzaStore));
var ChicagoPizzaStore = /** @class */ (function (_super) {
    __extends(ChicagoPizzaStore, _super);
    function ChicagoPizzaStore() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createPizza = function () {
            return new ChicagoChesePizza(new CaliforniaIngredientFactory());
        };
        return _this;
    }
    return ChicagoPizzaStore;
}(PizzaStore));
var NYIngredientFactory = /** @class */ (function () {
    function NYIngredientFactory() {
        this.createDough = function () {
            return new ThickCrust();
        };
        this.createSauce = function () {
            return new PlumTomato();
        };
        this.createVeggies = function () {
            return [new Onion(), new Garlic()];
        };
    }
    return NYIngredientFactory;
}());
var CaliforniaIngredientFactory = /** @class */ (function () {
    function CaliforniaIngredientFactory() {
        this.createDough = function () {
            return new Calamari();
        };
        this.createSauce = function () {
            return new Marinara();
        };
        this.createVeggies = function () {
            return [new Onion()];
        };
    }
    return CaliforniaIngredientFactory;
}());
var YNStore = new NYPizzaStore();
var YNPizza = YNStore.orderPizza("cheese");
var ChicagoStore = new ChicagoPizzaStore();
var ChicagoPizza = ChicagoStore.orderPizza("cheese");
