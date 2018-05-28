routingConfig.$inject = ['$routeProvider', '$locationProvider'];
export function routingConfig($routeProvider, $locationProvider) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5qcyIsInNvdXJjZVJvb3QiOiJDOi9kZXYvbmctd2FsbGFieS9pbmRleC50cy8iLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24vcm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxhQUFhLENBQUMsT0FBTyxHQUFHLENBQUMsZ0JBQWdCLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUMvRCxNQUFNLHdCQUNGLGNBQXVDLEVBQ3ZDLGlCQUF1QztJQUV2QyxjQUFjO1NBQ1QsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNQLFFBQVEsRUFBRSxpQ0FBaUM7S0FDOUMsQ0FBQztTQUNELElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDVixRQUFRLEVBQUUsaUNBQWlDO0tBQzlDLENBQUM7U0FDRCxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkIsaUJBQWlCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXZDLENBQUMifQ==