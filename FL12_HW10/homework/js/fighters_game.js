class Fighter {
    constructor(fighterProperties) {
        this.name = fighterProperties['name'];
        this.damage = fighterProperties['damage'];
        this.strength = fighterProperties['strength'];
        this.agility = fighterProperties['agility'];
        this.maxHealth = fighterProperties['hp'];

        this.currentHealth = this.maxHealth;
        this.win = 0;
        this.loss = 0;
    }
    getName() { 
        return this.name; 
    }
    getDamage() { 
        return this.damage; 
    }
    getStrength() { 
        return this.strength; 
    }
    getAgility() { 
        return this.agility; 
    }
    getHealth() { 
        return this.currentHealth; 
    }

    attack(defender) {
        const maxLuck = 100;
        let luck = maxLuck - (defender.getStrength() + defender.getAgility());
        let randomLuck = Math.floor(Math.random() * maxLuck);

        if (randomLuck < luck) { 
            defender.dealDamage(this.damage);
            console.log(`${this.name} makes ${this.damage} damage to ${defender.getName()}`);
        } else { 
            console.log(`${this.name}'s attack missed`);
        }
    }
    logCombatHistory() {
        console.log(`Name: ${this.name}, Wins: ${this.win}, Losses: ${this.loss}`);
    }
    heal(healthPoints) {
        this.currentHealth = this.currentHealth + healthPoints > this.maxHealth ? 
        this.maxHealth : this.currentHealth += healthPoints;
    }
    dealDamage(healthPoints) {
        this.currentHealth = this.currentHealth - healthPoints < 0 ? 
        this.currentHealth = 0 : this.currentHealth -= healthPoints
    }
    addWin() {
        this.win += 1;
    }
    addLoss() {
        this.loss += 1;
    }
}
function canFight(fighter) {
    if (fighter.currentHealth === 0) {
        console.log(` ${fighter.getName()} is dead and can't fight`);
        return false;
    } 
    return true;
}
function updateBattleCount(winner, loser) {
    console.log(`${winner.getName()} has won!`);
    winner.addWin();
    loser.addLoss();
}

function battle (fighter1, fighter2) {
    if (canFight(fighter1) && canFight(fighter2)) {
        while(fighter1.currentHealth > 0 && fighter2.currentHealth > 0) {
            fighter1.attack(fighter2);
            fighter2.attack(fighter1);
        }
        if (fighter1.currentHealth === 0) {
            updateBattleCount(fighter2, fighter1);
        } else {
            updateBattleCount(fighter1, fighter2);
        }
    }
}

const fighter1 = new Fighter({name: 'Maximus', damage: 20, hp: 100, strength: 20, agility: 15}); 
const fighter2 = new Fighter({name: 'Commodus', damage: 25, hp: 90, strength: 25, agility: 20}); 

battle(fighter1, fighter2);
