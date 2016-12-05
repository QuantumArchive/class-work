/* globals angular, chai */

const { assert } = chai;

describe( 'game controller', () => {

    // what modules are we needing to test?
    // name of module(s) we added to angular, that angular
    // should look in to find "things" like controllers,
    // services, etc.
    beforeEach(angular.mock.module('controllers', 'services'));
    
    let $controller = null;
    //, $scope;

    const fn = angular.mock.inject(function(/*$rootScope, */_$controller_, playerService) {
        // $rootScope allows us to create new scopes
        // $scope = $rootScope.$new();
        // $controller is the generic controller factory
        $controller = _$controller_;
        console.log(playerService);
    });

    beforeEach(fn);

    it('has a default player, at the start of the map', () => {
        const location = {};
        const player = { location };

        const $scope = {};

        $controller('game', { 
            $scope,
            playerService: {
                getNew() { return player; }
            }
        });

        assert.equal($scope.player, player);
        assert.equal($scope.getLocation(), location);
    });

});