$( function () {

  $( '#source' ).change( function() {
    var select = $( this );
    var opt = select.find( 'option[value="' + select.val() + '"]' ); 

    $( '#source-url' ).val( opt.data( 'url' ) );
  } );

  function flash( text ) {
    $( '#prepare-flash' ).text( text ).show()[ 0 ].scrollIntoView();
    return false;
  }
} );
