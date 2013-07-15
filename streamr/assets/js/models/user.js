/**
*
* Model User
*/
( function( $, window, document, utils ) {

	var User = Gillie.Model.extend({

			// Logs users in and emits an event
	 		// on the model
			login: function( creds ) {

				var	_this = this
				,	data = {
						creds: JSON.stringify( creds )
					}
				,	options = {
							async: true
						,	url: '/login'
						,	success: function( data ) {
								_this.trigger( 'loginSync', data );
							}
					}

				return utils.ajax( options, data );
			}

	});

	// Global Exposition
	window.App.Models.User = new User();



})( this.jQuery, this, this.document, this.App.Helpers.Utils, undefined );

