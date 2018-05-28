import route from 'angular-route';

routingConfig.$inject = ['$routeProvider','$locationProvider'];
export function routingConfig(
    $routeProvider: ng.route.IRouteProvider,
    $locationProvider: ng.ILocationProvider
): void {
    $routeProvider
        .when('/', {
            template: '<app-component></app-component>'
        })
        .when('/app', {
            template: '<app-component></app-component>'
        })
        .otherwise('/');
     $locationProvider.html5Mode(true);

}