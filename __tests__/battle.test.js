import { Battle } from './../src/js/battle.js';
import { Wizard } from './../src/js/wizard.js';
import { Warrior } from './../src/js/warrior.js';
import { experiments } from 'webpack';

describe ('Battle', () => {

  test('should create a battle object with a wizard and warrior character object', () => {
    const newWizard = new Wizard();
    const newWarrior = new Warrior();
    const newBattle = new Battle(newWizard, newWarrior);
    
    expect(newBattle).toEqual({players: [newWizard, newWarrior]});
  });

  test('should cause player1 to deal damage and player2 to take damage', () => {
    const newWizard = new Wizard();
    const newWarrior = new Warrior();
    const newBattle = new Battle(newWizard, newWarrior);
    newBattle.attack();

    expect(newBattle.players[1].health).toEqual(95);
  });
})