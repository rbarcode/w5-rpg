import { Character } from './character';

export class Wizard extends Character {

  constructor() {
    super()
    this.strength = 1;
    this.health = 100;
    this.wand = 5;
    this.inventory = this.wand;
  }

}