
var app = angular.module('myApp', []);

let init = 10;
app.controller('counterCtrl', function($scope) {
    $scope.count = init++;
    $scope.reset = function() {
        $scope.count = 0;
    }
    $scope.subtract = function() {
        $scope.count--;
    }
    $scope.add = function() {
        $scope.count++;
    }
    $scope.display = function(count) {
        return `The count is ${count}`;
    }
});

app.controller('fizzBuzz', function($scope) {
    $scope.countTo = 16

    $scope.fizzBuzz = function(countTo) {
        const results = [];
        for(var i = 1, result = ''; i <= countTo; i++, result = '') {
            // TODO: fizzBuzz
            if(i % 3 === 0) result += 'fizz';
            if(i % 5 === 0) result += 'buzz';
            results.push(result || i.toString());
        }
        return results;
    }
});