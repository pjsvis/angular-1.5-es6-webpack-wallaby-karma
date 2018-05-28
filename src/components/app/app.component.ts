import './App.scss';
import * as AppService from '../../shared/AppService';

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
    <div class="h1 message">Hello there big boy. {{$ctrl.message}}</div>
`
};


