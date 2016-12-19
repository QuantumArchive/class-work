routes.$inject = ['$stateProvider', '$urlRouterProvider']; 

export default function routes($stateProvider, $urlRouterProvider) {
    
    $stateProvider.state({
        name: 'crews',
        url: '/crews',
        component: 'crews' 
    });

    $stateProvider.state({
        name: 'pirates',
        url: '/pirates',
        abstract: true,
        default: '.detail',
        resolve: {
            pirates: ['pirateService', pirates => {
                return pirates.get();
            }]
        },
        component: 'pirates' 
    });

    $stateProvider.state({
        name: 'pirates.detail',
        url: '/detail',
        component: 'detailView'
    });


    $stateProvider.state({
        name: 'pirates.thumbnail',
        url: '/thumbnail',
        component: 'thumbnailView'
    });

    $stateProvider.state({
        name: 'crew',
        abstract: true,
        default: '.detail',
        url: '/crews/:id',
        resolve: {
            crew: ['crewService', '$transition$', (crews, t) => {
                return crews.get(t.params().id);
            }],        
            pirates: ['crew', crew => crew.pirates]
        },
        component: 'crew'
    });

    $stateProvider.state({
        name: 'crew.detail',
        url: '/detail',
        component: 'detailView'
    });

    $stateProvider.state({
        name: 'crew.thumbnail',
        url: '/thumbnail',
        component: 'thumbnailView'
    });

    $urlRouterProvider.otherwise('/crews');
}