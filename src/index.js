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
(function () {
    var r = route;
    var a = animate;
    var u = uiBootstrap;
    var l = _;
})();
angular
    .module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])
    .config(routingConfig)
    .factory('AppService', AppService)
    .component('appComponent', app);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzovZGV2L25nLXdhbGxhYnkvaW5kZXgudHMvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLHNDQUFzQyxDQUFDO0FBQzlDLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUN2QixPQUFPLE9BQU8sTUFBTSxTQUFTLENBQUM7QUFDOUIsT0FBTyxLQUFLLE1BQU0sZUFBZSxDQUFDO0FBQ2xDLE9BQU8sT0FBTyxNQUFNLGlCQUFpQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRCxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxLQUFLLFdBQVcsTUFBTSxzQkFBc0IsQ0FBQztBQUVwRCwrREFBK0Q7QUFDL0QsQ0FBQztJQUNHLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUNkLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQztJQUNoQixJQUFJLENBQUMsR0FBRyxXQUFXLENBQUM7SUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUVMLE9BQU87S0FDRixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxjQUFjLENBQUMsQ0FBQztLQUN2RCxNQUFNLENBQUMsYUFBYSxDQUFDO0tBQ3JCLE9BQU8sQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDO0tBQ2pDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUMifQ==