const crews = require('./crews');

const strawhats = [{
    name: 'Monkey D. Luffy',
    rank: 'captain',
    weapon: [
        { name: 'fist', damage: 110 },
        { name: 'foot', damage: 80 },
        { name: 'head', damage: 100 }
    ]
}, {
    name: 'Roronoa Zoro',
    rank: 'swordsman',
    weapon: [
        { name: 'sword one', damage: 80 },
        { name: 'sword two', damage: 80 },
        { name: 'swoard three', damage: 80 }
    ]
}, {
    name: 'Usopp',
    rank: 'sniper',
    weapon: [
        { name: 'slingshot', damage: 50 }
    ]
}, {
    name: 'Nami',
    rank: 'navigator',
    weapon: [
        { name: 'clima-tact', damage: 70 }
    ]
}, {
    name: 'Vinsmoke Sanji',
    rank: 'cook',
    weapon: [
        { name: 'foot', damage: 80 }
    ]
}, {
    name: 'Tony Tony Chopper',
    rank: 'doctor',
    weapon: [
        { name: 'rumble ball', damage: 90 }
    ]
}];

strawhats.forEach(p => p.crewId = crews.strawhats);

const foxy = [{
    name: 'Foxy',
    rank: 'captain',
    weapon: [
        { name: 'slow beam', damage: 80 }
    ]
}, {
    name: 'Porche',
    rank: 'crew',
    weapon: [
        { name: 'Cutie Baton', damage: 70 }
    ]
}, {
    name: 'Hamburg',
    rank: 'crew',
    weapon: [
        { name: 'Gorilla Throw', damage: 50 },
        { name: 'Hamburger Hammer', damage: 60 }
    ]
}, {
    name: 'Itomimizu',
    rank: 'official',
    weapon: [
        { name: 'speech', damage: 20 }
    ]
}];

foxy.forEach(p => p.crewId = crews.foxy);

const donquixote = [{
    name: 'Donquixote Doflamingo',
    rank: 'captain',
    weapon: [
        { name: 'string', damage: 100 }
    ]
}, {
    name: 'Vergo',
    rank: 'crew',
    weapon: [
        { name: 'Cutie Baton', damage: 70 }
    ]
}, {
    name: 'Trebol',
    rank: 'executive',
    weapon: [
        { name: 'Gorilla Throw', damage: 50 },
        { name: 'Hamburger Hammer', damage: 60 }
    ]
}, {
    name: 'Diamante',
    rank: 'executive',
    weapon: [
        { name: 'speech', damage: 20 }
    ]
}, {
    name: 'Pica',
    rank: 'executive',
    weapon: [
        { name: 'speech', damage: 20 }
    ]
}];

donquixote.forEach(p => p.crewId = crews.donquixote);

