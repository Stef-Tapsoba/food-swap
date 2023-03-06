// // JS FOR CONTACT US Page

// var contactForm = function() {

// 	if ($('#contact-form').length > 0 ) {
// 		$( "#contact-form" ).validate( {
// 			rules: {
// 				fname: "required",
// 				lname: "required",
// 				email: {
// 					required: true,
// 					email: true
// 				},
// 				message: {
// 					required: true,
// 					minlength: 5
// 				}
// 			},
// 			messages: {
// 				fname: "Please enter your first name",
// 				lname: "Please enter your last name",
// 				email: "Please enter a valid email address",
// 				message: "Please enter a message"
// 			},
// 			/* submit via ajax */
// 			submitHandler: function(form) {		
// 				var $submit = $('.submitting'),
// 					waitText = 'Submitting...';

// 				$.ajax({   	
// 					type: "POST",
// 					url: "php/send-email.php",
// 					data: $(form).serialize(),

// 					beforeSend: function() { 
// 					$submit.css('display', 'block').text(waitText);
// 					},
// 					success: function(msg) {
// 					if (msg == 'OK') {
// 					$('#form-message-warning').hide();
// 						setTimeout(function(){
// 						$('#contact-form').fadeOut();
// 					}, 1000);
// 						setTimeout(function(){
// 							$('#form-message-success').fadeIn();   
// 					}, 1400);
						
// 					} else {
// 						$('#form-message-warning').html(msg);
// 						$('#form-message-warning').fadeIn();
// 						$submit.css('display', 'none');
// 					}
// 					},
// 					error: function() {
// 					$('#form-message-warning').html("Something went wrong. Please try again.");
// 						$('#form-message-warning').fadeIn();
// 						$submit.css('display', 'none');
// 					}
// 				});    		
// 			}
			
// 		} );
// 	}
// };
// contactForm();

// JS FOR FAQ PAGE
var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}