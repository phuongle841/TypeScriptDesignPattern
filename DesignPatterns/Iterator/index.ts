class MenuItem {
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
    this.name = name;
    this.description = description;
    this.vegetarian = vegetarian;
    this.price = price;
  }
  getName: () => string = () => this.name;
  getDescription: () => string = () => this.description;
  getPrice: () => number = () => this.price;
  isVegaterian: () => boolean = () => this.vegetarian;
}

interface Menu {
  createItorator(): MyIterator;
}

class PancakeHouseMenu implements Menu {
  menuItems: MenuItem[];
  constructor() {
    this.menuItems = [];

    this.addItem(
      "K&B’s Pancake Breakfast",
      "Pancakes with scrambled eggs, and toast",
      true,
      2.99
    );
    this.addItem(
      "Regular Pancake Breakfast",
      "Pancakes with fried eggs, sausage",
      false,
      2.99
    );
    this.addItem(
      "Blueberry Pancakes",
      "Pancakes made with fresh blueberries",
      true,
      3.49
    );
    this.addItem(
      "Waffles",
      "Waffles, with your choice of blueberries or strawberries",
      true,
      3.59
    );
  }

  addItem = (
    name: string,
    description: string,
    isVegaterian: boolean,
    price: number
  ) => {
    const item = new MenuItem(name, description, isVegaterian, price);
    this.menuItems.push(item);
  };

  createItorator: () => MyIterator = () =>
    new LunchMenuItorator(this.menuItems);
}

class DinerMenu implements Menu {
  MAX_ITEMS: number = 6;
  numberOfItem: number = 0;
  menuItems: MenuItem[];
  constructor() {
    this.menuItems = [];

    this.addItem(
      "Vegetarian BLT",
      "(Fakin’) Bacon with lettuce & tomato on whole wheat",
      true,
      2.99
    );
    this.addItem(
      "BLT",
      "Bacon with lettuce & tomato on whole wheat",
      false,
      2.99
    );
    this.addItem(
      "Soup of the day",
      "Soup of the day, with a side of potato salad",
      false,
      3.29
    );
    this.addItem(
      "Hotdog",
      "A hot dog, with saurkraut, relish, onions, topped with cheese",
      false,
      3.05
    );
  }

  addItem = (
    name: string,
    description: string,
    isVegaterian: boolean,
    price: number
  ) => {
    const item = new MenuItem(name, description, isVegaterian, price);
    if (this.numberOfItem >= this.MAX_ITEMS) {
      console.error("Sorry, the list is full");
    } else {
      this.menuItems.push(item);
      this.numberOfItem++;
    }
  };
  createItorator: () => MyIterator = () =>
    new DinerMenuItorator(this.menuItems);
}

interface MyIterator {
  hasNext: () => boolean;
  next: () => object;
}

class DinerMenuItorator implements MyIterator {
  menuItems: MenuItem[];
  position: number;
  constructor(menuItems: MenuItem[]) {
    this.menuItems = menuItems;
    this.position = 0;
  }

  hasNext: () => boolean = () => {
    if (
      this.position > this.menuItems.length ||
      this.menuItems[this.position] == null
    ) {
      return false;
    } else {
      return true;
    }
  };
  next: () => object = () => {
    const item: MenuItem = this.menuItems[this.position];
    this.position++;
    return item;
  };
}

class LunchMenuItorator implements MyIterator {
  menuItems: MenuItem[];
  position: number;
  constructor(menuItems: MenuItem[]) {
    this.menuItems = menuItems;
    this.position = 0;
  }
  hasNext: () => boolean = () => {
    if (
      this.position > this.menuItems.length ||
      this.menuItems[this.position] == null
    ) {
      return false;
    } else {
      return true;
    }
  };
  next: () => object = () => {
    const item: MenuItem = this.menuItems[this.position] as MenuItem;
    this.position++;
    return item;
  };
}

class Waitress {
  pancakeHouseMenu: Menu;
  dinerMenu: Menu;
  constructor(pancakeHouseMenu: Menu, dinnerMenu: Menu) {
    this.pancakeHouseMenu = pancakeHouseMenu;
    this.dinerMenu = dinnerMenu;
  }

  printMenu(): void;
  printMenu(itorator: MyIterator): void;
  printMenu(itorator?: MyIterator): void {
    if (itorator == null) {
      const pancakeItorator = this.pancakeHouseMenu.createItorator();
      const dinnerItorator = this.dinerMenu.createItorator();
      console.log("Menu------\nBreakfast");
      this.printMenu(pancakeItorator);
      console.log("Lunch");
      this.printMenu(dinnerItorator);
    } else {
      while (itorator.hasNext()) {
        const menuItem: MenuItem = itorator.next() as MenuItem;
        console.log(
          menuItem.getName() +
            ", " +
            menuItem.getPrice() +
            ", " +
            menuItem.getDescription()
        );
      }
    }
  }
  printBreakfastMenu: () => void = () => {};
  printLunchMenu: () => void = () => {
    const breakfastItems: MyIterator = this.pancakeHouseMenu.createItorator();
    const dinerItems: MyIterator = this.dinerMenu.createItorator();
  };
  printVegetarianMenu: () => void = () => {};
  isVegetarian: (name: string) => boolean = () => {
    return true;
  };
}

const pancakeHouseMenu = new PancakeHouseMenu();
const dinnerMenu = new DinerMenu();

const waitress = new Waitress(pancakeHouseMenu, dinnerMenu);
waitress.printMenu();
