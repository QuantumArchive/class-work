import template from './pirates.html';
import styles from './pirates.scss';

export default {
    template,
    controller   
};

controller.$inject = ['pirateService'];

function controller(pirates) {

    this.styles = styles;

    this.loading = true;

    // call the get to load all pirates
    pirates.get().then(pirates => {
        this.loading = false;
        this.pirates = pirates;
    });

    // remove this pirate
    this.remove = pirate => {
        this.loading = true;
        pirates.remove(pirate._id)
            .then(() => {
                this.loading = false;
                // after server has updated data, modify in-memory array
                const index = this.pirates.indexOf(pirate);
                if (index > -1) this.pirates.splice(index, 1);
            });
    };

    // add a pirate
    this.add = pirate => {
        this.loading = true;
        pirates.add(pirate)
            .then(saved => {
                this.loading = false;
                // push to in-memory array
                this.pirates.push(saved);
            });
    };
}