/* globals angular, chai */

const { assert } = chai;

describe( 'component', () => {

    angular.mock.module.sharedInjector();
    const mockModule = angular.mock.module('components');
    before(mockModule);
    
    let newPirate = null;
    let add = pirate => add.pirate = pirate;

    const injectComponent = angular.mock.inject($componentController => {
        newPirate = $componentController('addNew', null, { add });
    });
    before(injectComponent);

    function testEmpty() {
        assert.equal(newPirate.name, '');
        assert.equal(newPirate.rank, '');
    }

    it('defaults to empty strings on prop', testEmpty);

    it('calls the add function with property data', () => {
        const name = 'luffy';
        const rank = 'captain';
        newPirate.name = name;
        newPirate.rank = rank;
        newPirate.addNew();
        assert.deepEqual(add.pirate, { name, rank });
    });

    it('resets the properties after add', testEmpty);

});