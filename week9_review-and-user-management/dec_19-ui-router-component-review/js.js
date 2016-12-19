
function doPirate(pirate) {
    pirate = { name: 'reassigned' };
    return pirate;
}

let myPirate = { name: 'original' };
doPirate(myPirate);
console.log(myPirate);

const obj = { name: 'foo', age: 12, color: 'blue' };

obj.name = 'bar';
obj.qux = true;
delete obj.age;
delete obj.color;

let obj2 = obj;
obj2 = 5;


