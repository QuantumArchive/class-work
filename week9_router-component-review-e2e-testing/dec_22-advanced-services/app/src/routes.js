routes.$inject = ['$stateProvider', '$urlRouterProvider']; 

export default function routes($stateProvider, $urlRouterProvider) {
    
    $stateProvider.state({
        name: 'welcome',
        url: '/',
        views: {
            main: {
                component: 'welcome' 
            }
        }
    });

    $stateProvider.state({
        name: 'gallery',
        url: '/albums',
        resolve: {
            albums: ['albumService', Album => Album.query()]
        },
        component: 'albums' ,
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
            album: ['albumService', '$transition$', (Album, t) => {
                return Album.get({ id: t.params().id });
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