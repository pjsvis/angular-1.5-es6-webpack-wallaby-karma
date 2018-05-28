import 'bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash';
import angular from 'angular';
import route from 'angular-route';
import animate from 'angular-animate';
import { app } from './components/app/app.component';
import AppService from './shared/AppService';
import { routingConfig } from './configuration/routing';
import * as uiBootstrap from 'angular-ui-bootstrap';

// force import of globals and injected angular modules for app
(function() {
    let r = route;
    let a = animate;
    let u = uiBootstrap;
    let l = _;
})();

angular
    .module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])
    .config(routingConfig)
    .factory('AppService', AppService)
    .component('appComponent', app);
