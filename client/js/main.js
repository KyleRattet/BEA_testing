// add scripts



$(document).on('ready', function() {
  console.log('sanity check!');
// var id = process.env.ID;

$.get(searchUrl, function( data ) {
  $( ".result" ).html( data );
  console.log(data);
});
 //  var payload =

 // $.ajax({
 //      url: '/info',
 //      data: data
 //    }).done(function(data){
 //      console.log(data);
 //    });

$.get( "/info", function( data ) {
  $( ".result" ).html( data );
  console.log(data);
});


});



