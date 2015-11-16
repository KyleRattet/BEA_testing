app.controller("MainController", ['$scope', '$http', 'httpFactory', function($scope, $http, httpFactory){

  $scope.title = "Welcome to BEA Testing";
 $scope.test = "testing controller";

    /* National Chart options */
         $scope.nationalOptions = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
                donut:"true",
                donutRatio:".25",
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

        /* State Chart options */
         $scope.stateOptions = {
            chart: {
                type: 'pieChart',
                height: 450,
                donut: true,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
                labelType:"percent",

                pie: {
                    startAngle: function(d) { return d.startAngle/2 -Math.PI/2 },
                    endAngle: function(d) { return d.endAngle/2 -Math.PI/2 }
                },
                duration: 500,
                legend: {
                    margin: {
                        top: 5,
                        right: 140,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };

        $scope.countyOptions = {
            chart: {
                type: 'multiBarChart',
                height: 450,
                x: function(d){return d[0];},
                y: function(d){return d[1];},
                stacked: true
                // barColor: function(d, i){
                //   var colors = d3.scale.category20().range();
                //   var rnd = Math.floor(Math.random() * colors.length)
                //   return colors[rnd];
                // }
            }
        };

        $scope.countyChartData = [
           {
                    "key": "County",
                    "values": [[0, 10], [1,15]]
                }, {
                    "key": "State",
                    "values": [[0, 20], [1,30]]
                }, {
                    "key": "National",
                    "values": [[0,50], [1, 56]]
                }
        ]


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
        $scope.nationalData = [
            {
                key: "0-5",
                y: $scope.usData[1]
            },
            {
                key: "5-9",
                y: $scope.usData[2]
            },
            {
                key: "10-14",
                y: $scope.usData[3]
            },
            {
                key: "15-19",
                y: $scope.usData[4]
            },
            {
                key: "20-24",
                y: $scope.usData[5]
            },
            {
                key: "25-34",
                y: $scope.usData[6]
            },
            {
                key: "35-44",
                y: $scope.usData[7]
            },
            {
                key: "45-54",
                y: $scope.usData[8]
            },
            {
                key: "55-59",
                y: $scope.usData[9]
            },
            {
                key: "60-64",
                y: $scope.usData[10]
            },
            {
                key: "65-74",
                y: $scope.usData[11]
            },
            {
                key: "75-84",
                y: $scope.usData[12]
            },
            {
                key: "85+",
                y: $scope.usData[13]
            }
        ];
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
        $scope.statePieData = [
            {
                key: "0-5",
                y: $scope.stateData[1]
            },
            {
                key: "5-9",
                y: $scope.stateData[2]
            },
            {
                key: "10-14",
                y: $scope.stateData[3]
            },
            {
                key: "15-19",
                y: $scope.stateData[4]
            },
            {
                key: "20-24",
                y: $scope.stateData[5]
            },
            {
                key: "25-34",
                y: $scope.stateData[6]
            },
            {
                key: "35-44",
                y: $scope.stateData[7]
            },
            {
                key: "45-54",
                y: $scope.stateData[8]
            },
            {
                key: "55-59",
                y: $scope.stateData[9]
            },
            {
                key: "60-64",
                y: $scope.stateData[10]
            },
            {
                key: "65-74",
                y: $scope.stateData[11]
            },
            {
                key: "75-84",
                y: $scope.stateData[12]
            },
            {
                key: "85+",
                y: $scope.stateData[13]
            }
        ];
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

 $scope.getNationalData = function () {

  getStateInfo('/api/v1/data/census/state');
  getNatInfo('/api/v1/data/census/national');
  // getCountyInfo('/api/v1/data/census/county');
 };

 $scope.getStateData = function () {

  // getStateInfo('/api/v1/data/census/state');
  // getNatInfo('/api/v1/data/census/national');
  // getCountyInfo('/api/v1/data/census/county');
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


