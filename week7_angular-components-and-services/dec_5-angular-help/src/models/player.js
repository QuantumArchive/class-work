
export default class Player {
    constructor(room, name = 'player 1') {
        this.location = room;
        this.name = name;
        this.history = [];
        this.inventory = [
            'half-eaten sandwich',
            'pokemon toy'
        ];
        this.addHistory('start', room.description);
    }

    move(direction) {
        const directions = this.location.directions;
        
        if(!directions.hasOwnProperty(direction)) {
            throw new Error(`bad direction ${direction}`);
        }
        this.location = directions[direction];
        this.addHistory(direction, this.location.description);
    }

    pickup(item) {
        const { location, inventory } = this;
        const { items } = location;
        const index = items.findIndex(each => each === item);
        if ( index < 0 ) {
            throw new Error(`item ${item} not in room ${location.name}`);
        } 
        location.items.splice(index, 1);
        inventory.push(item);
    }    
    
    drop(item) {
        const { location, inventory } = this;
        const index = inventory.findIndex(each => each === item);
        if ( index < 0 ) {
            throw new Error(`item ${item} not in inventory`);
        } 
        inventory.splice(index, 1);
        location.items.push(item);
    }

    addHistory(move, result) {
        this.history.push({
            move,
            result
        });
    }
}