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
				console.log( data );
			}	

	});

	// Global Exposition
	window.App.Views.Messages = new Messages();


})( this.jQuery, this, this.document, this.App.Models.Messages, this.App.Helpers.Utils, undefined );