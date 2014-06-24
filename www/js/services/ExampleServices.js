services.service('ExampleServices', function($http, $q) {

  return {
    exampleService: function(){
      return "example"
    }
  };
});
