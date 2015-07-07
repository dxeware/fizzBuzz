$(document).ready(function() {

  var endRange = 15;

  function fizzBuzz(num) {
    var output = '';

    if ( (num % 3) === 0 ) {
      output += 'Fizz';
    }
    if ( (num % 5) === 0 ) {
      output += 'Buzz';
    }
    return ( output || num );

  }

  for (var i = 1; i <= endRange; i++) {
    $( 'body' ).append('<p style="color:blue; font-weight:bold; font-size:18px">' + fizzBuzz(i) + '</p>');
  }

});
