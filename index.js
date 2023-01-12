// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require("./src/Fighter.js");

const Fighters = [
  new Fighter("🧔", "Heracles", 20, 6),
  new Fighter("🦁", "Nemean Lion", 11, 13),
  new Fighter("🐍", "Medusa", 12, 18),
  new Fighter("🐂", "Minotaure", 25, 8),
];
/*
for (let i = 0; i < Fighters[1].fighterlife; i++) {
  console.log("Round ", Fighters[0].fight(Fighters[1]), Fighters[0].fighterlife)

}*/
//    console.log("Round " , Fighters[0].fight(Fighters[1]))
let round = 1;
let scores = []
let victories = {}
for (let i = 0; i < Fighters.length; i++) {
  for (let j = i + 1; j < Fighters.length; j++) {
    let hasFight = false;
    let attacker = Fighters[i];
    let defender = Fighters[j];
    while (attacker.life > 0 && defender.life > 0) {
      const defenderLife = defender.life;
      attacker.fight(defender);
      if (defenderLife - defender.life > 0) {
        hasFight = true;
        console.log(`Round ${round}:`);
        console.log(`${attacker.fightername} attaque ${defender.fightername} et lui inflige ${defenderLife - defender.life} points de dommages.`);
        console.log(`Points de vie restants : ${defender.fightername} ${defender.fighterlife}`);
        scores.push({
          round: round,
          attacker: attacker.fightername,
          defender: defender.fightername,
          damage: defenderLife - defender.life,
          defenderLife: defender.fighterlife
        });
      }
      if (defender.life === 0) {
        console.log(`Round ${round}:`);
        console.log(`${defender.fightername} est mort !`);
        victories[attacker.fightername] = victories[attacker.fightername] ? victories[attacker.fightername] + 1 : 1;
        break;
      }
      round++;
    }
    if (!hasFight) round--;
  }
}

console.log(scores);
console.log(`Victoires: ${victories}`);

// calculate the win rate
let totalFight = 0;
for (let key in victories) {
  totalFight += victories[key]
}
for (let key in victories) {
  console.log(`${key} win rate : ${(victories[key] / totalFight * 100).toFixed(2)}%`);
}
