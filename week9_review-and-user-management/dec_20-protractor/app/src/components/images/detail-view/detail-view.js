import template from './detail-view.html';
import styles from './detail-view.scss';

export default {
    template,
    bindings: {
        images: '<'
    },
    require: {
        parent: '^album'
    },
    controller() {
        this.styles = styles;
    }
};