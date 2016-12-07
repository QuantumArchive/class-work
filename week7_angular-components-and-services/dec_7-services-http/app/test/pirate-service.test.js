
describe( 'pirate service', () => {
    const { assert } = chai;


    // we need to mock the services module, that's were
    // pirate service lives
    beforeEach( 
        angular.mock.module('services', { apiUrl: '/api' })
    );
    
    let $httpBackend = null, pirateService = null;
    
    beforeEach(angular.mock.inject((_pirateService_, _$httpBackend_ ) => {
        $httpBackend = _$httpBackend_;
        pirateService = _pirateService_;
    }));

    afterEach(() => {
        // make sure the $httpBackend expectations that we set up
        // have actually happened
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it( 'get pirates', done => {
        // mock return data from pirate get
        const pirates = [1, 2, 3];
        
        // set the expectation
        $httpBackend
            // what http VERB and url are we expecting?
            .expectGET('/api/pirates')
            // mock a reponse that will get set on the .data 
            // property of $http response object
            .respond(pirates);

        // make the call against SUT
        pirateService.get()
            .then(allPirates => {
                // $httpBackend serializes the object we pass to
                // .respond, so to "test" we need to do 
                // deepEqual as they are no longer the same object reference
                assert.deepEqual(allPirates, pirates);
                done();
            })
            .catch(done);

        // we need to tell $httpBackend everything is setup and okay
        // to "flush" (send) reponses back
        $httpBackend.flush();
    });


    it('add pirate', done => {

        const pirate = {
            name: 'luffy',
            rank: 'captain'
        };
        
        $httpBackend
            .expectPOST('/api/pirates', pirate)
            .respond(pirate);

        pirateService.add(pirate)
            .then(savedPirate => {
                assert.deepEqual(savedPirate, pirate);
                done();
            })
            .catch(done);

        $httpBackend.flush();
    });
});