/**
*
* Controller: User
*/
( function( $, window, document, view, model, utils ) {

	var User = function( a ) {

		// Class attributes can be set here
	}

	User.prototype = {

			// Login
			login: function( data ) {
				model.login( data );						
			}

	}

	// Global Exposition
	window.App.Controllers.User = new User();



})( this.jQuery, this, this.document, this.App.Views.User, this.App.Models.User, this.App.Helpers.Utils, undefined );

