app.controller("MainController", ['$scope', '$http', 'httpFactory', function($scope, $http, httpFactory){

  $scope.title = "Welcome to BEA Testing";
 $scope.test = "testing controller";


 // getData = function (id) {
 //    httpFactory.getData(id)
 //    .then(function(response){
 //      console.log(response.data);
 //    });
 //  };
//  $scope.xAxisTickFormatFunction = function(){
//   return function(date){
//     return d3.time.format('%x')(new Date(date));
//   };
// };

//             $scope.exampleData = [{
//                 "key": "Quantity",
//                 "bar": true,
//                 "values": [
//                   [10, 20],
//                   [20, 40],
//                   [30, 60],
//                   [40, 80],
//                   [50, 100]
//                 ]
//               }];

  // $scope.exampleData = [
  //      { key: "One", y: 5 },
  //        { key: "Two", y: 2 },
  //        { key: "Three", y: 9 },
  //        { key: "Four", y: 7 },
  //       { key: "Five", y: 4 },
  //        { key: "Six", y: 3 },
  //       { key: "Seven", y: 9 }
  //    ];
    /* Chart options */
        $scope.options = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };

        /* Chart data */
        $scope.data = [
            {
                key: "One",
                y: 5
            },
            {
                key: "Two",
                y: 2
            },
            {
                key: "Three",
                y: 9
            },
            {
                key: "Four",
                y: 7
            },
            {
                key: "Five",
                y: 4
            },
            {
                key: "Six",
                y: 3
            },
            {
                key: "Seven",
                y: .5
            }
        ];


  //use this to build out query
  getNatInfo = function (url) {

    //use to build out query
    var parameters = {
      ageBreakdown: $scope.age,
        };
    // var state = $scope.state_select;
    httpFactory.get(url, {params: parameters})
    .then(function(response){
        // console.log(response, "api info response");
        $scope.usData = response.data[1]
        console.log($scope.usData, "us data response")
    });
  };


  getStateInfo = function (url) {

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
        // console.log(response, "api info response");
        $scope.stateData = response.data[1]
        console.log($scope.stateData, "state data response")
    });
  };

  getCountyInfo = function (url) {

    //use to build out query
    var parameters = {
      ageBreakdown: $scope.age,
      state: $scope.state_select,
      county: $scope.county_select
        };
    // var state = $scope.state_select;
    httpFactory.get(url, {params: parameters})
    .then(function(response){
        console.log(response, "api info response");
        $scope.countyData = response.data[1]
        console.log($scope.countyData, "county data response");
    });
  };

 $scope.getData = function () {

  getStateInfo('/api/v1/data/census/state');
  getNatInfo('/api/v1/data/census/national');
  getCountyInfo('/api/v1/data/census/county');
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


