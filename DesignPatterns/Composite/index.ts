abstract class MenuComponent {
  add(menuComponents: MenuComponent): void {
    throw Error("UnsupportedOperationException");
  }
  remove(menuComponents: MenuComponent): void {
    throw Error("UnsupportedOperationException");
  }
  getChild(i: number): MenuComponent {
    throw Error("UnsupportedOperationException");
  }

  getName: () => string = () => {
    throw Error("UnsupportedOperationException");
  };
  getDescription: () => string = () => {
    throw Error("UnsupportedOperationException");
  };
  getPrice: () => number = () => {
    throw Error("UnsupportedOperationException");
  };
  isVegetarian: () => boolean = () => {
    throw Error("UnsupportedOperationException");
  };

  print(): void {
    throw Error("UnsupportedOperationException");
  }

  crateIterator(): MyIterator {
    throw Error("UnsupportedOperationException");
  }
}

interface MyIterator {
  hasNext: () => boolean;
  next: () => object;
}

class NullIterator implements MyIterator {
  hasNext: () => boolean = () => true;
  next: () => object = () => Object;
}

class MenuItem extends MenuComponent {
  name: string;
  description: string;
  vegetarian: boolean;
  price: number;

  constructor(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    super();
    this.name = name;
    this.description = description;
    this.vegetarian = vegetarian;
    this.price = price;
  }
  getName: () => string = () => this.name;
  getDescription: () => string = () => this.description;
  getPrice: () => number = () => this.price;
  isVegetarian: () => boolean = () => this.vegetarian;
  print(): void {
    console.log("  " + this.getName());
    this.isVegetarian() && console.log("(v)");
    console.log(", " + this.getPrice());
    console.log("    --" + this.getDescription());
  }
}

class Menu extends MenuComponent {
  menuComponents: Array<MenuComponent>;
  iterator: MyIterator | null = null;
  name: string;
  description: string;

  constructor(name: string, description: string) {
    super();
    this.name = name;
    this.description = description;
    this.menuComponents = [];
  }

  add(menuComponent: MenuComponent): void {
    this.menuComponents.push(menuComponent);
  }
  remove(menuComponent: MenuComponent): void {
    const index: number = this.menuComponents.findIndex(
      (e) => e === menuComponent
    );
    if (index > -1) {
      this.menuComponents.splice(index, 1);
    }
  }
  getChild(i: number): MenuComponent {
    // null-able?
    return this.menuComponents[i] as MenuComponent;
  }
  getName: () => string = () => this.name;
  getDescription: () => string = () => this.description;

  print(): void {
    console.log("  " + this.getName());
    console.log("    --" + this.getDescription());
    console.log("-------------");
    this.menuComponents.forEach((e) => e.print());
  }
  crateIterator(): MyIterator {
    if (this.iterator == null) {
    }
    return new NullIterator();
  }
}

class Waitress {
  allMenus: MenuComponent;
  constructor(allMenus: MenuComponent) {
    this.allMenus = allMenus;
  }
  print(): void {
    this.allMenus.print();
  }
}

const pancakeHouseMenu: MenuComponent = new Menu(
  "PANCAKE HOUSE MENU",
  "Breakfast"
);

const dinerMenu: MenuComponent = new Menu("DINER MENU", "Lunch");
const cafeMenu: MenuComponent = new Menu("CAFE MENU", "Cafe");
const desertMenu: MenuComponent = new Menu("DESERT MENU", "Desert of course");

const allMenus = new Menu("ALL MENUS", "All menu combined");
allMenus.add(dinerMenu);
allMenus.add(pancakeHouseMenu);
allMenus.add(cafeMenu);

dinerMenu.add(
  new MenuItem(
    "Pasta",
    "Spaghetti with Marinara Sauce, and a slice of sourdough bread",
    true,
    3.89
  )
);
dinerMenu.add(desertMenu);

desertMenu.add(
  new MenuItem(
    "Apple pie",
    "Apple pie with a flakey crust, topped with vanilla ice-cream",
    true,
    1.59
  )
);

interface Stack<T> {
  empty(): boolean;
  peek(): T;
  pop(): T;
  push(e: T): void;
  search(o: object): number;
}

class MyStack implements Stack<MenuItem> {
  private stack: MenuItem[];
  private length: number;
  constructor() {
    this.stack = [];
    this.length = 0;
  }
  empty(): boolean {
    return this.stack.length == 0;
  }
  peek(): MenuItem {
    return this.stack[this.length];
  }
  pop(): MenuItem {
    const item = this.stack[this.length];
    this.length--;
    return item;
  }
  push(e: MenuItem): void {
    this.stack.push(e);
    this.length++;
  }
  search(o: object): number {
    let index = 0;
    this.stack.forEach((e, i) => {
      if (e === o) {
        index = i;
      }
    });
    return index;
  }
}

class CompositeIterator implements MyIterator {
  hasNext(): boolean {
    return true;
  }
  next(): object {
    return Object;
  }
}
