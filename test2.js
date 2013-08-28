//****************************************************************************
// 								Overview: 
// Take Form input data, validate data, store variables as object, save object into 
// array, Loop through array and display all objects in array
//*****************************************************************************
// Step 1: Validating data Redo/Rethink
//			(a)Place all inputs in variables
//			(b)Convert variables to array to manipulate
//			(c)Loop through all inputs to determine if empty
//					if (one or more fields) are empty mark red, send modal alert
//					if not empty, 
//				
// Step 2(a): Saves input data as variables, store into object {}
// 		 (b): "Return" stops function & allows data for use globally (**/check this/**)
// Step 3: Take object data and place into array
// Step 4: Loop through array - create function
// Step 5: Create listings from array(obejct), place into div and display
// Step 6: Remove repeating inputs submitted from previous submits

var formdata_array = [];
var allusers = [];
$(document).ready(function() {
	$('.button').click(function() {
// Step 1: Run Validate data function
		// if (validateForm()) {
// Step 3: Take object data and place into array[]
// REASON WHY: "forminputdata has "())" b/c not passing argument in function as well
			formdata_array.push(forminputdata());
// REASON WHY: "formdata_array has ")" b/c PASSING argument in function 
			loop_output(formdata_array);
		// }
	})
})
// Step 2a: Defines input data as variables, store variables into one object {		
function forminputdata () {
	var firstName = $('.firstName').val();
	var lastName = $('.lastName').val();
	var email = $('.email').val();
	var coffees = $('.cup_joe').val();

	var formoutputdata = {
		firstname: firstName,
		lastname: lastName,
		email: email,
		cups: coffees,
	}
// Step 2b: Return data to stop function,allow data for use 
	return formoutputdata;
}
// Step 4: Loop through object(dataobject), need a subject to act upon(holder), making this function generic or resuable
function loop_output(holder){
	var display_datafield = $('.datasubmit');
// Step 6: Remove repeating inputs submitted from previous submits
	display_datafield.html('');
	holder.forEach(function(dataobject) {
// Step 5: Create listings from array(obejct), place into div for display
		display_datafield.append("<div class='profile'>"+ dataobject.lastname.charAt(0) + "<br />" + dataobject.firstname + "<br />" + dataobject.lastname + "<br />" + dataobject.email + "<br />" + dataobject.cups + "</div>")
	})
}

// function loop_letter(holders){
// 	var display_datafield = $('.datasubmit');
// // Step 6: Remove repeating inputs submitted from previous submits
// 	display_datafield.html('');
// 	holders.forEach(function(dataobjects) {
// // Step 5: Create listings from array(obejct), place into div for display
// 	if  (dataobjects.lastname.charAt(0) == "A" || "a") {
// 		display_datafield.append("this is cool");
// 		}
// 	})
// }

// Step 1: Validate data
// function validateForm () {
// 	var inputs = $('input');
// 		inputs.css("background", "none");
// 		//loops through all values to determine if empty
// 		// successno();

// 		inputs.each(function() {
// 				if ($(this).val() == "") {
// 					$(this).css("background", "red");
// 					var element = $('.element');
// 					element.removeClass('inactive').addClass('active');
// 					element.append('<p>You Might Want to Check Again!</p>');
// 					if ($(this).click(function() {
// 						element.removeClass('active').addClass('inactive');
// 						$('.element > p').remove('p');
// 					})
// 				}
				
// 				if $('input').val() != "") {
// 					$('input').css("background", "none");
// 					console.log("true");
// 					}
// 			})
		

		
			
// 				// var element = $('.element');
// 				// var active = function(){
// 				// 	if ($(this).val() != "") {
// 				// 	element.removeClass('inactive').addClass('active');
// 				// 	element.append('<p>You Might Want to Check Again!</p>');
// 				// }
// }
	
	
// 	if (emptyfield > 0) {
// 		var element = $('.element');
// 		var active = function(){
// 				element.removeClass('inactive').addClass('active');
// 				element.append('<p>You Might Want to Check Again!</p>');
// 		};
// 		$('.closebtn').click(function() {
// 			element.removeClass('active').addClass('inactive');
// 			$('.element > p').remove('p');
// 		})
// 		setTimeout(active, 100);
// 		// closer ();
// 		return false;
// 	}
// 	return true;
// }
			









