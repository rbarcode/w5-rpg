import { Wizard } from "./../src/js/wizard.js";


describe('Wizard', () => {

    test('should create a wizard object with values', () => {
      let wizard = new Wizard();
      expect(wizard).toEqual({strength: 1, health: 100, inventory: 5});
    });
  });