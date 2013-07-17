/**
*
* Handler: User
*/
( function( $, window, document, view, controller, utils ) {


	var User = Gillie.Handler.extend({

			// Initialize
			initialize: function()  {
				console.log( 'Gillie' );
			}

		,	events: {
				'submit .login-page .login-form': 'login'
			}


			// Login
		,	login: function( e ) {
				e.preventDefault();

				var target = e.currentTarget
				,	submit = $( target ).find( 'input[type="submit"]' );

				if ( submit.hasClass( 'disabled' ) ) return;
				submit
					.addClass( 'disabled' )
					.attr( 'value', 'Working...' );

				data = utils.getFormData( e.currentTarget );
				return controller.login( data );
			}


	});


	// Global Exposition
	window.App.Handlers.User = new User();



})( this.jQuery, this, this.document, this.App.Views.User, this.App.Controllers.User, this.App.Helpers.Utils, undefined );

