// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require("./src/Fighter.js");

const Fighters = [
  new Fighter("🧔", "Heracles", 20, 6),
  new Fighter("🦁", "Nemean Lion", 11, 13),
];
console.log(Fighters[0].fight(Fighters[1]));
