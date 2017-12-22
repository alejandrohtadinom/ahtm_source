/*
TODO:
Add form functions
$.ajax({
    url: "https://formspree.io/you@email.com",
    method: "POST",
    data: {message: "hello!"},
    dataType: "json"
});
*/

$('#contact-form').submit(function (e) {
    var name = $('#name'),
        email = $('#email'),
        subject = $('#subject'),
        message = $('#message');

    if (!name.value || !email.value || !message.value) {
        console.log("Error");
    } else {
        $.ajax({
        url: "https://formspree.io/alejandrohtadinom@gmail.com",
        method: "POST",
        data: $(this).serilize(),
        dataType: "json"
    });
        e.preventDefault();
        $(this).get(0).reset();
    }
});
