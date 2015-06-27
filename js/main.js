$( function () {
  $( '#prepare' ).click( function( ) {
    var urls_src = $( '#urls' ).val();

    var urls = urls_src.split( '\n' );

    var preparedHtml = '';
    var urlParts = '';

    $( urls ).each( function( ) {
      urlParts = this.split( '\t' );

      preparedHtml += '<tr>';
      preparedHtml += '<td class="prepared-uid">' + urlParts[ 0 ] + '</td>';
      preparedHtml += '<td class="prepared-url">' + urlParts[ 1 ] + '</td>';
      preparedHtml += '<td class="prepared-urn">https://nrs.harvard.edu/' + urlParts[ 0 ] + '</td>';
      preparedHtml += '</tr>';
    } );

    $( '#prepared tbody' ).append( preparedHtml );
  } );
} );
