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
    const impact = attPoints - defender.dexterity;
    defender.life = Math.max(defender.life - impact, 0);
  }
  getRandomInt(max) {
    return 1 + Math.floor(Math.random() * max);
  }
  Resultat() {
    return this.life > 0;
  }
}

module.exports = Fighter;
