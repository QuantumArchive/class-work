routes.$inject = ['$stateProvider', '$urlRouterProvider']; 

export default function routes($stateProvider, $urlRouterProvider) {
    
    $stateProvider.state({
        name: 'app',
        url: '/',
        data: { public: true },
        resolve: {
            loading: () => false
        },
        views: {
            main: {
                component: 'welcome' 
            }
        }
    });

    $stateProvider.state({
        name: 'welcome',
        url: '/',
        data: { public: true },
        views: {
            main: {
                component: 'welcome' 
            }
        }
    });

    $stateProvider.state({
        name: 'gallery',
        url: '/albums',
        params: {
            selected: { dynamic: true }
        },
        resolve: {
            albums: ['albumService', Album => Album.query().$promise],
            selected: ['$transition$', t => t.params().id]
        },
        component: 'albums',
        views: {
            header: {
                component: 'albumsHeader'
            },
            main: {
                component: 'albums' 
            }
        }
    });

    $stateProvider.state({
        name: 'gallery.album',
        url: '/{id}',
        abstract: true,
        default: '.thumbnail',
        resolve: {
            id: ['$transition$', t => t.params().id],
            album: ['albumService', 'id', (Album, id) => {
                return Album.get({ id }).$promise;
            }],
            // make images available to viewer components
            images: ['album', a => a.images]
        },
        component: 'album' 
    });

    $stateProvider.state({
        name: 'gallery.album.detail',
        url: '/detail',
        component: 'detailView'
    });

    $stateProvider.state({
        name: 'gallery.album.thumbnail',
        url: '/thumbnail',
        component: 'thumbnailView'
    });

    $urlRouterProvider.otherwise('/');
}