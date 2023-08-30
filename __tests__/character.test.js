import {Character} from './../src/js/character.js';

describe('Character', () => {

  let character;
  beforeEach(() => {
    character = new Character();
  });

  test('should create an character object', () => {
    let character = new Character();
    expect(character).toEqual({strength: 0, health: 0, inventory: 0});
  });

  test('should compute damage caused', () => {
    character.strength = 10;
    character.inventory = 10;
    let damage = character.dealDamage();
    expect(damage).toEqual(100);
  });

  test('should compute damage taken', () => {
    character.takeDamage(5);
    expect(character.health).toEqual(-5);
  });

});


