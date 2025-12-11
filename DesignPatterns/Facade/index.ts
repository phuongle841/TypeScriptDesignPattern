class Turner {
  amplifier!: Amplifier;
  constructor() {}
  on: Function = () => {};
  off: Function = () => {};
  setAm: Function = () => {};
  setFm: Function = () => {};
  setFrequency: Function = () => {};
}

class DvdPlayer {
  amplifier!: Amplifier;
  constructor() {}
  on: Function = () => {};
  off: Function = () => {};
  eject: Function = () => {};
  play: Function = () => {};
  setSurroundAudio: Function = () => {};
  setTwoChannelAudio: Function = () => {};
  stop: Function = () => {};
}

class CdPlayer {
  amplifier!: Amplifier;
  constructor() {}
  on: Function = () => {};
  off: Function = () => {};
  eject: Function = () => {};
  play: Function = () => {};
  stop: Function = () => {};
}

namespace FacadePreventNameCollapse {
  export class Screen {
    up: Function = () => {};
    down: Function = () => {};
  }
}

class Projector {
  dvdPlayer: DvdPlayer;
  constructor(dvdPlayer: DvdPlayer) {
    this.dvdPlayer = dvdPlayer;
  }
  on: Function = () => {};
  off: Function = () => {};
  tvMode: Function = () => {};
  wideScreenMode: Function = () => {};
}

class PopcornPopper {
  on: Function = () => {};
  off: Function = () => {};
  pop: Function = () => {};
}

class TheaterLights {
  on: Function = () => {};
  off: Function = () => {};
  dim: Function = () => {};
}

class Amplifier {
  turner: Turner;
  dvdPlayer: DvdPlayer;
  cdPlayer: CdPlayer;
  constructor(turner: Turner, dvdPlayer: DvdPlayer, cdPlayer: CdPlayer) {
    this.turner = turner;
    this.dvdPlayer = dvdPlayer;
    this.cdPlayer = cdPlayer;
  }
  on: Function = () => {};
  off: Function = () => {};
  setCd: Function = () => {};
  setDvd: Function = () => {};
  setSteroSound: Function = () => {};
  setSurroundSound: Function = () => {};
  setTuner: Function = () => {};
  setVolume: Function = () => {};
}

class HomeTheaterFacade {
  private amp: Amplifier;
  private turner: Turner;
  private dvd: DvdPlayer;
  private cd: CdPlayer;
  private projector: Projector;
  private lights: TheaterLights;
  private screen: FacadePreventNameCollapse.Screen;
  private popper: PopcornPopper;
  constructor(
    amp: Amplifier,
    turner: Turner,
    dvd: DvdPlayer,
    cd: CdPlayer,
    projector: Projector,
    lights: TheaterLights,
    screen: FacadePreventNameCollapse.Screen,
    popper: PopcornPopper
  ) {
    this.amp = amp;
    this.turner = turner;
    this.dvd = dvd;
    this.cd = cd;
    this.projector = projector;
    this.lights = lights;
    this.screen = screen;
    this.popper = popper;
  }
  watchMovie: (movie: string) => void = (movie: string) => {
    console.log("Get ready to watch movie!!!");
    this.popper.on();
    this.popper.pop();
    this.lights.dim(10);
    this.screen.down();
    this.projector.on();
    this.projector.wideScreenMode();
    this.amp.on();
    this.amp.setDvd(this.dvd);
    this.amp.setSurroundSound();
    this.amp.setVolume(5);
    this.dvd.on();
    this.dvd.play(movie);
  };
  endMovie: () => void = () => {
    console.log("Shutting movie theater down");
    this.popper.off();
    this.lights.on();
    this.screen.up();
    this.projector.off();
    this.amp.off();
    this.dvd.stop();
    this.dvd.eject();
    this.dvd.off();
  };
}
const tuner = new Turner();
const dvd = new DvdPlayer();
const cd = new CdPlayer();
const amp = new Amplifier(tuner, dvd, cd);
const projector = new Projector(dvd);
const light = new TheaterLights();
const theaterScreen = new FacadePreventNameCollapse.Screen();
const popper = new PopcornPopper();
const homeTheaterFacade = new HomeTheaterFacade(
  amp,
  tuner,
  dvd,
  cd,
  projector,
  light,
  theaterScreen,
  popper
);

homeTheaterFacade.watchMovie("Game of thrones");

homeTheaterFacade.endMovie();
