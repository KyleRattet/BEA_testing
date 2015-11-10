app.controller("MainController", ['$scope', '$http', 'httpFactory', function($scope, $http, httpFactory){

  $scope.title = "Welcome to BEA Testing";
 $scope.test = "testing controller";


 // getData = function (id) {
 //    httpFactory.getData(id)
 //    .then(function(response){
 //      console.log(response.data);
 //    });
 //  };

 var parameters = {
   state: 01,
   description: 'test'
};


  getInfo = function (url) {
    httpFactory.get(url, {params: parameters})
    .then(function(response){
        console.log(response, "api info response");
    });
  };

  // getInfo('/api/v1/data/bea');
  getInfo('/api/v1/data/census');

  // getBEADATA = function () {
  //    var info = $http.get("http://www.bea.gov/api/data/?&UserID="+BEA_id+"&method=GetData&datasetname=RegionalData&KeyCode=PCDPI_SI&GeoFIPS=STATE&Year=2012&ResultFormat=JSON&%27")
  //   .then(function(data) {
  //     console.log(data, "BEA DATA");
  //   });
  // };

  // getBEADATA();

}]);


