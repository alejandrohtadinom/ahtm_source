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


/*
 *Scroll animations:
 */

sectionAbout = $('.section-about');
cards = sectionAbout.find('.card-container');
card = cards.find('.card');

$(window).scroll(function () {
    wScroll = $(this).scrollTop();

    if (wScroll > (cards.offset().top / 2)) {
        card.css({
            'transform': 'translateY(0)',
            'opacity': 1
        });
    }
});
