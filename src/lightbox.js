(function( $ ){

  $.fn.lightbox = function( options ) {  

    var settings = {
      'bgcolor' : 'rgba(3,3,3,0.8)',
      'closeButton' : false
    };

    return this.each(function() {        
      // If options exist, lets merge them
      // with our default settings
      if ( options ) { 
        $.extend( settings, options );
      }

      // Set up the onclick function for the thumbnails
      $(this).on('click', _openLightboxView);

        function _openLightboxView(event) {

            //Create the overlay
            var $overlay = $("<div id='overlay'></div>"); 

            var img = $('<img />', { 
              id: 'lightboxImage',
              src: $(event.target).attr('src'),
              alt: $(event.target).attr('alt') || 'LightBox Close Up Image'
            });

            $overlay
            .css('background-color', settings.bgcolor)
            .append(img)
            .fadeIn();

            if (settings.closeButton){
                var closeButton = $('<img />', { 
                  id: 'lightboxCloseButton',
                  src: './images/close_button.png',
                  alt: 'LightBox Close Button'
                });

                $overlay.append(closeButton);
            }

            $overlay.appendTo('body');

            //Now set up the close function
            (settings.closeButton ? $( "#lightboxCloseButton" ) :  $( "#overlay" ))
            .on('click', function() {
              _closeLightboxView();
            });
        }

        function _closeLightboxView(event) {
            $('#overlay, #lightboxImage').fadeOut('slow', function(){
              $(this).remove();
            });
        }

    });
  };

})( jQuery );