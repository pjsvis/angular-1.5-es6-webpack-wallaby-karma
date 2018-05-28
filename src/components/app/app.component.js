import './App.scss';
AppController.$inject = ['AppService'];
function AppController(AppService) {
    // @ts-ignore
    var $ctrl = this;
    $ctrl.message = AppService.getMessage();
}
export var app = {
    bindings: {},
    controller: AppController,
    template: "\n    <div class=\"h1\">Hello there big boy. {{$ctrl.message}} = 2</div>\n"
};
// // Use as default for switch over string types
// function assertNever(obj: never): never{
// throw new Error('Unexpected object');
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJDOi9kZXYvbmctd2FsbGFieS9pbmRleC50cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxZQUFZLENBQUM7QUFJcEIsYUFBYSxDQUFDLE9BQU8sR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3ZDLHVCQUF1QixVQUFrQztJQUNyRCxhQUFhO0lBQ2IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLEtBQUssQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQzVDLENBQUM7QUFFRCxNQUFNLENBQUMsSUFBTSxHQUFHLEdBQXlCO0lBQ3JDLFFBQVEsRUFBRSxFQUFFO0lBQ1osVUFBVSxFQUFFLGFBQWE7SUFDekIsUUFBUSxFQUFFLDRFQUViO0NBQ0EsQ0FBQztBQUVGLGlEQUFpRDtBQUNqRCwyQ0FBMkM7QUFDM0Msd0NBQXdDO0FBQ3hDLElBQUkifQ==