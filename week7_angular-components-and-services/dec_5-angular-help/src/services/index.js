import angular from 'angular';
import playerService from './playerService';

const services = angular.module('services', []);

services.factory('playerService', playerService);

export default services.name;

