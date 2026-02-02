var GumballMachine = /** @class */ (function () {
    function GumballMachine(numberOfGumballs) {
        this.count = 0;
        this.count = numberOfGumballs;
        this.SoldOutState = new SoldOutState(this);
        this.NoQuarterState = new NoQuarterState(this);
        this.HasQuarterState = new HasQuarterState(this);
        this.SoldState = new SoldState(this);
        this.WinnerState = new WinnerState(this);
        this.state = this.SoldOutState;
        if (numberOfGumballs > 0) {
            this.state = this.NoQuarterState;
        }
    }
    GumballMachine.prototype.getCount = function () {
        return this.count;
    };
    GumballMachine.prototype.setState = function (state) {
        this.state = state;
    };
    GumballMachine.prototype.releaseBall = function () {
        console.log("A gumball comes rolling out the slot");
        if (this.count != 0) {
            this.count--;
        }
    };
    GumballMachine.prototype.getHasQuarterState = function () {
        return this.HasQuarterState;
    };
    GumballMachine.prototype.getSoldState = function () {
        return this.SoldState;
    };
    GumballMachine.prototype.getSoldOutState = function () {
        return this.SoldOutState;
    };
    GumballMachine.prototype.getNoQuarterState = function () {
        return this.NoQuarterState;
    };
    GumballMachine.prototype.getWinnerState = function () {
        return this.WinnerState;
    };
    GumballMachine.prototype.InsertQuarter = function () {
        this.state.insertQuarter();
    };
    GumballMachine.prototype.ejectQuarter = function () {
        this.state.ejectQuarter();
    };
    GumballMachine.prototype.turnCrank = function () {
        this.state.turnCrank();
        this.state.dispense();
    };
    return GumballMachine;
}());
var SoldState = /** @class */ (function () {
    function SoldState(gumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    SoldState.prototype.insertQuarter = function () {
        console.log("Please wait, we're already giving you a gumball");
    };
    SoldState.prototype.ejectQuarter = function () {
        console.log("Sorry, you already turn the crank");
    };
    SoldState.prototype.turnCrank = function () {
        console.log("Turn twice doesn't get you another gumball");
    };
    SoldState.prototype.dispense = function () {
        this.gumballMachine.releaseBall();
        if (this.gumballMachine.getCount() > 0) {
            this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
        }
        else {
            this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
        }
    };
    return SoldState;
}());
var SoldOutState = /** @class */ (function () {
    function SoldOutState(gumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    SoldOutState.prototype.insertQuarter = function () {
        console.log("Sorry, but the machine is out of gumball");
    };
    SoldOutState.prototype.ejectQuarter = function () {
        console.log("The machine out of ball, and you haven't insert a quarter yet");
    };
    SoldOutState.prototype.turnCrank = function () {
        console.log("There are no gumballs");
    };
    SoldOutState.prototype.dispense = function () {
        console.log("There is no ball to dispensed");
    };
    return SoldOutState;
}());
var NoQuarterState = /** @class */ (function () {
    function NoQuarterState(gumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    NoQuarterState.prototype.insertQuarter = function () {
        console.log("You Inserted a quarter");
        this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
    };
    NoQuarterState.prototype.ejectQuarter = function () {
        console.log("You haven't insert a quarter");
    };
    NoQuarterState.prototype.turnCrank = function () {
        console.log("You turn but, but there is no quarter");
    };
    NoQuarterState.prototype.dispense = function () {
        console.log("You need to pay first");
    };
    return NoQuarterState;
}());
var HasQuarterState = /** @class */ (function () {
    function HasQuarterState(gumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    HasQuarterState.prototype.insertQuarter = function () {
        console.log("You cannot insert another quarter");
    };
    HasQuarterState.prototype.ejectQuarter = function () {
        console.log("Quarter returned");
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    };
    HasQuarterState.prototype.turnCrank = function () {
        console.log("You turn ...");
        var winner = randomIntFromInterval(0, 1);
        if (winner == 0 && this.gumballMachine.getCount() > 1) {
            this.gumballMachine.setState(this.gumballMachine.getWinnerState());
        }
        else {
            this.gumballMachine.setState(this.gumballMachine.getSoldState());
        }
    };
    HasQuarterState.prototype.dispense = function () {
        console.log("No gumball dispensed");
    };
    return HasQuarterState;
}());
var WinnerState = /** @class */ (function () {
    function WinnerState(gumballMachine) {
        this.gumballMachine = gumballMachine;
    }
    WinnerState.prototype.insertQuarter = function () {
        console.log("Please, wait we are delivering you another gumball");
    };
    WinnerState.prototype.ejectQuarter = function () {
        console.log("Sorry, you already turn the crank");
    };
    WinnerState.prototype.turnCrank = function () {
        console.log("Turn twice doesn't get you another gumball");
    };
    WinnerState.prototype.dispense = function () {
        console.log("You are the winner! you get 2 gumballs for 1 quarter");
        this.gumballMachine.releaseBall();
        if (this.gumballMachine.getCount() == 0) {
            this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
        }
        else {
            this.gumballMachine.releaseBall();
            if (this.gumballMachine.getCount() > 0) {
                this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
            }
            else {
                this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
            }
        }
    };
    return WinnerState;
}());
// Source - https://stackoverflow.com/a/7228322
// Posted by Francisc, modified by community. See post 'Timeline' for change history
// Retrieved 2026-02-01, License - CC BY-SA 4.0
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var gumballMachine = new GumballMachine(5);
console.log(gumballMachine.getCount());
gumballMachine.InsertQuarter();
gumballMachine.turnCrank();
console.log(gumballMachine.getCount());
gumballMachine.InsertQuarter();
gumballMachine.turnCrank();
gumballMachine.InsertQuarter();
gumballMachine.turnCrank();
console.log(gumballMachine.getCount());
