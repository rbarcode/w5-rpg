import { Character } from './character';

export class Wizard extends Character {

  constructor(strength, health, inventory) {
    super(strength, health, inventory)
    this.strength = strength;
    this.health = health;
    this.inventory = inventory;
  }

}