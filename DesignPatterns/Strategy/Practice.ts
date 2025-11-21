abstract class Character {
  private _weaponBehavior: WeaponBehavior;
  constructor(weaponBehavior: WeaponBehavior) {
    this._weaponBehavior = weaponBehavior;
  }
  abstract Emote: Function;
  public get weaponBehavior(): WeaponBehavior {
    return this._weaponBehavior;
  }
  public set weaponBehavior(value: WeaponBehavior) {
    this._weaponBehavior = value;
  }
  fight = () => {
    this.weaponBehavior.useWeapon();
  };
}

interface WeaponBehavior {
  useWeapon: Function;
}

class KnifeBehavior implements WeaponBehavior {
  useWeapon = () => {
    console.log("deal 8 damages");
  };
}

class BowAndArrowBehavior implements WeaponBehavior {
  useWeapon = () => {
    console.log("deal 6 damages");
  };
}

class AxeBehavior implements WeaponBehavior {
  useWeapon = () => {
    console.log("deal 10 damages");
  };
}

class SwordBehavior implements WeaponBehavior {
  useWeapon = () => {
    console.log("deal 2 damages");
  };
}

class Queen extends Character {
  Emote = () => {
    console.log("(⁄ ⁄•⁄ω⁄•⁄ ⁄) AHHHHHHHHHHHH!!!");
  };
  constructor() {
    super(new BowAndArrowBehavior());
  }
}

const queen = new Queen();
console.log(queen.weaponBehavior);
queen.fight();
queen.Emote();
