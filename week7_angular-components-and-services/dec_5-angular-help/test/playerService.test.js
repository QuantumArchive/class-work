/* globals angular, chai */

describe( 'player service', () => {

    beforeEach(angular.mock.module('services'));
    
    let playerService = null;

    const fn = angular.mock.inject(function(_playerService_) {
        playerService = _playerService_;
    });

    beforeEach(fn);

    it('gets new Player', () => {
        const player = playerService.getNew();
        assert.isOk(player);
    });

});