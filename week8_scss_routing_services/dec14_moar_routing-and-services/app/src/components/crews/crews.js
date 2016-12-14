import template from './crews.html';
import styles from './crews.scss';

export default {
    template,
    controller
};

controller.$inject = ['crewService', '$state'];
function controller(crews, $state) {
    this.view = 'detail';
    this.styles = styles;

    this.loading = true;

    this.updateView = () => {
        $state.go($state.current.name, { view: this.view });
    };

    crews.get().then(crews => {
        this.loading = false;
        this.crews = crews;
    });

//    this.add = crew => {
//         this.loading = true;
//         crews.add(crew)
//             .then(saved => {
//                 this.loading = false;
//                 // push to in-memory array
//                 this.crews.push(saved);
//             });
//     };
}