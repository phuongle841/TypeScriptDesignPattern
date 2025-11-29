var Light = /** @class */ (function () {
    function Light() {
        this.on = function () {
            console.log("The light is now turn on YAMETE KUDASAI");
        };
        this.off = function () {
            console.log("The light is now turn off ");
        };
    }
    return Light;
}());
var LightOnCommand = /** @class */ (function () {
    function LightOnCommand(light) {
        var _this = this;
        this.undo = function () {
            _this.light.off();
        };
        this.execute = function () {
            _this.light.on();
        };
        this.light = light;
    }
    return LightOnCommand;
}());
var LightOffCommand = /** @class */ (function () {
    function LightOffCommand(light) {
        var _this = this;
        this.undo = function () {
            _this.light.on();
        };
        this.execute = function () {
            _this.light.off();
        };
        this.light = light;
    }
    return LightOffCommand;
}());
var GarageDoor = /** @class */ (function () {
    function GarageDoor() {
        this.up = function () {
            console.log("The garage door is now opened");
        };
        this.down = function () {
            console.log("The garage door is now closed");
        };
        this.stop = function () { };
        this.lightOn = function () { };
        this.lightOff = function () { };
    }
    return GarageDoor;
}());
var GarageDoorOnCommand = /** @class */ (function () {
    function GarageDoorOnCommand(garageDoor) {
        var _this = this;
        this.undo = function () {
            _this.garageDoor.down();
        };
        this.execute = function () {
            _this.garageDoor.up();
        };
        this.garageDoor = garageDoor;
    }
    return GarageDoorOnCommand;
}());
var GarageDoorOffCommand = /** @class */ (function () {
    function GarageDoorOffCommand(garageDoor) {
        var _this = this;
        this.undo = function () {
            _this.garageDoor.up();
        };
        this.execute = function () {
            _this.garageDoor.down();
        };
        this.garageDoor = garageDoor;
    }
    return GarageDoorOffCommand;
}());
var NoCommand = /** @class */ (function () {
    function NoCommand() {
        this.undo = function () { };
        this.execute = function () { };
    }
    return NoCommand;
}());
var SimpleControlRemote = /** @class */ (function () {
    function SimpleControlRemote() {
        var _this = this;
        this.SetCommand = function (slot, onCommand, offCommand) {
            _this.onCommand[slot] = onCommand;
            _this.offCommand[slot] = offCommand;
        };
        this.ButtonOn = function (slot) {
            _this.onCommand[slot].execute();
            _this.undoCommand = _this.onCommand[slot];
        };
        this.ButtonOff = function (slot) {
            _this.offCommand[slot].execute();
            _this.undoCommand = _this.offCommand[slot];
        };
        this.ButtonUndo = function () {
            _this.undoCommand.undo();
        };
        this.numberOfSlot = 7;
        this.onCommand = new Array(this.numberOfSlot);
        this.offCommand = new Array(this.numberOfSlot);
        for (var i = 0; i < this.numberOfSlot; i++) {
            this.onCommand[i] = new NoCommand();
            this.offCommand[i] = new NoCommand();
        }
        this.undoCommand = new NoCommand();
    }
    return SimpleControlRemote;
}());
var MacroCommand = /** @class */ (function () {
    function MacroCommand(commands) {
        var _this = this;
        this.execute = function () {
            for (var i = 0; i < _this.commands.length; i++) {
                _this.commands[i].execute();
            }
        };
        this.undo = function () {
            for (var i = 0; i < _this.commands.length; i++) {
                _this.commands[i].undo();
            }
        };
        this.commands = commands;
    }
    return MacroCommand;
}());
var light = new Light();
var lightOnCommand = new LightOnCommand(light);
var lightOffCommand = new LightOffCommand(light);
var garageDoor = new GarageDoor();
var garageDoorOnCommand = new GarageDoorOnCommand(garageDoor);
var garageDoorOffCommand = new GarageDoorOffCommand(garageDoor);
var MacroOnCommand = new MacroCommand([lightOnCommand, garageDoorOnCommand]);
var MacroOffCommand = new MacroCommand([
    garageDoorOffCommand,
    lightOffCommand,
]);
var remote = new SimpleControlRemote();
remote.SetCommand(0, lightOnCommand, lightOffCommand);
remote.SetCommand(1, garageDoorOnCommand, garageDoorOffCommand);
remote.SetCommand(2, MacroOnCommand, MacroOffCommand);
remote.ButtonOn(0);
remote.ButtonOff(0);
console.log("Using macro commands");
remote.ButtonOn(2);
remote.ButtonOff(2);
remote.ButtonUndo();
