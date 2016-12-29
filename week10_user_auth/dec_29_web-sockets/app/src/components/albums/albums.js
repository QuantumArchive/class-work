import template from './albums.html';
import styles from './albums.scss';

export default {
    template,
    bindings: {
        albums: '<',
        selected: '='
    },
    controller
};

controller.$inject = ['albumService', '$state'];

function controller(Album, $state) {
    
    this.styles = styles;
    this.reset = () => this.newAlbum = {};
    this.$onInit = () => {
        if(!this.selected && this.albums.length) {
            this.selected = this.albums[0]._id;
        }
        this.setAlbum();
    };
    this.reset();

    this.uiOnParamsChanged = params => {
        if(params.id) this.selected = params.id;
    };

    this.setAlbum = () => {
        if(!this.selected) return;
        $state.go('gallery.album', { id: this.selected });
    };

    this.add = () => {
        new Album(this.newAlbum).$save()
            .then(album => {
                this.albums.push(album);
                this.reset();
                this.selected = album._id;
                this.setAlbum();
            });
    };
}