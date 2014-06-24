angular.module('states',[
  'state.one',
])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state("/home",{
    url: "/home",
    template: "home"
  });

  $urlRouterProvider.otherwise('/home');
});
