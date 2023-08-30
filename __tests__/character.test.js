import {Character} from './../src/js/character.js';

describe('Character', () => {

  let character;
  beforeEach(() => {
    character = new Character();
  });

  test('should create an character object', () => {
    expect(character).toEqual({strength: undefined, health: undefined, inventory: undefined})
  });

  test('should compute damage caused', () => {
    character.hit(3,10);
    expect(character.hit()).toEqual(30)
  });

});


