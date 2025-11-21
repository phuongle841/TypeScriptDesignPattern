interface Subject {
  registerObserver: (o: Observer) => void;
  removeObserver: (o: Observer) => void;
  notifyObserver: () => void;
}

interface Observer {
  notify: (data: number) => void;
}

interface DisplayElement {
  display: () => void;
}

class WeatherData implements Subject {
  private observers: Array<Observer>;
  private data: number;
  constructor() {
    this.observers = [];
    this.data = 0;
  }

  registerObserver = (o: Observer) => {
    this.observers.push(o);
  };

  removeObserver = (o: Observer) => {
    let i: number = this.observers.indexOf(o);
    if (i >= 0) {
      this.observers.splice(i, 1);
    }
  };

  notifyObserver = () => {
    this.observers.forEach((e) => {
      e.notify(this.data);
    });
  };

  measurementsChanged = () => {
    this.notifyObserver();
  };

  /**
   * SetMeasurements
   */
  public SetMeasurements(data: number) {
    this.data = data;
    this.measurementsChanged();
  }
}

class CurrentConditionsDisplay implements Observer, DisplayElement {
  private data: number | undefined;
  private weatherData: Subject;
  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }
  display = () => {
    console.log("Display current informations: " + this.data);
  };
  notify = (data: number) => {
    this.data = data;
    this.display();
  };
}

class StatisticDisplay implements Observer, DisplayElement {
  private data: number | undefined;
  private weatherData: Subject;
  constructor(o: Subject) {
    this.weatherData = o;
    o.registerObserver(this);
  }
  notify = (data: number) => {
    this.data = data;
    this.display();
  };
  display = () => {
    console.log("Display statistic information: " + this.data);
  };
}

const weatherData = new WeatherData();
const currentConditionsDisplay: CurrentConditionsDisplay =
  new CurrentConditionsDisplay(weatherData);
const currentConditionsDisplay2 = new StatisticDisplay(weatherData);
weatherData.SetMeasurements(10);
weatherData.removeObserver(currentConditionsDisplay2);
weatherData.SetMeasurements(67);
