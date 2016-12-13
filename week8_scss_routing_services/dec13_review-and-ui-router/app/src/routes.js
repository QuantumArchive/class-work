routes.$inject = ['$stateProvider', '$urlRouterProvider']; 

export default function routes($stateProvider, $urlRouterProvider) {
    
    $stateProvider.state({
        name: 'welcome', // name of this defined app "state"
        url: '/', // url associated with the state,
        component: 'welcome' 
    });

    $stateProvider.state({
        name: 'welcome.new',
        url: 'new',
        template: '<p>Hello New Person</p>'
    });

    $stateProvider.state({
        name: 'welcome.returning',
        url: 'returning',
        template: '<p>Welcome Back</p>'
    });

    $stateProvider.state({
        name: 'pirates', // name of this defined app "state"
        url: '/pirates', // url associated with the state,
        component: 'pirates' 
    });

    $stateProvider.state({
        name: 'about',
        url: '/about',
        component: 'about'
    });

    $stateProvider.state({
        name: 'about.plain',
        url: '/plain',
        views: {
            header: {
                component: 'aboutHeader'
            },
            main: {
                component: 'aboutMain'
            }
        }
    });


    $stateProvider.state({
        name: 'about.special',
        url: '/special',
        views: {
            header: {
                component: 'aboutHeaderSpecial'
            },
            main: {
                component: 'aboutMainSpecial'
            }
        }
    });

    $urlRouterProvider.otherwise('/');
}