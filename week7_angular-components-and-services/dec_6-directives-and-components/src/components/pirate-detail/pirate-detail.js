import template from './pirate-detail.html';

export default {
    template,
    bindings: {
        pirate: '=',
        remove: '<'
    },
    controller
};

function controller() {
    this.delete = () => {
        this.remove(this.pirate);
    };
}