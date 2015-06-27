$( function () {
  $( '#type' ).change( function( ) {
    $( '#collection' ).val( '' );
    $( '#collection' ).parent( '.form-group' ).toggle( $( this ).val() === 'hul.ebook' );
  } );

  getEmail();

  $( '#prepare' ).click( function( ) {
    var urls_src = $( '#urls' ).val();

    var urls = urls_src.split( '\n' );

    var preparedHtml = '';
    var urlParts = '';

    $( urls ).each( function( ) {
      urlParts = this.split( '\t' );

      preparedHtml += '<tr>';
      preparedHtml += '<td class="prepared-uid">' + urlParts[ 0 ] + '</td>';

      if ( $( '#restricted' ).is( ':checked' ) ) {
        preparedHtml += '<td class="prepared-url">' + urlParts[ 1 ] + '</td>';
      } else {
        preparedHtml += '<td class="prepared-url">https://login.eresources.law.harvard.edu/login?url=' + encodeURIComponent( urlParts[ 1 ] ) + '</td>';
      }

      preparedHtml += '<td class="prepared-urn">http://nrs.harvard.edu/urn-3:hul.eresource:' + urlParts[ 0 ] + '</td>';

      preparedHtml += '<td class="prepared-status">Unsubmitted</td>';
      preparedHtml += '</tr>';
    } );

    $( '#prepared tbody' ).html( preparedHtml );
  } );

  $( '#go' ).click( function( ) {
    $( '#prepared tbody tr' ).each( function( i ) {
      var row = $( this );

      $( '#unique_ID' ).val( row.find( '.prepared-uid' ).text() );
      $( '#URL' ).val( row.find( '.prepared-url' ).text() );


      var requestUrl = $( 'form' ).serialize();
      row.find( '.prepared-status' ).html( 
        '<iframe src="' +
        'http://wally.hul.harvard.edu:8000/cgi-bin/ernie-prod.pl?' +
        requestUrl +
        '" onload="iframeLoad(this)"></iframe>' +
        $( '.progress-template' ).html()
      );

    } );

    return false;
  } );

  $( '#prepared' ).on( 'click', '.verify-iframe', function( ) {
    var btn = $( this );
    var iframe = btn.prev( 'iframe' );
    
    if ( btn.text() === 'Verify' ) {
      iframe.css( 'position', 'static' );
      btn.text( 'Hide' );
    } else {
      iframe.css( 'position', 'absolute' );
      btn.text( 'Verify' );
    }

    return false;
  } );

  function getEmail() {
    var hrefParts = window.location.href.split( '?' ),
        queryParts,
        paramParts;

    if ( hrefParts.length >= 2 ) {
      queryParts = hrefParts[1].split( '&' );

      $.each( queryParts, function( i, value ) {
        if ( value.indexOf( 'email' ) >= 0 ) {
          paramParts = value.split( '=' );
          if ( paramParts.length >= 2 ) {
            $( '#email' ).val( paramParts[ 1 ] );
          }
          return false;
        }
      } );
    }

  }
} );

function iframeLoad( iframe ) {
  $( iframe ).next( '.progress' ).remove();
  $( '<a class="verify-iframe btn btn-info" href="#">Verify</a>' ).insertAfter( iframe );
}
