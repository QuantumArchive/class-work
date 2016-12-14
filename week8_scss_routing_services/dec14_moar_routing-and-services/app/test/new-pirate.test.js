/* globals angular, chai */

const { assert } = chai;

describe( 'component', () => {

    // angular mock WILL NOT WORK with before,
    // unless we tell it we are using sharedInjector
    angular.mock.inject.sharedInjector();
    before(angular.mock.module('components'));
    
    // this is the component "factory",
    // usable via:
    // const component = $component(name, locals, bindings); 
    let newPirate = null;

    let addedPirate = null;
    
    const inject = angular.mock.inject(function($componentController) {
        newPirate = $componentController(
            'newPirate', // name of component
            null,        // locals -> Dependencies to Inject (key: value)
            { add(p) { addedPirate = p; } }      // bindings (key:value)
        );
    });

    before(inject);

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
        assert.deepEqual(addedPirate, { name, rank });
    });

    it('resets the properties after add', testEmpty);

});