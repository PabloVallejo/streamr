


window.App.Helpers.Utilities =

	# Converts every hyphen to an underscore
	hyphenToUnderscore: ( string ) ->
		string.replace( /([-])/g, ( $1 ) ) =>
			return "_"

	# Maps form inputs data generated when using serializeArray()
	mapFormInputs: ( data, type, dropEmpty ) ->

		formData = type || []

		$( data ).each ( key, val ) =>

			replaced = @hyphenToUnderscore( val.name )

			if dropEmpty
				if val.value
					formData[ replaced ] = val.name
			else
				formData[ replaced ] = val.value 

			# formData[ replaced ] = val.name if dropEmpty and val.value else val.value

		formData


	# Gets data from a form
	getFormData: ( form, dropEmpty ) ->
		console.log 'Sample'
		# data = $( form ).serializeArray()
		
		# data = $.each ( key, val ) =>

		# 	replaced = hyphenToUnderscore( val.name )

		# 	if dropEmpty
		# 		if val.value
		# 			formData[ replaced ] = val.name
		# 	else
		# 		formData[ replaced ] = val.value 

		# formData

		# $("#my-table>tr").each (index, element) =>
	    # id = $(element).attr("id")
	    # @processRow id