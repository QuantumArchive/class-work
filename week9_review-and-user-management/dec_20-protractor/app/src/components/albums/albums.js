import template from './albums.html';
import styles from './albums.scss';

export default {
    template,
    bindings: {
        albums: '<'
    },
    controller
};

controller.$inject = ['albumService', '$state'];

function controller(albumService, $state) {
    this.styles = styles;

    this.$onInit = () => {
        const albums = this.albums;
        if(albums.length) {
            this.selected = albums[0]._id;
            this.setAlbum();
        }
    };

    this.setAlbum = () => {
        if(!this.selected) return;
        $state.go('gallery.album', { id: this.selected });
    };

    this.add = album => {
        albumService.add(album)
            .then(album => {
                this.albums.push(album);
                this.selected = album._id;
            });
    };
}