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

    this.reset = () => {
        this.newAlbum = {};
    };

    this.reset();

    this.setAlbum = () => {
        if(!this.selected) return;
        $state.go('gallery.album', { id: this.selected });
    };

    this.add = () => {
        albumService.add(this.newAlbum)
            .then(album => {
                this.albums.push(album);
                this.reset();
                this.selected = album._id;
                this.setAlbum();
            });
    };
}