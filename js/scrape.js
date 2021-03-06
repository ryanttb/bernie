$( function () {
  var sources = { };

  $( '#source' ).change( function() {
    var sourceVal = $( '#source' ).val();

    $( '#source-prefix,#source-url,#source-selector' ).val( '' );

    if ( sourceVal ) {
      var source = sources[ sourceVal ];
      $( '#source-prefix' ).val( source.prefix );
      $( '#source-url' ).val( source.url );
      $( '#source-selector' ).val( source.selector );
    }
  } );

  $( '#form-scrape' ).submit( function() {
    var sourceVal = $( '#source' ).val();

    if ( sourceVal ) {
      var source = sources[ sourceVal ];

      $.get( source.url, function( data ) {
        var csv = 'id\turl\ttext\n';
        var $this;
        $( data ).find( source.selector ).each( function( ) {
          $this = $( this );
          if ( $this.attr( 'href' ) ) {
            csv += ( getId( $this, sourceVal ) || '' ).trim() + '\t' + ( $this.attr( 'href' ).indexOf( source.prefix ) < 0 ? source.prefix : '' ) + $this.attr( 'href' ).trim() + '\t' + ( $this.text() || '' ).trim() + '\n';
          }
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
        prefix: opt.data( 'prefix' ),
        url: opt.data( 'url' ),
        selector: opt.data( 'selector' )
      };
    }
  } );

  function getId( $item, sourceVal ) {
    switch ( sourceVal ) {
      case 'ibfd':
        return $item.attr( 'href' ).split( '/' )[2];
      default:
        return $item.attr( 'name' );
    }
  }

  function flash( text ) {
    $( '#prepare-flash' ).text( text ).show()[ 0 ].scrollIntoView();
    return false;
  }
} );
