import angular from 'angular';
import './scss/main.scss';
// picks up index.js from components and services folder
import components from './components';
import services from './services';
import uiRouter from 'angular-ui-router';
import defaultRoute from 'angular-ui-router-default';
import routes from './routes';

const app = angular.module('myApp', [
    components,
    services,
    uiRouter,
    defaultRoute
]);

app.config(routes);

app.value('apiUrl', 'http://localhost:3000/api');
