// Copy to Clipboard Button

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
};

// jQuery UI Initialization

$( function() {
  $( ".widget input[type=submit], .widget a, .widget button" ).button();
  $( ".accordion" ).accordion();
  $( ".selectmenu" ).selectmenu();
  $( "button, input, a" ).click( function( event ) {
    event.preventDefault();
  } );
} );
