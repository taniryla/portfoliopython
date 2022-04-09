
/* TRANSFORM HOVER ACTIONS FOR TOUCH SCREENS */
function is_touch_device() {
	var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
	var mq = function(query) {
		return window.matchMedia(query).matches;
	}
	if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
		return true;
	}
	var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
	return mq(query);
}

/* SEND FORM USING EMAILJS SDK */
window.onload = function() {
	$('#contact-form').submit(function(e) {
		e.preventDefault();
		if(this.contact.value.length<2 & this.user_email.value.length<7){
			swal({
				type: 'warning',
				title: 'Please write your email and a message',
				showConfirmButton: false,
				timer: 4000
			});
		} else if (this.contact.value.length<2) {
			swal({
				type: 'warning',
				title: 'Please write a message',
				showConfirmButton: false,
				timer: 4000
			});
		} else if (this.user_email.value.length<7) {
			swal({
				type: 'warning',
				title: 'Please write your email',
				showConfirmButton: false,
				timer: 4000
			});
		} else {
			emailjs.sendForm('gmail', 'template_zbfsSQ58', this);
			swal({
				type: 'success',
				title: 'Message sent',
				text: 'Thank you for contacting me! I\'ll get in touch with you as soon as I can',
				showConfirmButton: false,
				timer: 4000
			});
		}
	});
}

$(function() {

	/* GET NAVBAR HEIGHT */
	var navbar_height = $('.navbar').height();
	$('.bg-transparent').css('margin-top',-navbar_height+'px');

	/* SMOOTH SCROLL */
	$('.nav-link, .navbar-brand').click(function(e) {
		var sectionTo = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(sectionTo).offset().top - navbar_height
		}, 1500);
	});

	/* TOUCH DEVISE CORRECTIONS */
	var touch = is_touch_device()
	if ( touch == true ) {
		$('.project_content').css('background', 'rgba(89, 146, 84, .8)');
		$('.certificate_content').css('background', 'rgba(68, 126, 130, .8)');
		$('.table-cell').css('opacity','1');
	}

	/* CLOSE COLLAPSIBLE NAVBAR ON CLICK */
	$('.navbar-collapse a').click(function() {
    $('.navbar-collapse').removeClass('show');
   });

	$(window).scroll(function () {

		/* CHANGE COVER'S BACKGROUND COLOUR ON SCROLL */
		if ( $(this).scrollTop() > 150) {
			$('.cover_color_layer').addClass('cover_color_layer_transparent')
			$('.cover_color_layer').removeClass('cover_color_layer_acqua')
		} else {
			$('.cover_color_layer').removeClass('cover_color_layer_transparent')
			$('.cover_color_layer').addClass('cover_color_layer_acqua')
		}

		/* STICKY NAVBAR */
		if( $(this).scrollTop() > $(window).height() - navbar_height ) {
			$('.navbar').removeClass('bg-transparent');
			$('.navbar').addClass('bg-dark');
			$('.navbar').css('margin-top','0');
			$('.navbar').addClass('fixed-top no-transition');
		} else {
			$('.navbar').removeClass('fixed-top no-transition');
			$('.navbar').removeClass('bg-dark');
			$('.navbar').addClass('bg-transparent');
			$('.navbar').css('margin-top',-navbar_height+'px');
		}

	});

});