import template from './thumbnail-view.html';
import styles from './thumbnail-view.scss'; 



export default {
    template,
    bindings: {
        pirates: '=',
        remove: '<'
    },
    controller
};

function controller() {
    this.styles = styles;

    this.delete = () => {
        this.remove(this.pirate);
    };
}