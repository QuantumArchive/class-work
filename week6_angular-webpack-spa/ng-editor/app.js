const app = angular.module('ngEditor', []);

app.controller('main', function($scope) {
    $scope.styles = ['fancy', 'plain', 'modern'];
    $scope.style = 'plain';
    $scope.message = 'hello world';
    $scope.fontSize = 24;
});