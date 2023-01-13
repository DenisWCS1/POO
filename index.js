// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require("./src/Fighter.js");

const Fighters = [
  new Fighter("🧔", "Hercules", 20, 6),
  new Fighter("🦁", "Nemean Lion", 11, 13),
  new Fighter("🐗", "Erymanthian Boar", 14, 10),
  new Fighter("🐍", "Lernaean Hydra", 12, 12),
  new Fighter("🦌", "Ceryneian Hind", 13, 11),
  new Fighter("🐘", "Augean Stables", 15, 9),
  new Fighter("🐎", "Stymphalian Birds", 12, 12),
  new Fighter("🦕", "Cretan Bull", 16, 8),
  new Fighter("🐲", "Mares of Diomedes", 14, 10),
  new Fighter("🕊", "Belt of Hippolyta", 12, 12),
  new Fighter("🐚", "Cattle of Geryon", 13, 11),
  new Fighter("🍎", "Golden Apples of the Hesperides", 15, 9),
  new Fighter("🔥", "Zeus", 25, 6),
  new Fighter("🌊", "Poseidon", 22, 8),
  new Fighter("🌬", "Apollo", 20, 10),
  new Fighter("🌺", "Aphrodite", 18, 12),
  new Fighter("🗡", "Ares", 20, 10),
  new Fighter("🛡", "Athena", 22, 8),
  new Fighter("🏹", "Artemis", 18, 12),
  new Fighter("🍇", "Dionysus", 16, 14),
  new Fighter("🔨", "Hephaestus", 20, 10),
  new Fighter("🏋‍♂️", "Hermes", 18, 12),
];
for (let i = 0; i < Fighters.length; i++) {
  for (let y = 1; y < Fighters.length; y++) {
    while (Fighters[i].life > 0 && Fighters[y].life > 0);

    console.log(`attaquant ${Fighters[i].name}`);
    console.log(`défenseur ${Fighters[y].name} `);
  }
}

/*
  console.log(
    `Round ${y} ${Fighters[i].fightername} combat ${Fighters[z].fightername}`
  );
  console.log(` LIFE ${Fighters[z].life}  ${Fighters[i].life}`);
  console.log(`Points de vie restants ${Fighters[i].fight(Fighters[z])}`);
  console.log(`${Fighters[z].fightername} combat ${Fighters[i].fightername}`);
  console.log(`Points de vie restants ${Fighters[z].fight(Fighters[i])}`);
  */
