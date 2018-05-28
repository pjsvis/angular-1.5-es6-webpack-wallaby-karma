"use strict";
var app;
(function (app) {
    var Test;
    (function (Test_1) {
        'use strict';
        var Test = {
            bindings: {
                something: '${@}'
            },
            controller: 'TestController',
            templateUrl: '${path/to/template.html}',
            transclude: true
        };
        angular
            .module('app.Test')
            .component('Test', Test);
    })(Test = app.Test || (app.Test = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiQzovZGV2L25nLXdhbGxhYnkvaW5kZXgudHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3Rlc3QvdGVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQVUsR0FBRyxDQWtCWjtBQWxCRCxXQUFVLEdBQUc7SUFBQyxJQUFBLElBQUksQ0FrQmpCO0lBbEJhLFdBQUEsTUFBSTtRQUNkLFlBQVksQ0FBQztRQUtiLElBQU0sSUFBSSxHQUF5QjtZQUMvQixRQUFRLEVBQUU7Z0JBQ04sU0FBUyxFQUFFLE1BQU07YUFDcEI7WUFDRCxVQUFVLEVBQUUsZ0JBQWdCO1lBQzVCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsVUFBVSxFQUFFLElBQUk7U0FDbkIsQ0FBQztRQUVGLE9BQU87YUFDRixNQUFNLENBQUMsVUFBVSxDQUFDO2FBQ2xCLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQyxFQWxCYSxJQUFJLEdBQUosUUFBSSxLQUFKLFFBQUksUUFrQmpCO0FBQUQsQ0FBQyxFQWxCUyxHQUFHLEtBQUgsR0FBRyxRQWtCWiJ9