import template from './pirate-app.html';

export default {
    template,
    controller,
    controllerAs: 'app'    
};

function controller() {
    this.pirates = [
        { name: 'luffy', rank: 'captain' },
        { name: 'zoro', rank: 'swordsman' }
    ];

    this.remove = pirate => {
        const index = this.pirates.indexOf(pirate);
        if (index > -1) this.pirates.splice(index, 1);
    };

    this.add = pirate => this.pirates.push(pirate);
}