import angular from 'angular';
import './css/main.css';
// picks up index.js from components and services folder
import components from './components';
import services from './services';


const app = angular.module('myApp', [
    components,
    services
]);

const dev = 'http://localhost:3000/api';
// const prod = '/api/';

// .value gives the service "object" directly to angular
app.value('apiUrl', dev);

// above is same as:
app.factory('apiUrl', function() {
    return dev;
});

