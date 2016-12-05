import angular from 'angular';
import './css/main.css';
import controllers from './controllers';
import services from './services';

// this "creates" a module for app.
// [ d1, d2 ] add other modules to this one
angular.module('myApp', [
    controllers,
    services
]);