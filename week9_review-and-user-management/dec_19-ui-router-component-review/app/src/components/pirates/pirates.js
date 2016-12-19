import template from './pirates.html';
import styles from './pirates.scss';

export default {
    template,
    bindings: {
        pirates: '<',
        crewId: '<'
    },
    controller   
};

controller.$inject = ['pirateService', '$state'];

function controller(pirates, $state) {

    this.styles = styles;

    this.setDisplay = name => {
        const parts = $state.current.name.split('.');
        parts[parts.length-1] = name;
        const newState  = parts.join('.');
        $state.go(newState, { foo: name });
    };

    this.add = pirate => {
        pirate.crew = this.crewId;
        pirates.add(pirate)
            .then(saved => {
                this.pirates.push(saved);
            })
            .catch(err => console.error(err));
    };
}