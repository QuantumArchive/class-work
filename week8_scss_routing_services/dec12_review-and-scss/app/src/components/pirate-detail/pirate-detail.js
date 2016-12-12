import template from './pirate-detail.html';
import styles from './pirate-detail.scss'; 

export default {
    template,
    bindings: {
        pirate: '=',
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