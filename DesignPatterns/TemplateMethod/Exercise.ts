class MyArray {
  static sort: (a: Array<Object>) => void = (a: Array<Object>) => {
    const replicateArray = [...a];
    this.mergeSort(replicateArray, a, 0, a.length, 0);
  };

  private static swap: (des: Array<Object>, a: number, b: number) => void = (
    des: Array<Object>,
    a: number,
    b: number
  ) => {
    const intermediate: Object = des[a];
    des[a] = des[b];
    des[b] = intermediate;
  };
  private static mergeSort: (
    src: Array<Object>,
    des: Array<Object>,
    low: number,
    high: number,
    off: number
  ) => void = (
    src: Array<Object>,
    des: Array<Object>,
    low: number,
    high: number,
    off: number
  ) => {
    for (let i = low; i < high; i++) {
      for (
        let j = i;
        j > low &&
        (des[j - 1] as Comparable).ComparedTo(des[j] as Comparable) == true;
        j--
      ) {
        this.swap(des, j, j - 1);
      }
    }
  };
}
interface Comparable {
  ComparedTo: (a: Object) => boolean;
}

class Duck implements Comparable {
  name: string = "";
  weight: number = 0;
  constructor(name: string, weight: number) {
    this.name = name;
    this.weight = weight;
  }
  toString: () => string = () => {
    return this.name + " weight:" + this.weight;
  };
  ComparedTo: (a: Object) => boolean = (a: Object) => {
    const otherDuck: Duck = a as Duck;
    if (this.weight > otherDuck.weight) {
      return true;
    } else {
      return false;
    }
  };
}

const displayAl = function (duck: Duck) {
  console.log(duck.toString());
};
const ducks = [
  new Duck("Daffy", 8),
  new Duck("Dewey", 2),
  new Duck("Howard", 7),
  new Duck("Louie", 2),
  new Duck("Donald", 10),
  new Duck("Huey", 2),
];

ducks.forEach(displayAl);
MyArray.sort(ducks);
console.log("After sorted:");
ducks.forEach(displayAl);
