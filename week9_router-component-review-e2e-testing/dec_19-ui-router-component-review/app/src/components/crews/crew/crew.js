import template from './crew.html';
import styles from './crew.scss';

export default {
    template,
    bindings: { 
        crew: '<' 
    },
    controller
};


function controller() {

    this.styles = styles;
    

    this.uiOnParamsChanged = params => {
        this.view = params.view;
    };

}