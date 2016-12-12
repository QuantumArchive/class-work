import template from './new-pirate.html';
import styles from  './new-pirate.scss';

export default {
    template,
    bindings: {
        add: '<'
    },
    controller
};

function controller() {
    this.styles = styles;

    this.reset = () => {
        this.name = '';
        this.rank = '';
    };

    this.reset();

    this.addNew = () => {
        this.add({
            name: this.name,
            rank: this.rank
        });
        // clear out controls so
        // next pirate can be added
        this.reset();
    };
}