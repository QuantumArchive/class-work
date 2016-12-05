import Room from './models/room';

const map = {
    A: {
        description: 'There are two paths leaving this room, the lights are dim',
        directions: {
            south: 'C',
            east: 'B',
        }
    },
    B: {
        description: 'You can\'t see anything', 
        directions: {
            west: 'A',
            south: 'D',
        }
    },
    C: {
        description: 'There is a path to the north, where you see some light', 
        directions: {
            north: 'A',
            east: 'D',
        }
    },
    D: {
        description: 'You hear crazy sounds to the south',
        items: ['lamp', 'watch'],
        directions: {
            north: 'B',
            west: 'C',
            south: 'X'
        }
    },
    X: {
        description: 'You are stuck in quick sand',
        directions: {
            south: 'X',
            north: 'X',
            east: 'X',
            west: 'A',
        }
    }
};

const keys = Object.keys(map);

keys.forEach(key => {
    const data = map[key];
    map[key] = new Room(key, data);
});

keys.forEach(key => {
    const room = map[key];
    const { directions } = room;
    Object.keys(directions).forEach(key => {
        const roomKey = directions[key];
        directions[key] = map[roomKey];
    });
});

map.start = map.A;

export default map;
