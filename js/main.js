$( function () {
  $( '#type' ).change( function( ) {
    $( '#collection' ).val( '' );
    $( '#collection' ).parent( '.form-group' ).toggle( $( this ).val() === 'hul.ebook' );
  } );

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
        '<iframe width="96" height="48" src="' +
        'http://wally.hul.harvard.edu:8000/cgi-bin/ernie-prod.pl?' +
        requestUrl +
        '"></iframe>'
      );

    } );

    return false;
  } );
} );
