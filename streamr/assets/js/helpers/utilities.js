//
// Helper: Utilities
//
( function( $, window, document ) {

	var Utils = function() {
        return this.ajaxSetup();
	}

	Utils.prototype = {

			/**
            * Converts hiphens to underscores
            */
            hyphenToUnderscore: function( string ) {
                return string.replace( /([-])/g, function( $1 ) {

                    return "_";

                });
            }


        	/**
            * Maps form inputs generated when using serializeArray();
            * pusshes them to an array in a key( name ) value( value ) structure
            *
            * @param { array } serializeArray() generated array
            * @return { array } mapped array
            *
            */
        ,   mapFormInputs: function( data, type, dropEmpty ) {

                var formData = type || []
                ,   _this = this;

                $.each( data, function( key, val ) {

                    replaced = _this.hyphenToUnderscore( val.name );

                    if ( dropEmpty ) {

                        if ( val.value != "" ) {
                            formData[ replaced ] = val.value;
                        }

                        new Image()
                    }

                    else {
                        formData[ replaced ] = val.value;
                    }

                });

                return formData;

            }


			/**
            * Gets the form data
            * @param { obj || str } form object or selector
            * @return { obj } mapped form
            */
        ,   getFormData: function( form, dropEmpty ) {

                var data
                ,   _this = this;

                if ( dropEmpty == null ) {
                    dropEmpty = true;
                }

                data = $( form ).serializeArray();
                data = this.mapFormInputs( data, {}, dropEmpty );

                $.each( data, function( key, value ) {
                    if ( value == "on" ) {
                        data[ key ] = true;
                    }
                });

                // Check for empty values
                $( form ).find( "input[type=checkbox]" ).each( function() {
                    if ( ! $( this ).is( ":checked" ) ) {
                        name = $( this ).attr( "name" );
                        name = _this.hyphenToUnderscore( name );
                        data[ name ] = false;
                    }

                });

                return data;

            }

            /**
            * Sends an AJAX request to the database
            * in the specified `url` passing it `data` and
            * after that, triggers `event`
            *
            * @param { object }
            * @param { object }
            * @param { object }
            * @return { object }
            */
        ,   sync: function( url, data, event, context ) {

                for ( k in data ) {
                    data[ k ] = JSON.stringify( data[ k ] );
                }

                options = {
                        async: true
                    ,   url: url
                    ,   success: function( data ) {
                            context.trigger( event, data );
                        }
                }

                return this.ajax( options, data );

            }

            /**
            * Helps in the process of making a ajax requests
            *
            * @param { object } Options for configuring the ajax request
            * @param { object } data object to be sent
            */
        ,   ajax: function( options, data ) {

                var result
                ,   defaults = {
                        type: 'post'
                    ,   dataType: 'json'
                    ,   data: data
                    ,   async: false
                    ,   success: function( data ) {
                            result = data;
                        }

                    ,   error: function ( XMLHttpRequest, textStatus, errorThrown ) {
                            console.log( "error :" + XMLHttpRequest.responseText );
                        }
                    }

                // Merge defaults and options
                options = $.extend( {}, defaults, options );

                // Do the ajax request
                $.ajax( options );

                // Return the response object
                return result;

            }


            /**
            * Checks whether the current HTTP verb require CSRF protection
            * @param { string }
            * @return { bool }
            */
        ,   csrfSafeMethod: function( method ) {
                return ( /(GET|HEAD|OPTIONS|TRACE)$/.test( method ) );
            }


            /**
            * Tests that a given URL is a same-origin URL
            * @param { string } url to tests
            * @return { bool }
            */
        ,   sameOrigin: function( url ) {

                var host = document.location.host // Host + post
                ,   protocol = document.location.protocol
                ,   sr_origin = '//' + host
                ,   origin = protocol + sr_origin;

                // Allow absolute or scheme relative URLs to same origin
                return ( url == origin || url.slice( 0, origin.length + 1 ) == origin + '/' ) ||
                ( url == sr_origin || url.slice( 0, sr_origin.length + 1 ) == sr_origin + '/' ) ||

                // Or any other URL that isn't scheme relative or absolute i.e relative.
                !( /^(\/\/|http:|https:).*/.test( url ) );

            }

            /**
            * Adds the CSRFToken header to the AJAX requests
            */
        ,   ajaxSetup: function() {

                var _this = this;

                $.ajaxSetup({

                    beforeSend: function( xhr, settings ) {

                        // Send the token to same-origin, relative URLs only.
                        // Send the token only if the method warrants CSFR protection
                        // using the CSRFToken value acquired earlier
                        if ( ! _this.csrfSafeMethod( settings.type ) && _this.sameOrigin( settings.url ) ) {
                            var csrfToken = $.cookie( 'csrftoken' );
                            xhr.setRequestHeader( 'X-CSRFToken', csrfToken );
                        }
                    }

                });

            }

	};

	// Global exposition
	window.App.Helpers.Utils = new Utils();

})( jQuery, this, this.document );