let midiParser = require("midi-parser-js");
let fs = require("fs");

fs.readFile("./Midi_Files/test.mid", "base64", function (err: any, data: any) {
  var midiArray = midiParser.parse(data);
  console.log(midiArray);
});

interface BeatModelInterface {
  initialize(): void;
  on(): void;
  off(): void;
  setBPM(BPM: number): void;
  getBPM(): number;
  registerObserver(o: BeatObserver): void;
  registerObserver(o: BPMObserver): void;
  removeObserver(o: BeatObserver): void;
  removeObserver(o: BPMObserver): void;
}

class BeatModel implements BeatModelInterface {
  //   sequencer: Sequencer
  beatObservers = [];
  bpmObservers = [];
  bpm: number = 90;
  initialize(): void {
    // setupMidi();
    // buildTrackAndStart();
  }
  on(): void {
    // sequencer.start();
  }
  off(): void {
    this.setBPM(0);
    // sequencer.stop();
  }
  setBPM(BPM: number): void {
    this.bpm = BPM;
    // sequencer.setTempoInBPM(this.getBPM());
    // notifyBPMObservers();
  }
  getBPM(): number {
    return this.bpm;
  }
  registerObserver(o: BeatObserver): void;
  registerObserver(o: BPMObserver): void;
  registerObserver(o: unknown): void {
    throw new Error("Method not implemented.");
  }
  removeObserver(o: BeatObserver): void;
  removeObserver(o: BPMObserver): void;
  removeObserver(o: unknown): void {
    throw new Error("Method not implemented.");
  }
}

interface BeatObserver {}
interface BPMObserver {}
