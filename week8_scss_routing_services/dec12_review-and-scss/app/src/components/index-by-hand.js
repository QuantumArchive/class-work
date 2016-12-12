import angular from 'angular';
import app from './app/app';
import newPirate from './new-pirate/new-pirate';
import pirates from './pirates/pirates';
import pirateDetail from './pirate-detail/pirate-detail';

// create the module to put the resources in,
const module = angular.module('components', []);

module.component('app', app);
module.component('newPirate', newPirate);
module.component('pirates', pirates);
module.component('pirateDetail', pirateDetail);

// export the name of the module for 
// adding as a dependecy at the app level
export default module.name;