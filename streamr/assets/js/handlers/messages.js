/**
*
* Handler Messages
*/
( function( $, window, document, model, view, controller, utils ) {

	var Messages = Gillie.Handler.extend({

			initialize: function() {

			}

		,	el: '.home-page'

		,	events: {	
				'submit .update-status': 'updateStatus'
			}

			// Handle status updates
		,	updateStatus: function( e ) {
				e.preventDefault();
				
				var target = e.currentTarget
				,	submit = $( target ).find( 'input[type="submit"]' );

				if ( submit.hasClass( 'disabled' ) ) return;
				submit
					.addClass( 'disabled' )
					.attr( 'value', 'Working...' );

				data = utils.getFormData( target );
				model.updateStatus( data );
			}

	});

	// Global Exposition
	window.App.Handlers.Messages = new Messages();



})( this.jQuery, this, this.document, this.App.Models.Messages, this.App.Views.Messages, this.App.Controllers.Messages, this.App.Helpers.Utils, undefined );

