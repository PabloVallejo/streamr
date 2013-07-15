/**
*
* View User
*/
( function( $, window, document, model, utils ) {

	var User = Gillie.View.extend({

			// Init
			initialize: function() {

				model.on( 'loginSync', this.handleLogin );
			}


			// Handle login
		,	handleLogin: function( data ) {
				
				var submit = '.login-page .login-form input[type="submit"]'
				,	notification = '.login-page .login-form .notification p';

				if ( data.status == 600 ) {

					$( notification )
						.text( data.data.error_text )
						.addClass( 'error' ).slideDown( 200 );
				} 

				else {
					window.location.reload();
				}

				$( submit ).removeClass( 'disabled' )
					.attr( 'value', $( submit ).data( 'original-text' ) );
			}

	});

	// Global Exposition
	window.App.Views.User = new User();



})( this.jQuery, this, this.document, this.App.Models.User, this.App.Helpers.Utils, undefined );

