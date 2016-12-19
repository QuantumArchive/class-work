import template from './add-new.html';
import styles from  './add-new.scss';

export default {
    template,
    bindings: {
        _fields: '@fields',
        add: '<'
    },
    controller
};

function controller() {
    this.styles = styles;

    this.$onInit = () => {
        this.fields = this._fields.replace(/ /g, '').split(',');
    };

    this.reset = () => {
        this.item = {};
    };

    this.reset();

    this.submit = () => {
        this.add(this.item);
        // clear out controls so
        // next pirate can be added
        this.reset();
    };
}