import { Warrior } from "./../src/js/warrior.js"; 

describe('Warrior', () => {


    test('should create a warrior object with values', () => {
      let warrior = new Warrior();
      expect(warrior).toEqual({strength: 3, health: 100, inventory: 10, sword: 10});
    });
  

  });