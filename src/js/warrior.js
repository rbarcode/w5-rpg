import { Character } from './character';

export class Warrior extends Character {

  constructor() {
    super()
    this.strength = 3;
    this.health = 100;
    this.sword = 10
    this.inventory = this.sword;

  }

}

