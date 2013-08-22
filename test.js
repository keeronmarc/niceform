$(document).ready(function() {
	$('.button').click(function () {
		var firstName = $('.firstName').val();
		$('#firstNameOutput').text(firstName);
		if (firstName[0] == "A") {
			$('body').addClass('green');
		}
		else {
			$('body').addClass('yellow');
		}
	})
})

//wrote a function for last name
$(document).ready(function() {
	$('.button').click(function() {
	var lastName = $('.lastName').val();
		$('#lastNameOutput').text(lastName);
	})
})

//wrote a function for email
$(document).ready(function() {
	$('.button').click(function() {
		var email = $('.email').val();
		$('#emailOutput').text(email);
	})	
})

function displayVars() {
	var singleCoffee = $('#coffeeType').val();
	$('#coffeeOutput').html(singleCoffee);
}
 	$('select').change(displayVars);
 	displayVars();
 
$(document).ready(function() {
	$('.button').click(function() {
	validateForm ();
});


function validateForm () {
	
	var errorCheck = $('.firstName').val() {
		if (errorCheck = "") {
			$('.firstName').addClass('errors');

{
		$('.button').click(function() {
		var firstName = $('.firstName').val();
		}
		$('.button').click(function() {
		var lastName = $('.lastName').val();
		}
		$('.button').click(function() {
		var email = $('.email').val();
		}
		}
	})
})

		}
	})




