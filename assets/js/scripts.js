(function($) {
    'use strict';

    jQuery(document).ready(function() {

        $('.work-popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        var MixitUpInit = $('.work-inner');

        /*MixitUpInit.on('mixLoad', function() {
          console.log('[event-handler] MixItUp Loaded');
        });

        MixitUpInit.on('mixStart', function() {
          console.log('[event-handler] Animation Started')
        });

        MixitUpInit.on('mixEnd', function() {
          console.log('[event-handler] Animation Ended')
        });*/

        MixitUpInit.mixItUp({
          callbacks: {
            onMixLoad: function(e) {
                //console.log('[callback] MixItUp Loaded');
            },
            onMixStart: function(e) {
                //console.log('[callback] Animation Started');
                var show = e.$show;
                var i;
                for (i = 0; i < show.length; i++) {
                    //$( show[i] ).addClass('grid_class_'+i);

                    $( show[i] ).removeClass (function (index, className) {
                        return (className.match (/\bgrid_class_\S+/g) || []).join(' ');
                    });
                }

            },
            onMixEnd: function(e) {

                var show = e.$show;
                var i;
                for (i = 0; i < show.length; i++) {
                    $( show[i] ).addClass('grid_class_'+i);
                }
            }
          }
        });

    });

})(jQuery);