gameController.$inject = ['$scope', 'playerService'];

export default function gameController($scope, playerService) {
    $scope.player = playerService.getNew();
    
    $scope.getLocation = function() {
        return $scope.player.location;
    };
}
