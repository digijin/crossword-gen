
import Gen from './lib/gen';
import words from './data/five.json'


console.log("starting");

// let gen = new Gen(words, 5, 5);

let testwords = [
  " mit ",
  "zebra",
  "idiom",
  "gizmo",
  " cap ",
  " zig ",
  "medic",
  "ibiza",
  "tromp",
  " amo "
]

let gen = new Gen(testwords)

let across = [" mit ", "zebra", "idiom"];
let down = [" zig ", "medic"]

let matching = gen.findNextMatchingDown([], []);
console.log(matching);
