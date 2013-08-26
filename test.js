$(document).ready(function() {
	$('.button').click(function() {
			if (validateForm()) {
				colorbgd();
				runall();
			}
	})

	function colorbgd () {
		var firstName = $('.firstName').val();
		$('#firstNameOutput').text(firstName);
		if (firstName[0] === "A" || "B" || "C" || "D") {
			$('body').css("background", "#006B54");}
		else {
			$('body').css("background", "#ff0006");}
	}
				
	function runall () {
		var firstName = $('.firstName').val();
		var lastName = $('.lastName').val();
		var email = $('.email').val();
		var coffees = $('.cup_joe').val();
		$('#firstNameOutput').text(firstName);
		$('#lastNameOutput').text(lastName);
		$('#emailOutput').text(email);
		$('#coffeeOutput').text(coffees);
	}

	function validateForm () {
		var emptyfield = 0;
		$('input').css("background", "none");
		$("input").each(function () {
		if ($(this).val() == ""){
			$(this).css("background", "red");
			emptyfield++;	
			}
		})
		if (emptyfield > 0) {
			var element = $('.element');
			var active = function(){
					element.removeClass('inactive').addClass('active');
					element.append('<p>You Might Want to Check Again!</p>');
			};
			$('.closebtn').click(function() {
				element.removeClass('active').addClass('inactive');
				$('.element > p').remove('p');
			})
			setTimeout(active, 100);
			// closer ();
			return false;
		}
	return true;
	}

})
			
			


// function displayVars() {
// 	var singleCoffee = $('#coffeeType').val();
// 	$('#coffeeOutput').html(singleCoffee);
	
//  	$('select').change(displayVars);
//  	displayVars();
//  }















