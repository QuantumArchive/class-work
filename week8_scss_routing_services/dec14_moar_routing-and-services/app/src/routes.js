routes.$inject = ['$stateProvider', '$urlRouterProvider']; 

export default function routes($stateProvider, $urlRouterProvider) {
    
    $stateProvider.state({
        name: 'crews', // name of this defined app "state"
        url: '/crews', // url associated with the state,
        component: 'crews' 
    });

    $stateProvider.state({
        name: 'crews.detail',
        // the url, plus implied params id and view
        url: '/:id?view',
        params: {
            // "view" same key as above
            view: { dynamic: true }
        },
        resolve: {
            id: ['$transition$', t => t.params().id],
            // "view" is name of component binding, 
            // t.params().view is dependent on key above
            view: ['$transition$', t => t.params().view || 'detail']
            // crew: ['$transition$', 'crewService', (t, crews) => {
            //     return crews.get(t.params().id);
            // }]
        },
        component: 'crewDetail'
    });

    $stateProvider.state({
        name: 'pirates',
        url: '/pirates',
        component: 'pirates'
    });

    $urlRouterProvider.otherwise('/crews');
}