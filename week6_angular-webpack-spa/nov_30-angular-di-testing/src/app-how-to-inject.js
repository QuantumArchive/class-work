const angular = require('angular');
require('./css/main.css');

// this "creates" a module
const app = angular.module('myApp', [
    /* other modules we write and "roll-up" to the app */
    /* other npm angular modules*/
]);

// this retrieves a module we already created
// const app = angular.module('myApp');

app.controller('main', function($scope /*, $http*/) {
    $scope.message = 'hello world!';
    // $http.get('https://data.ct.gov/resource/y6p2-px98.json?category=Fruit&item=Peaches')
    //     .then(result => {
    //         // $scope.peaches = result.data;
    //         // console.log(result.data);
    //     });
});

// Implicit
app.controller('implicit', function($scope /* Injection determined from Parameters */) {
    $scope.message = 'i am the implicit controller';
});

// Explicit
app.controller('explicit', ['$scope', /* <- these are the dependecies to inject here -> */ function($sc) {
    $sc.message = 'i am the explicit controller';
}]);


// Explicit $inject

// Define $inject property on function

// because fn is defined function, we can set before
fn.$inject = ['$scope'];
function fn($canBeNamedWhatevs) {
    $canBeNamedWhatevs.message = 'i am the explicit $inject controller';
}
app.controller('inject', fn);

// named anonymous function not in scope 
app.controller('inject2', function anonFn($canBeNamedWhatevs) {
    $canBeNamedWhatevs.message = 'i am the explicit $inject controller';
});
// so set afterwards
anonFn.$inject = ['$scope'];

// With CJS module.exports, this funtion is named function expression
module.exports = function fn2($canBeNamedWhatevs) {

};

// so we have to do $inject after
fn2.$inject = ['$scope'];

// But ES6 module export is language feature
// that "deorates" the named function definition.
// so we can set before...
fn3.$inject = ['$scope'];
export default function fn3($canBeNamedWhatevs) {

}