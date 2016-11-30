const foo = require('foo');

const bar = foo.getBar(process.env.BAR);

module.exports = function doSomething(qux){
    bar.validate(qux);

}