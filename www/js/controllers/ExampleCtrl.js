controllers.controller('ExampleCtrl',function($scope, ExampleServices) {

  var exampleResult = ExampleServices.exampleService()
  console.log(exampleResult)  

  // for ng-repeat
  $scope.exampleList = ['one', 'two', 'three'];
});
