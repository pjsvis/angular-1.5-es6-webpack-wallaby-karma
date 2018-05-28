import 'bootstrap/dist/css/bootstrap.min.css';
import angular from 'angular';
import route from 'angular-route';
import animate from 'angular-animate';
import { app } from './components/app/app.component';
import AppService from './shared/AppService';
import { routingConfig } from './configuration/routing';
import * as uiBootstrap from 'angular-ui-bootstrap';
// force import of injected angular modules for app
(function () {
    var r = route;
    var a = animate;
    var u = uiBootstrap;
})();
angular
    .module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])
    .config(routingConfig)
    .factory('AppService', AppService)
    .component('appComponent', app);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzovZGV2L25nLXdhbGxhYnkvaW5kZXgudHMvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLHNDQUFzQyxDQUFDO0FBRTlDLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUM5QixPQUFPLEtBQUssTUFBTSxlQUFlLENBQUM7QUFDbEMsT0FBTyxPQUFPLE1BQU0saUJBQWlCLENBQUM7QUFFdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JELE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEtBQUssV0FBVyxNQUFNLHNCQUFzQixDQUFDO0FBRXBELG1EQUFtRDtBQUNuRCxDQUFDO0lBQ0csSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ2QsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQ2hCLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQztBQUN4QixDQUFDLENBQUMsRUFBRSxDQUFDO0FBRUwsT0FBTztLQUNGLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0tBQ3ZELE1BQU0sQ0FBQyxhQUFhLENBQUM7S0FDckIsT0FBTyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUM7S0FDakMsU0FBUyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQyJ9