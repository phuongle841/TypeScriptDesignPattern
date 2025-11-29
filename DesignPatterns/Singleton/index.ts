class Singleton {
  private static uniqueInstance: Singleton;
  private _Data: number;
  public get Data(): number {
    return this._Data;
  }
  public set Data(value: number) {
    this._Data = value;
  }
  constructor() {
    this._Data = 0;
  }

  static getInstance: () => Singleton = () => {
    if (this.uniqueInstance == null) {
      this.uniqueInstance = new Singleton();
    }
    return this.uniqueInstance;
  };
}

const singleton: Singleton = Singleton.getInstance();
singleton.Data = 10;
console.log(singleton.Data);
const singleton2: Singleton = Singleton.getInstance();
singleton2.Data = 20;
if (singleton === singleton2) {
  console.log("this is singleton baby");
  console.log(singleton.Data);
}
