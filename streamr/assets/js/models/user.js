/**
*
* Model User
*/
( function( $, window, document, utils ) {

	var User = function( a ) {

		// Class attributes can be set here
	}

	User.prototype = {

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
								console.log( data );

								// Model
								gillie.trigger( _this, 'event', {} );
								
								// view.js
								gillie.on( model, 'event', this.method );
								gillie.on( model, 'sync', this.method );
								gillie.on( model, 'save', this.method );
								
								$( _this ).trigger( 'event', {} );

							}
					}

				return utils.ajax( options, data );
			}

	}

	// Global Exposition
	window.App.Models.User = new User();



})( this.jQuery, this, this.document, this.App.Helpers.Utils, undefined );

