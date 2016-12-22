import angular from 'angular';
import './scss/main.scss';
// picks up index.js from components and services folder
import components from './components';
import services from './services';

// bring in 3rd party modules
import animate from 'angular-animate';
import uiRouter from 'angular-ui-router';
import defaultRoute from 'angular-ui-router-default';
import resource from 'angular-resource';

import routes from './routes';

const app = angular.module('myApp', [
    components,
    services,
    animate,
    uiRouter,
    defaultRoute,
    resource
]);

app.filter('titleCase', function() {
    return function titleCaseFilter(input) {
        if(!input) return '';
        return input[0].toUpperCase() + input.slice(1);
    };
});

app.config(routes);

app.value('apiUrl', 'http://localhost:3000/api');
