$( function () {
  var sources = { };

  $( '#source' ).change( function() {
    var sourceVal = $( '#source' ).val();

    if ( sourceVal ) {
      var source = sources[ sourceVal ];
      $( '#source-url' ).val( source.url );
      $( '#source-selector' ).val( source.selector );
    }
  } );

  $( '#form-scrape' ).submit( function() {
    var sourceVal = $( '#source' ).val();

    if ( sourceVal ) {
      var source = sources[ sourceVal ];

      var proxy = 'ba-simple-proxy.php';
      var url = proxy + '?mode=native&send_cookies=1&send_session=1&url=' + encodeURIComponent( source.url );


      /*
      $.getJSON( url, function( data ) {
        $( '#urls' ).val( JSON.stringify( data, null, 2 ) );
      });
      */



      $.get( url, function( data ) {
        $( '#urls').val( data );
      } );
    }

    return false;
  } );

  // extract sources
  $( '#source option' ).each( function( ) {
    var opt = $( this );

    if ( opt.attr( 'value' ) ) {
      sources[ opt.attr( 'value' ) ] = {
        url: opt.data( 'url' ),
        selector: opt.data( 'selector' )
      };
    }
  } );

  function flash( text ) {
    $( '#prepare-flash' ).text( text ).show()[ 0 ].scrollIntoView();
    return false;
  }
} );
