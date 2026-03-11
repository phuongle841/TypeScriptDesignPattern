var midiParser = require("midi-parser-js");
var fs = require("fs");
fs.readFile("./Midi_Files/test.mid", "base64", function (err, data) {
    var midiArray = midiParser.parse(data);
    console.log(midiArray);
});
