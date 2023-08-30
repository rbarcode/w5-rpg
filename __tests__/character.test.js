import {Character} from './../src/js/character.js';

describe('Character', () => {

  test('should create an character object', () => {
    const character = new Character();
    expect(character).toEqual({strength: undefined, health: undefined, inventory: undefined})
  });

});

