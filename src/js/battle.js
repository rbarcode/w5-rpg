
export class Battle {
    constructor(attacker, defender) {
        this.players = [attacker, defender];
    }

    attack() {
        this.players[1].takeDamage(this.players[0].dealDamage());
    }

  }








