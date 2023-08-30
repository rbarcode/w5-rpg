import {Character} from './../src/js/character.js';

describe('Character', () => {

  let character;
  beforeEach(() => {
    character = new Character(3, 100, 10);
  });

  test('should create an character object', () => {
    let character = new Character();
    expect(character).toEqual({strength: undefined, health: undefined, inventory: undefined});
  });

  test('should compute damage caused', () => {
    let damage = character.dealDamage();
    expect(damage).toEqual(30);
  });

  test('should compute damage taken', () => {
    let health = character.takeDamage();
    expect(health).toEqual(70);
  });

});


