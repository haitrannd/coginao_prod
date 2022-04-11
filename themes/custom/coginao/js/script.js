(function($, Drupal) {
    Drupal.behaviors.coginao = {
        attach: function(context, settings) {
            Drupal.coginao.run(context, settings);
        }
    }

    Drupal.coginao = Drupal.coginao || {};

    // Main handle function
    Drupal.coginao.run = function(context, settings) {
        $(document, context).once('coginao').each(function() {

        });
    };
})(jQuery, Drupal);