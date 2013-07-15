/**
*
* View: Messages
*/
( function( $, window, document, model, utilis ) {

	var Messages = Gillie.View.extend({

			initialize: function() {
					
				// Listen for status updates
				model.on( 'statusSync', this.handleNewStatus );
			}

		,	handleNewStatus: function( data ) {
					
				var container = '.home-page .stream';

				if ( data.status == 600 ) {
					console.log( data.data.error_text )
				}

				else  {
					html = new EJS({ url: window.App.Config.templtes })
						.render({});

					$( container ).append( html );
					console.log( html );
				}

			}	

	});

	// Global Exposition
	window.App.Views.Messages = new Messages();


})( this.jQuery, this, this.document, this.App.Models.Messages, this.App.Helpers.Utils, undefined );