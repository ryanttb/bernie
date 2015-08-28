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

      $.get( sourceurl, function( data ) {
        var csv = 'id\turl\ttext\n';
        var $this;
        $( data ).find( source.selector ).each( function( ) {
          $this = $( this );
          csv += $this.attr( 'name' ) + '\t' + $this.attr( 'href' ) + '\t' + $this.text() + '\n';
        } );
        $( '#urls' ).val( csv );
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
