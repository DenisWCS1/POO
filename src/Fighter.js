/* Fighter class definition */
const MAX_LIFE = 100;
class Fighter {

  constructor(icone, name, strength, dexterity) {
    this.icone = icone;
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }
  fight(adversaire) {
    const attPoints = this.getRandomInt(this.strength);
    const damage = Math.max(attPoints - adversaire.dexterity, 0);
    adversaire.life = adversaire.life > 0 ? adversaire.life - damage : 0;
    return this.name, " ", adversaire.life, " ", adversaire.name;
  }
  getRandomInt(max) {
    return 1 + Math.floor(Math.random() * max);
  }
  get fightername() {
    return `${this.icone} ${this.name}`
  }
  get fighterlife() {
    return this.life
  }
}

module.exports = Fighter;
