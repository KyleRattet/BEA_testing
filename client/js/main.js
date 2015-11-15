// add scripts



$(document).on('ready', function() {
  console.log('sanity check!');


});

//  var url = "http://api.census.gov/data/2013/acs1/profile?get=NAME,"+popCode+','+hsEdu+','+bsEdu+"&for=state:"+state+"&key="+CENS_id;

// var test = { bsEducation: 'DP02_0067PE',
//   description: 'test',
//   population: 'DP05_0028E',
//   state: '01' }


// test.hasOwnProperty('description')

// var search = "";


var test = { bsEducation: 'DP02_0067PE',
  description: 'test',
  population: 'DP05_0028E',
  state: '01' };

//need to address state in building up URL
// function ifClicked (obj) {
//   var search = '';
//   var keys = Object.keys(obj);
//   for (i =0; i< keys.length; i++) {
//      if(i < keys.length - 1) {
//          search += obj[keys[i]]+','
//      } else {
//       search += obj[keys[i]];
//      }
//   }

//   return search;
// }

