interface Command {
  execute: () => void;
  undo: () => void;
}

class Light {
  on: () => void = () => {
    console.log("The light is now turn on YAMETE KUDASAI");
  };
  off: () => void = () => {
    console.log("The light is now turn off ");
  };
}

class LightOnCommand implements Command {
  private light: Light;
  constructor(light: Light) {
    this.light = light;
  }
  undo: () => void = () => {
    this.light.off();
  };
  execute: () => void = () => {
    this.light.on();
  };
}

class LightOffCommand implements Command {
  private light: Light;
  constructor(light: Light) {
    this.light = light;
  }
  undo: () => void = () => {
    this.light.on();
  };
  execute: () => void = () => {
    this.light.off();
  };
}

class GarageDoor {
  up: () => void = () => {
    console.log("The garage door is now opened");
  };
  down: () => void = () => {
    console.log("The garage door is now closed");
  };
  stop: () => void = () => {};
  lightOn: () => void = () => {};
  lightOff: () => void = () => {};
}

class GarageDoorOnCommand implements Command {
  private garageDoor: GarageDoor;
  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }
  undo: () => void = () => {
    this.garageDoor.down();
  };
  execute: () => void = () => {
    this.garageDoor.up();
  };
}

class GarageDoorOffCommand implements Command {
  private garageDoor: GarageDoor;
  constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }
  undo: () => void = () => {
    this.garageDoor.up();
  };
  execute: () => void = () => {
    this.garageDoor.down();
  };
}

class NoCommand implements Command {
  undo: () => void = () => {};
  execute: () => void = () => {};
}

class SimpleControlRemote implements Object {
  private numberOfSlot: number;
  private offCommand: Command[];
  private onCommand: Command[];
  private undoCommand: Command;
  constructor() {
    this.numberOfSlot = 7;
    this.onCommand = new Array<Command>(this.numberOfSlot);
    this.offCommand = new Array<Command>(this.numberOfSlot);
    for (let i = 0; i < this.numberOfSlot; i++) {
      this.onCommand[i] = new NoCommand();
      this.offCommand[i] = new NoCommand();
    }
    this.undoCommand = new NoCommand();
  }
  SetCommand: (slot: number, onCommand: Command, offCommand: Command) => void =
    (slot, onCommand, offCommand) => {
      this.onCommand[slot] = onCommand;
      this.offCommand[slot] = offCommand;
    };
  ButtonOn: (slot: number) => void = (slot) => {
    this.onCommand[slot].execute();
    this.undoCommand = this.onCommand[slot];
  };
  ButtonOff: (slot: number) => void = (slot) => {
    this.offCommand[slot].execute();
    this.undoCommand = this.offCommand[slot];
  };
  ButtonUndo: () => void = () => {
    this.undoCommand.undo();
  };
}

class MacroCommand implements Command {
  private commands: Command[];
  constructor(commands: Command[]) {
    this.commands = commands;
  }
  execute: () => void = () => {
    for (let i = 0; i < this.commands.length; i++) {
      this.commands[i].execute();
    }
  };
  undo: () => void = () => {
    for (let i = 0; i < this.commands.length; i++) {
      this.commands[i].undo();
    }
  };
}

const light: Light = new Light();
const lightOnCommand: LightOnCommand = new LightOnCommand(light);
const lightOffCommand: LightOffCommand = new LightOffCommand(light);

const garageDoor: GarageDoor = new GarageDoor();
const garageDoorOnCommand: GarageDoorOnCommand = new GarageDoorOnCommand(
  garageDoor,
);
const garageDoorOffCommand: GarageDoorOffCommand = new GarageDoorOffCommand(
  garageDoor,
);

const MacroOnCommand = new MacroCommand([lightOnCommand, garageDoorOnCommand]);
const MacroOffCommand = new MacroCommand([
  garageDoorOffCommand,
  lightOffCommand,
]);

const remote: SimpleControlRemote = new SimpleControlRemote();
remote.SetCommand(0, lightOnCommand, lightOffCommand);
remote.SetCommand(1, garageDoorOnCommand, garageDoorOffCommand);
remote.SetCommand(2, MacroOnCommand, MacroOffCommand);
remote.ButtonOn(0);
remote.ButtonOff(0);
console.log("Using macro commands");

remote.ButtonOn(2);
remote.ButtonOff(2);
remote.ButtonUndo();
