import angular from 'angular';
import './scss/main.scss';
// picks up index.js from components and services folder
import components from './components';
import services from './services';

const app = angular.module('myApp', [
    components,
    services
]);

app.value('apiUrl', 'http://localhost:3000/api');
