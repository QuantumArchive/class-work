const angular = require('angular');
const reverse = require('./reverse');
require('./main.css');
require('./whatevs.css');

const app = angular.module('myApp', []);

app.controller('main', function($scope) {
    $scope.name = 'world';
    $scope.reverse = reverse;
});