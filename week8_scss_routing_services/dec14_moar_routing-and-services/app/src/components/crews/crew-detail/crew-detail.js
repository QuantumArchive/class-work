import template from './crew-detail.html';
import styles from './crew-detail.scss';

export default {
    template,
    bindings: { 
        id: '<',
        view: '<' 
    },
    controller
};

controller.$inject = ['crewService'];

function controller(crews) {

    this.styles = styles;

    this.$onInit = () => {
        crews.get(this.id).then(crew => {
            this.crew = crew;
        });
    };

    this.uiOnParamsChanged = params => {
        console.log(params);
        this.view = params.view;
    };

}