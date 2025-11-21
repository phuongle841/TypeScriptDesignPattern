var WeatherData = /** @class */ (function () {
    function WeatherData() {
        var _this = this;
        this.registerObserver = function (o) {
            _this.observers.push(o);
        };
        this.removeObserver = function (o) {
            var i = _this.observers.indexOf(o);
            if (i > 0) {
                _this.observers.splice(i, 1);
            }
        };
        this.notifyObserver = function () {
            _this.observers.forEach(function (e) {
                e.notify(_this.data);
            });
        };
        this.measurementsChanged = function () {
            _this.notifyObserver();
        };
        this.observers = [];
        this._data = 0;
    }
    Object.defineProperty(WeatherData.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * SetMeasurements
     */
    WeatherData.prototype.SetMeasurements = function (data) {
        this.data = data;
        this.measurementsChanged();
    };
    return WeatherData;
}());
var CurrentConditionsDisplay = /** @class */ (function () {
    function CurrentConditionsDisplay(weatherData) {
        var _this = this;
        this.display = function () {
            console.log("Display current informations: " + _this.data);
        };
        this.notify = function (data) {
            _this.data = data;
            _this.display();
        };
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }
    return CurrentConditionsDisplay;
}());
var StatisticDisplay = /** @class */ (function () {
    function StatisticDisplay(o) {
        var _this = this;
        this.notify = function (data) {
            _this.data = data;
            _this.display();
        };
        this.display = function () {
            console.log("Display statistic information: " + _this.data);
        };
        this.weatherData = o;
        o.registerObserver(this);
    }
    return StatisticDisplay;
}());
var weatherData = new WeatherData();
var currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
var currentConditionsDisplay2 = new StatisticDisplay(weatherData);
weatherData.SetMeasurements(10);
weatherData.removeObserver(currentConditionsDisplay2);
weatherData.SetMeasurements(67);
