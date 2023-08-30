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

  takeDamage(damage) {
    this.health = this.health - damage;
  }
}






// if (has armor) 
//   damage - armor; // reduce damage
