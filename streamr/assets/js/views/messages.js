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

				var container = '.home-page .stream'
				,	form = '.home-page .update-status'
				,	submit = $( form ).find( 'input[type="submit"]' );

				if ( data.status == 600 ) {
					console.log( data.data.error_text );
				}

				else  {

					data = {
							pub_date: moment().fromNow()
						,	content: data.data.content
						,	full_name: data.data.full_name
						,	avatar_src: '/static/images/beckham.jpg'
					}

					html = new EJS({ url: window.App.Config.templates + 'messages.post.ejs' })
						.render( data );

					html = $( html ).hide();
					$( container ).append( html );
					html.slideDown( 200 );

				}

				// Remove loading state
				submit
					.removeClass( 'disabled' )
					.attr( 'value', submit.data( 'original-text' ) );

			}

	});

	// Global Exposition
	window.App.Views.Messages = new Messages();


})( this.jQuery, this, this.document, this.App.Models.Messages, this.App.Helpers.Utils, undefined );