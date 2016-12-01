console.log("test");
$( document ).ready(function(){
  console.log("test");

$( '#searchButton' ).on( 'click', function(){
  console.log( 'this works' );
  // get user input for a search
  var movieTitle = $( '#searchIn' ).val();
  console.log( 'searching for:', movieTitle );
  // assemble search string url
  var searchUrl = 'http://www.omdbapi.com/?s=' + movieTitle;
  console.log( 'searchUrl:', searchUrl );
  // ajax call
  $.ajax({
  url: searchUrl,
  dataType: 'JSON',
  success: function( data ){
    console.log( 'success, data:', data );
    // parse return data
    console.log( 'data.Search:', data.Search );
    var searchResults = data.Search;
    // display on the DOM
    displayResults ( searchResults );
  }
}); // end ajax
}); // end on click

var displayResults = function( results ){
  // loop through the search results and display each Title, Year, and Poster
var output = '';
for (var i = 0; i < results.length; i++) {
  output += '<h2>' + results[i].Title + '<h2><p>' + results[i].Year + '<p>';
  output += '<img src="' + results[i].Poster + '" />';
}
// display in div
$( '#outputDiv' ).html( output );
}; // end displayResults
}); // end doc ready
