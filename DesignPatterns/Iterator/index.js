var MenuItem = /** @class */ (function () {
    function MenuItem(name, description, vegetarian, price) {
        var _this = this;
        this.getName = function () { return _this.name; };
        this.getDescription = function () { return _this.description; };
        this.getPrice = function () { return _this.price; };
        this.isVegaterian = function () { return _this.vegetarian; };
        this.name = name;
        this.description = description;
        this.vegetarian = vegetarian;
        this.price = price;
    }
    return MenuItem;
}());
var PancakeHouseMenu = /** @class */ (function () {
    function PancakeHouseMenu() {
        var _this = this;
        this.addItem = function (name, description, isVegaterian, price) {
            var item = new MenuItem(name, description, isVegaterian, price);
            _this.menuItems.push(item);
        };
        this.createItorator = function () {
            return new LunchMenuItorator(_this.menuItems);
        };
        this.menuItems = [];
        this.addItem("K&B’s Pancake Breakfast", "Pancakes with scrambled eggs, and toast", true, 2.99);
        this.addItem("Regular Pancake Breakfast", "Pancakes with fried eggs, sausage", false, 2.99);
        this.addItem("Blueberry Pancakes", "Pancakes made with fresh blueberries", true, 3.49);
        this.addItem("Waffles", "Waffles, with your choice of blueberries or strawberries", true, 3.59);
    }
    return PancakeHouseMenu;
}());
var DinerMenu = /** @class */ (function () {
    function DinerMenu() {
        var _this = this;
        this.MAX_ITEMS = 6;
        this.numberOfItem = 0;
        this.addItem = function (name, description, isVegaterian, price) {
            var item = new MenuItem(name, description, isVegaterian, price);
            if (_this.numberOfItem >= _this.MAX_ITEMS) {
                console.error("Sorry, the list is full");
            }
            else {
                _this.menuItems.push(item);
                _this.numberOfItem++;
            }
        };
        this.createItorator = function () {
            return new DinerMenuItorator(_this.menuItems);
        };
        this.menuItems = [];
        this.addItem("Vegetarian BLT", "(Fakin’) Bacon with lettuce & tomato on whole wheat", true, 2.99);
        this.addItem("BLT", "Bacon with lettuce & tomato on whole wheat", false, 2.99);
        this.addItem("Soup of the day", "Soup of the day, with a side of potato salad", false, 3.29);
        this.addItem("Hotdog", "A hot dog, with saurkraut, relish, onions, topped with cheese", false, 3.05);
    }
    return DinerMenu;
}());
var DinerMenuItorator = /** @class */ (function () {
    function DinerMenuItorator(menuItems) {
        var _this = this;
        this.hasNext = function () {
            if (_this.position > _this.menuItems.length ||
                _this.menuItems[_this.position] == null) {
                return false;
            }
            else {
                return true;
            }
        };
        this.next = function () {
            var item = _this.menuItems[_this.position];
            _this.position++;
            return item;
        };
        this.menuItems = menuItems;
        this.position = 0;
    }
    return DinerMenuItorator;
}());
var LunchMenuItorator = /** @class */ (function () {
    function LunchMenuItorator(menuItems) {
        var _this = this;
        this.hasNext = function () {
            if (_this.position > _this.menuItems.length ||
                _this.menuItems[_this.position] == null) {
                return false;
            }
            else {
                return true;
            }
        };
        this.next = function () {
            var item = _this.menuItems[_this.position];
            _this.position++;
            return item;
        };
        this.menuItems = menuItems;
        this.position = 0;
    }
    return LunchMenuItorator;
}());
var Waitress = /** @class */ (function () {
    function Waitress(pancakeHouseMenu, dinnerMenu) {
        var _this = this;
        this.printBreakfastMenu = function () { };
        this.printLunchMenu = function () {
            var breakfastItems = _this.pancakeHouseMenu.createItorator();
            var dinerItems = _this.dinerMenu.createItorator();
        };
        this.printVegetarianMenu = function () { };
        this.isVegetarian = function () {
            return true;
        };
        this.pancakeHouseMenu = pancakeHouseMenu;
        this.dinerMenu = dinnerMenu;
    }
    Waitress.prototype.printMenu = function (itorator) {
        if (itorator == null) {
            var pancakeItorator = this.pancakeHouseMenu.createItorator();
            var dinnerItorator = this.dinerMenu.createItorator();
            console.log("Menu------\nBreakfast");
            this.printMenu(pancakeItorator);
            console.log("Lunch");
            this.printMenu(dinnerItorator);
        }
        else {
            while (itorator.hasNext()) {
                var menuItem = itorator.next();
                console.log(menuItem.getName() +
                    ", " +
                    menuItem.getPrice() +
                    ", " +
                    menuItem.getDescription());
            }
        }
    };
    return Waitress;
}());
var pancakeHouseMenu = new PancakeHouseMenu();
var dinnerMenu = new DinerMenu();
var waitress = new Waitress(pancakeHouseMenu, dinnerMenu);
waitress.printMenu();
