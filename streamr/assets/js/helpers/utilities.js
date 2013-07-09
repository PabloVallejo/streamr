//
// Helper: Utilities
//
( function( $, window, document ) {

	var Utils = function() {

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
            * Helps in the process of making a ajax requests
            *
            * @param { object } Options for configuring the ajax request
            * @param { object } data object to be sent
            */
        ,   ajax: function( options, data ) {

                var result
                ,   defaults = {
                        type: 'post'
                    // ,   url: aUrl
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

	};

	// Global exposition
	window.App.Helpers.Utils = new Utils();

})( jQuery, this, this.document );