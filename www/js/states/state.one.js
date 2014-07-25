angular.module('state.one',[]).config( function ($stateProvider) {
  $stateProvider.state("one", {
    url: "/one",
    controller: "ExampleCtrl",
    templateUrl: "templates/state.one.html",
  })
});
