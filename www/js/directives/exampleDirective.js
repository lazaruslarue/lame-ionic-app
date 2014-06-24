directives.directive('exampleDirective', function() {
  return {
    restrict: "EA",
    scope: {
      data: "="
    },
    templateUrl: "../../templates/directives/ExampleDirective.html",
    controller: function () {
      
    }
  };
});
