app.controller("MainController", ['$scope', '$http', 'httpFactory', function($scope, $http, httpFactory){

  $scope.title = "Welcome to BEA Testing";
 $scope.test = "testing controller";


 // getData = function (id) {
 //    httpFactory.getData(id)
 //    .then(function(response){
 //      console.log(response.data);
 //    });
 //  };


  //use this to build out query


  getInfo = function (url) {

    //use to build out query
    var parameters = {
       state: $scope.state_select,
       description: 'test'
        };
    httpFactory.get(url, {params: parameters})
    .then(function(response){
        console.log(response, "api info response");
    });
  };

 $scope.getData = function () {
  console.log($scope.state_select, "state")
  getInfo('/api/v1/data/census');
 };

 // $scope.educationInput = function () {
 //    console.log("education input firing")
 //    $scope.checkboxModel = {
 //      value1: ""
 //    };
 //    console.log($scope.checkboxModel, "checkbox model");
 // };

 $scope.formData = {};



  // getInfo('/api/v1/data/bea');


  // getBEADATA = function () {
  //    var info = $http.get("http://www.bea.gov/api/data/?&UserID="+BEA_id+"&method=GetData&datasetname=RegionalData&KeyCode=PCDPI_SI&GeoFIPS=STATE&Year=2012&ResultFormat=JSON&%27")
  //   .then(function(data) {
  //     console.log(data, "BEA DATA");
  //   });
  // };

  // getBEADATA();

}]);


