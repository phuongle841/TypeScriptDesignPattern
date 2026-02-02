interface State {
  insertQuarter(): void;
  ejectQuarter(): void;
  turnCrank(): void;
  dispense(): void;
}

class GumballMachine {
  SoldOutState: State;
  NoQuarterState: State;
  HasQuarterState: State;
  SoldState: State;
  WinnerState: State;
  state: State;
  count: number = 0;

  constructor(numberOfGumballs: number) {
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

  getCount(): number {
    return this.count;
  }

  setState(state: State): void {
    this.state = state;
  }

  refill(count: number) {
    this.state = this.NoQuarterState;
    this.count = count;
  }

  releaseBall(): void {
    console.log("A gumball comes rolling out the slot");
    if (this.count != 0) {
      this.count--;
    }
  }

  getHasQuarterState(): State {
    return this.HasQuarterState;
  }
  getSoldState(): State {
    return this.SoldState;
  }
  getSoldOutState(): State {
    return this.SoldOutState;
  }
  getNoQuarterState(): State {
    return this.NoQuarterState;
  }
  getWinnerState(): State {
    return this.WinnerState;
  }

  InsertQuarter(): void {
    this.state.insertQuarter();
  }

  ejectQuarter(): void {
    this.state.ejectQuarter();
  }
  turnCrank(): void {
    this.state.turnCrank();
    this.state.dispense();
  }
}

class SoldState implements State {
  gumballMachine: GumballMachine;
  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }
  insertQuarter(): void {
    console.log("Please wait, we're already giving you a gumball");
  }
  ejectQuarter(): void {
    console.log("Sorry, you already turn the crank");
  }
  turnCrank(): void {
    console.log("Turn twice doesn't get you another gumball");
  }
  dispense(): void {
    this.gumballMachine.releaseBall();
    if (this.gumballMachine.getCount() > 0) {
      this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    } else {
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    }
  }
}
class SoldOutState implements State {
  gumballMachine: GumballMachine;
  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }
  insertQuarter(): void {
    console.log("Sorry, but the machine is out of gumball");
  }
  ejectQuarter(): void {
    console.log(
      "The machine out of ball, and you haven't insert a quarter yet",
    );
  }
  turnCrank(): void {
    console.log("There are no gumballs");
  }
  dispense(): void {
    console.log("There is no ball to dispensed");
  }
}

class NoQuarterState implements State {
  gumballMachine: GumballMachine;
  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter(): void {
    console.log("You Inserted a quarter");
    this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
  }
  ejectQuarter(): void {
    console.log("You haven't insert a quarter");
  }
  turnCrank(): void {
    console.log("You turn but, but there is no quarter");
  }
  dispense(): void {
    console.log("You need to pay first");
  }
}
class HasQuarterState implements State {
  gumballMachine: GumballMachine;
  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }
  insertQuarter(): void {
    console.log("You cannot insert another quarter");
  }
  ejectQuarter(): void {
    console.log("Quarter returned");
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }
  turnCrank(): void {
    console.log("You turn ...");
    const winner: number = randomIntFromInterval(0, 1);
    if (winner == 0 && this.gumballMachine.getCount() > 1) {
      this.gumballMachine.setState(this.gumballMachine.getWinnerState());
    } else {
      this.gumballMachine.setState(this.gumballMachine.getSoldState());
    }
  }
  dispense(): void {
    console.log("No gumball dispensed");
  }
}
class WinnerState implements State {
  gumballMachine: GumballMachine;
  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }
  insertQuarter(): void {
    console.log("Please, wait we are delivering you another gumball");
  }
  ejectQuarter(): void {
    console.log("Sorry, you already turn the crank");
  }
  turnCrank(): void {
    console.log("Turn twice doesn't get you another gumball");
  }
  dispense(): void {
    console.log("You are the winner! you get 2 gumballs for 1 quarter");
    this.gumballMachine.releaseBall();
    if (this.gumballMachine.getCount() == 0) {
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    } else {
      this.gumballMachine.releaseBall();
      if (this.gumballMachine.getCount() > 0) {
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
      } else {
        this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
      }
    }
  }
}

// Source - https://stackoverflow.com/a/7228322
// Posted by Francisc, modified by community. See post 'Timeline' for change history
// Retrieved 2026-02-01, License - CC BY-SA 4.0

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const gumballMachine: GumballMachine = new GumballMachine(5);
console.log(gumballMachine.getCount());
gumballMachine.InsertQuarter();
gumballMachine.turnCrank();

console.log(gumballMachine.getCount());

gumballMachine.InsertQuarter();
gumballMachine.turnCrank();
gumballMachine.InsertQuarter();
gumballMachine.turnCrank();

console.log(gumballMachine.getCount());
