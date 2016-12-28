import WelcomePage from './welcome-page';

describe('My Todo App', function() {

    const welcome = new WelcomePage();

    it('should have a title', function() {
        welcome.get();
        expect(welcome.title).toEqual('Cute Image Albums');
    });
    
    describe('navigation', function() {

        beforeEach(function() {
            welcome.get();
        });

        it('default to welcome page, and navigate to gallery', function() {
            
            expect(welcome.url).toBe('/');
            expect(welcome.stateComponent).toEqual('welcome');  

            welcome.goToGallery();

            expect(welcome.url).toBe('/albums');
            expect(welcome.stateComponent).toEqual('albums');  

        });
    });
});