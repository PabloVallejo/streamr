/**
*
* Model User
*/
( function( $, window, document, utils ) {

	var User = function( a ) {

		// Class attributes can be set here
	}

	User.prototype = {

			login: function( creds ) {

				var data = {
						creds: creds
					}
				,	options = {
							async: true
						,	url: '/login'
						,	success: function( data ) {

								console.log( data );
							}	
					}

				return utils.ajax( options, data );
			}

	}

	// Global Exposition
	window.App.Models.User = new User();



})( this.jQuery, this, this.document, this.App.Helpers.Utils, undefined );

