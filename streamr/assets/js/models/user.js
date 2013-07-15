/**
*
* Model User
*/
( function( $, window, document, utils ) {

	var User = Gillie.Model.extend({

			// Logs users in and emits an event
	 		// on the model
			login: function( creds ) {

				var data = { creds: creds };
				utils.sync( '/login', data, 'loginSync', this );

			}

	});

	// Global Exposition
	window.App.Models.User = new User();



})( this.jQuery, this, this.document, this.App.Helpers.Utils, undefined );

