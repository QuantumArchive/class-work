
navController.$inject = ['$scope'];

export default function navController($scope) {
    
    $scope.shouldComma = function(length) {
        return length > 2;
    };

    $scope.shouldConjoin = function(index, length) {
        return length > 1 && index === length - 2;
    };

    $scope.getDirCount = function() {
        return Object.keys($scope.getLocation().directions).length;
    };

    $scope.getItemsCount = function() {
        return $scope.getLocation().items.length;
    };

    $scope.getInventoryCount = function() {
        return $scope.player.inventory.length;
    };
}
