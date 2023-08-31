export class Character {
  constructor() {
    this.strength = 0;
    this.health = 0;
    this.inventory = 0;
  }

  dealDamage() {
    let damage;
    damage = this.strength * this.inventory;
    return damage;

  }

  takeDamage(damage) {
    this.health = this.health - damage;
  }
}
