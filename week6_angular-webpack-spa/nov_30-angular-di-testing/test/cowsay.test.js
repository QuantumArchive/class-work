/* globals angular, chai */

const { assert } = chai;

describe( 'counter controller', () => {

    // what modules are we needing to test?
    beforeEach(angular.mock.module('controllers'));
    
    let $controller, $scope;
    beforeEach(angular.mock.inject(function($rootScope, _$controller_) {
        // $rootScope allows us to create new scopes
        $scope = $rootScope.$new();
        // $controller is the generic controller factory
        $controller = _$controller_;


    }));

    it('default message is hello world', () => {
        // make a controller, we don't actually need
        // a ref to controller...
        /*const cowsay = */ $controller('cowsay', { $scope });

        // ...as it's the modification of
        // $scope that we need to test
        assert.equal($scope.message, 'hello world!');
    });

    it('displays correct cow', () => {
        $controller('cowsay', { $scope });
        // snapshot, or pinning test. Probably not going to be
        // used much in your angular projects. Here the javascript
        // logic directly produces a "view", so it makes sense...
        assert.equal($scope.say($scope.message), ` ______________
< hello world! >
 --------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`
        );
    });
});