var Turner = /** @class */ (function () {
    function Turner() {
        this.on = function () { };
        this.off = function () { };
        this.setAm = function () { };
        this.setFm = function () { };
        this.setFrequency = function () { };
    }
    return Turner;
}());
var DvdPlayer = /** @class */ (function () {
    function DvdPlayer() {
        this.on = function () { };
        this.off = function () { };
        this.eject = function () { };
        this.play = function () { };
        this.setSurroundAudio = function () { };
        this.setTwoChannelAudio = function () { };
        this.stop = function () { };
    }
    return DvdPlayer;
}());
var CdPlayer = /** @class */ (function () {
    function CdPlayer() {
        this.on = function () { };
        this.off = function () { };
        this.eject = function () { };
        this.play = function () { };
        this.stop = function () { };
    }
    return CdPlayer;
}());
var FacadePreventNameCollapse;
(function (FacadePreventNameCollapse) {
    var Screen = /** @class */ (function () {
        function Screen() {
            this.up = function () { };
            this.down = function () { };
        }
        return Screen;
    }());
    FacadePreventNameCollapse.Screen = Screen;
})(FacadePreventNameCollapse || (FacadePreventNameCollapse = {}));
var Projector = /** @class */ (function () {
    function Projector(dvdPlayer) {
        this.on = function () { };
        this.off = function () { };
        this.tvMode = function () { };
        this.wideScreenMode = function () { };
        this.dvdPlayer = dvdPlayer;
    }
    return Projector;
}());
var PopcornPopper = /** @class */ (function () {
    function PopcornPopper() {
        this.on = function () { };
        this.off = function () { };
        this.pop = function () { };
    }
    return PopcornPopper;
}());
var TheaterLights = /** @class */ (function () {
    function TheaterLights() {
        this.on = function () { };
        this.off = function () { };
        this.dim = function () { };
    }
    return TheaterLights;
}());
var Amplifier = /** @class */ (function () {
    function Amplifier(turner, dvdPlayer, cdPlayer) {
        this.on = function () { };
        this.off = function () { };
        this.setCd = function () { };
        this.setDvd = function () { };
        this.setSteroSound = function () { };
        this.setSurroundSound = function () { };
        this.setTuner = function () { };
        this.setVolume = function () { };
        this.turner = turner;
        this.dvdPlayer = dvdPlayer;
        this.cdPlayer = cdPlayer;
    }
    return Amplifier;
}());
var HomeTheaterFacade = /** @class */ (function () {
    function HomeTheaterFacade(amp, turner, dvd, cd, projector, lights, screen, popper) {
        var _this = this;
        this.watchMovie = function (movie) {
            console.log("Get ready to watch movie!!!");
            _this.popper.on();
            _this.popper.pop();
            _this.lights.dim(10);
            _this.screen.down();
            _this.projector.on();
            _this.projector.wideScreenMode();
            _this.amp.on();
            _this.amp.setDvd(_this.dvd);
            _this.amp.setSurroundSound();
            _this.amp.setVolume(5);
            _this.dvd.on();
            _this.dvd.play(movie);
        };
        this.endMovie = function () {
            console.log("Shutting movie theater down");
            _this.popper.off();
            _this.lights.on();
            _this.screen.up();
            _this.projector.off();
            _this.amp.off();
            _this.dvd.stop();
            _this.dvd.eject();
            _this.dvd.off();
        };
        this.amp = amp;
        this.turner = turner;
        this.dvd = dvd;
        this.cd = cd;
        this.projector = projector;
        this.lights = lights;
        this.screen = screen;
        this.popper = popper;
    }
    return HomeTheaterFacade;
}());
var tuner = new Turner();
var dvd = new DvdPlayer();
var cd = new CdPlayer();
var amp = new Amplifier(tuner, dvd, cd);
var projector = new Projector(dvd);
var light = new TheaterLights();
var theaterScreen = new FacadePreventNameCollapse.Screen();
var popper = new PopcornPopper();
var homeTheaterFacade = new HomeTheaterFacade(amp, tuner, dvd, cd, projector, light, theaterScreen, popper);
homeTheaterFacade.watchMovie("Game of thrones");
homeTheaterFacade.endMovie();
