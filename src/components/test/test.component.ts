namespace app.Test {
    'use strict';

    export interface ITestBindings {
        something: string;
    }
    const Test: ng.IComponentOptions = {
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
}

