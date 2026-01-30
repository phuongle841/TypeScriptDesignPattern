class MenuComponent {
    constructor() {
        this.getName = () => {
            throw Error("UnsupportedOperationException");
        };
        this.getDescription = () => {
            throw Error("UnsupportedOperationException");
        };
        this.getPrice = () => {
            throw Error("UnsupportedOperationException");
        };
        this.isVegaterian = () => {
            throw Error("UnsupportedOperationException");
        };
    }
    add(menuComponents) {
        throw Error("UnsupportedOperationException");
    }
    remove(menuComponents) {
        throw Error("UnsupportedOperationException");
    }
    getChild(i) {
        throw Error("UnsupportedOperationException");
    }
    print() {
        throw Error("UnsupportedOperationException");
    }
}
class MenuItem extends MenuComponent {
    constructor(name, description, vegetarian, price) {
        super();
        this.getName = () => this.name;
        this.getDescription = () => this.description;
        this.getPrice = () => this.price;
        this.isVegaterian = () => this.vegetarian;
        this.name = name;
        this.description = description;
        this.vegetarian = vegetarian;
        this.price = price;
    }
    print() {
        console.log("  " + this.getName());
        this.isVegaterian() && console.log("(v)");
        console.log(", " + this.getPrice());
        console.log("    --" + this.getDescription());
    }
}
class Menu extends MenuComponent {
    constructor(name, description) {
        super();
        this.getName = () => this.name;
        this.getDescription = () => this.description;
        this.name = name;
        this.description = description;
        this.menuComponents = [];
    }
    add(menuComponent) {
        this.menuComponents.push(menuComponent);
    }
    remove(menuComponent) {
        const index = this.menuComponents.findIndex((e) => e === menuComponent);
        if (index > -1) {
            this.menuComponents.splice(index, 1);
        }
    }
    getChild(i) {
        // null-able?
        return this.menuComponents[i];
    }
    print() {
        console.log("  " + this.getName());
        console.log("    --" + this.getDescription());
        console.log("-------------");
        this.menuComponents.forEach((e) => e.print());
    }
}
class Waitress {
    constructor(allMenus) {
        this.allMenus = allMenus;
    }
    print() {
        this.allMenus.print();
    }
}
const pancakeHouseMenu = new Menu("PANCAKE HOUSE MENU", "Breakfast");
const dinerMenu = new Menu("DINER MENU", "Lunch");
const cafeMenu = new Menu("CAFE MENU", "Cafe");
const desertMenu = new Menu("DESERT MENU", "Desert of course");
const allMenus = new Menu("ALL MENUS", "All menu combined");
allMenus.add(dinerMenu);
allMenus.add(pancakeHouseMenu);
allMenus.add(cafeMenu);
dinerMenu.add(new MenuItem("Pasta", "Spaghetti with Marinara Sauce, and a slice of sourdough bread", true, 3.89));
dinerMenu.add(desertMenu);
desertMenu.add(new MenuItem("Apple pie", "Apple pie with a flakey crust, topped with vanilla icecream", true, 1.59));
const waitress = new Waitress(allMenus);
allMenus.print();
