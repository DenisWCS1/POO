/* Fighter class definition */
const MAX_LIFE = 100;
class Fighter {
  constructor(icone, name, strength, dexterity, life) {
    this.icone = icone;
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }
  fight(defender) {
    const attPoints = this.getRandomInt(this.strength);
    const impact = Math.max(attPoints - defender.dexterity, 0);
    defender.life = defender.life > 0 ? defender.life - impact : 0;
    return defender.life;
  }
  getRandomInt(max) {
    return 1 + Math.floor(Math.random() * max);
  }
}

module.exports = Fighter;
