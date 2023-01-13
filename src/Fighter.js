/* Fighter class definition */
const MAX_LIFE = 100;
class Fighter {
  constructor(icone, name, strength, parade) {
    this.icone = icone;
    this.name = name;
    this.strength = strength;
    this.parade = parade;
    this.life = MAX_LIFE;
  }
  fight(defender) {
    const attPoints = this.getRandomInt(this.strength);
    const impact = Math.max(attPoints - defender.parade, 0);
    defender.life = defender.life > 0 ? defender.life - impact : 0;
    return defender.life;
  }
  getRandomInt(force) {
    return 1 + Math.floor(Math.random() * force);
  }
  get fightername() {
    return `${this.icone} ${this.name}`;
  }
}

module.exports = Fighter;
