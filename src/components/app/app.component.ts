import './App.scss';
import * as AppService from '../../shared/AppService';
import * as angular from 'angular/index';

AppController.$inject = ['AppService'];
function AppController(AppService: AppService.IAppService) {
    // @ts-ignore
    let $ctrl = this;
    $ctrl.message = AppService.getMessage();
}

export const app: ng.IComponentOptions = {
    bindings: {},
    controller: AppController,
    template: `
    <div class="h1">Hello there big boy. {{$ctrl.message}} = 2</div>
`
};

// // Use as default for switch over string types
// function assertNever(obj: never): never{
// throw new Error('Unexpected object');
// }
