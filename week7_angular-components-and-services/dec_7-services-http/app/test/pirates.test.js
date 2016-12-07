
describe( 'pirates component', () => {
    const { assert } = chai;

    // we need to mock the components module, that's were
    // pirates component lives
    beforeEach( 
        angular.mock.module('components')
    );
    
    let $component = null;
    beforeEach(angular.mock.inject($componentController => {
        $component = $componentController;
    }));

    describe('create component', () => {

        const pirates = [
            { name: 'luffy', rank: 'captain' },
            { name: 'nami', rank: 'navigator' }
        ];

        const pirate = { name: 'zoro', rank: 'swordsman' };
        
        const pirateService = {
            get() {
                return Promise.resolve(pirates);
            },
            add(pirate) {
                return Promise.resolve(pirate);
            }
        };

        const component = $component('pirates', { pirateService });

        it( 'loads pirates', done => {

            assert.isOk(component.loading);

            setTimeout(() => {
                assert.equal(component.pirates, pirates);
                assert.isNotOk(component.loading);
                done();
            });
        });


        it( 'add a pirates', done => {

            component.add(pirate);

            setTimeout(() => {
                assert.equal(pirates.length, 3);
                assert.equal(pirates[2], pirate);
                done();
            });
        });

    });

});

function add(x, y) { return x + y }

const a = 3;
const b = 4;

add(a, b);