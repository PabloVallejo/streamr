/**
*
* Model: Messages
*/
( function( $, window, document, utils ) {

	var Messages = Gillie.Model.extend({

			// Send the new status data to the server
			updateStatus: function( data ) {

				var data = { status: data };
				utils.sync( '/status', data, 'statusSync', this );
			}

	});

	// Global Exposition
	window.App.Models.Messages = new Messages();



})( this.jQuery, this, this.document, this.App.Helpers.Utils, undefined );

