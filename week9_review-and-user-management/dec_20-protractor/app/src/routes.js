routes.$inject = ['$stateProvider', '$urlRouterProvider']; 

export default function routes($stateProvider, $urlRouterProvider) {
    
    $stateProvider.state({
        name: 'welcome',
        url: '/',
        views: {
            links: {
                template: '<a ui-sref="admin">admin</a>'
            },
            main: {
                template: '<h2>welcome!</h2>' 
            }
        }
    });

    $stateProvider.state({
        name: 'gallery',
        url: '/albums',
        resolve: {
            albums: ['albumService', albums => albums.get()]
        },
        component: 'albums' ,
        views: {
            links: {
                component: 'albumsLinks'
            },
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
        url: '/albums/{id}',
        abstract: true,
        default: '.thumbnail',
        resolve: {
            album: ['albumService', '$transition$', (albums, t) => {
                return albums.get(t.params().id);
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

    $urlRouterProvider.otherwise('/albums');
}