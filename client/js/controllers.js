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
      population: $scope.population,
      hsEducation: $scope.hsEducation,
      bsEducation: $scope.bsEducation,
      ageBreakdown: $scope.age,
      state: $scope.state_select,
        };
    // var state = $scope.state_select;
    httpFactory.get(url, {params: parameters})
    .then(function(response){
        console.log(response, "api info response");
        $scope.stateData = response.data[1]
        console.log($scope.stateData, "state data response")
    });
  };

 $scope.getData = function () {
  console.log($scope.state_select, "state");
  getInfo('/api/v1/data/census');
 };

 // $scope.sendForm = function () {
 //    console.log("education input firing")
 //    $scope.formData = {};
 //    console.log($scope.formData, "checkbox model");
 // };

 // $scope.formData = {};

  // $scope.checkboxModel = {
  //      value1 : true,
  //      value2 : 'YES'
  //    };


  // getInfo('/api/v1/data/bea');


  // getBEADATA = function () {
  //    var info = $http.get("http://www.bea.gov/api/data/?&UserID="+BEA_id+"&method=GetData&datasetname=RegionalData&KeyCode=PCDPI_SI&GeoFIPS=STATE&Year=2012&ResultFormat=JSON&%27")
  //   .then(function(data) {
  //     console.log(data, "BEA DATA");
  //   });
  // };

  // getBEADATA();

}]);


