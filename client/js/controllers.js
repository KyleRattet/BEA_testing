app.controller("MainController", ['$scope', '$http', 'httpFactory', function($scope, $http, httpFactory){

  $scope.title = "Welcome to BEA Testing";
 $scope.test = "testing controller";


 // getData = function (id) {
 //    httpFactory.getData(id)
 //    .then(function(response){
 //      console.log(response.data);
 //    });
 //  };




  getInfo = function (url) {
    httpFactory.get(url)
    .then(function(response){
        console.log(response, "api info response");
    });
  };

  getInfo('/api/v1/data/bea');
  getInfo('/api/v1/data/census');


}]);


