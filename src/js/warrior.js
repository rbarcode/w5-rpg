import { Character } from './character';

export class Warrior extends Character {

  constructor(strength, health, inventory) {
    super(strength, health, inventory)
    this.strength = 3;
    this.health = 100;
    let sword = 10
    this.inventory = sword;

  }





}

