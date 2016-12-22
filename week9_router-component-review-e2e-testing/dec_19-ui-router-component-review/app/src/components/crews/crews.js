import template from './crews.html';
import styles from './crews.scss';

export default {
    template,
    bindings: {
        crew: '<'
    },
    controller
};

controller.$inject = ['crewService'];
function controller(crews) {
    this.view = 'detail';
    this.styles = styles;

    crews.get().then(crews => {
        this.crews = crews;
    });

    this.add = crew => {
        crews.add(crew)
            .then(saved => {
                this.crews.push(saved);
            });
    };
}