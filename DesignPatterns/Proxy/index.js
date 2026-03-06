var GumballMachine = /** @class */ (function () {
    function GumballMachine(location) {
        this.location = location;
    }
    GumballMachine.prototype.getLocation = function () {
        return this.location;
    };
    return GumballMachine;
}());
var GumballMonitor = /** @class */ (function () {
    function GumballMonitor(gumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    GumballMonitor.prototype.report = function () {
        console.log("Gumball machine: " + this.gumballMachine.getLocation());
    };
    return GumballMonitor;
}());
var count = 5;
var gumballMachine = new GumballMachine("192.168.1.1.");
var gumballMonitor = new GumballMonitor(gumballMachine);
gumballMonitor.report();
