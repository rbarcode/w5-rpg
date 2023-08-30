export class Character {
  constructor(strength, health, inventory) {
    this.strength = strength;
    this.health = health;
    this.inventory = inventory;
  }

  dealDamage() {
    let damage; 
    damage = this.strength * this.inventory;
    return damage;

  }

  takeDamage() {
    // we want that good fail!!
  }
}




