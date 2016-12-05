import angular from 'angular';
import game from './game';
import player from './player';
import room from './room';
import actions from './actions';

const controllers = angular.module('controllers', []);

controllers.controller('game', game);
controllers.controller('player', player);
controllers.controller('room', room);
controllers.controller('actions', actions);

export default controllers.name;

