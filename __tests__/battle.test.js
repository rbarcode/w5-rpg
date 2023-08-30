import { Battle } from './../src/js/battle.js';
import { Wizard } from './../src/js/wizard.js';
import { Warrior } from './../src/js/warrior.js';

describe ('Battle', () => {

  test('should create a battle object with a wizard and warrior character object', () => {
    const newWizard = new Wizard();
    const newWarrior = new Warrior();
    const newBattle = new Battle(newWizard, newWarrior);
    
    expect(newBattle).toEqual({players: [newWizard, newWarrior]})
  })
})