// AJAX Form:
$('#contact-form').submit(function (e) {

    // Get the form elements:
    var name = $('#name'), // Name
        email = $('#email'), // Email direction
        subject = $('#subject'), // Subject dropdown
        message = $('#message'); // Message body

    // Form validation:
    if (!name.value || !email.value || !message.value) {

        // Error handling:
        console.log("Error");

    } else {
        // Ajaxify the form
        $.ajax({
        url: "https://formspree.io/alejandrohtadinom@gmail.com", // Server handler
        method: "POST", // Method
        data: $(this).serilize(), // Data
        dataType: "json" // Data type
    });
        e.preventDefault(); // Prevent the page reload after submition
        $(this).get(0).reset(); // Reset the form values
    }
});

