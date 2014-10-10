$(function() {
	smoothScrool(1000);
});

// smoothScroll function is applied from the document ready function
function smoothScrool (duration) {
	$('a[href^="#"]').on('click', function(event) {
		var target = $( $(this).attr('href') );

		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, duration);
		}
	});
}
$(function() {
	$("input,textarea").jqBootstrapValidation({
		preventSubmit: true,
		submitError: function($form, event, errors) {
			// additional error messages or events
		},
		submitSuccess: function($form, event) {
			event.preventDefault(); // prevent default submit behaviour
			// get values from FORM
			var name = $("input#name").val();
			var email = $("input#email").val();
			var phone = $("input#phone").val();
			var message = $("textarea#message").val();
			var firstName = name; // For Success/Failure Message
			// Check for white space in name for Success/Fail message
			if (firstName.indexOf(' ') >= 0) {
				firstName = name.split(' ').slice(0, -1).join(' ');
			}
			$.ajax({
				url: "//forms.brace.io/javierworldjolor@yahoo.com.ar",
				method: "POST",
				data: {
					name: name,
					phone: phone,
					email: email,
					message: message
				},
				cache: false,
				success: function() {
					// Success message
					$('#success').html("<div class='alert alert-success'>");
					$('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
					$('#success > .alert-success').append("<strong>¡Tu mensaje ha sido enviado exitósamente!</strong>");
					$('#success > .alert-success').append('</div>');
					//clear all fields
					$('#contactForm').trigger("reset");
				},
				error: function() {
					// Fail message
					$('#success').html("<div class='alert alert-success'>");
					$('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
					$('#success > .alert-success').append("<strong>¡Tu mensaje ha sido enviado exitósamente!</strong>");
					$('#success > .alert-success').append('</div>');
					//clear all fields
					$('#contactForm').trigger("reset");
				},
			})
		},
		filter: function() {
			return $(this).is(":visible");
		},
	});

	$("a[data-toggle=\"tab\"]").click(function(e) {
		e.preventDefault();
		$(this).tab("show");
	});
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
		$('#success').html('');
});
