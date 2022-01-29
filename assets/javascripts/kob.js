$(document).ready(function() {
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		items: 1,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		dots: false
	});

	$('span.detail-down').click(function () {
		slideToggleDetail($(this), $('#' + $(this).data('section-detail')), document.getElementById($(this).data('anchor')));
	})

	$('span.detail-up').click(function () {
		slideToggleDetail($('#' + $(this).data('detail-down')), $('#' + $(this).data('section-detail')), document.getElementById($(this).data('anchor')));
	})

	$('.navbar-nav li a').click(function() {
		$('.navbar-collapse').collapse('hide');
	})

	$('a.gallery-link').click(function(e) {
		$('#' + $(this).data('gallery')).click();
		e.preventDefault();
	})

	$('#detail-down-two-percent').click();
	$('#detail-down-contact').click();
})

function slideToggleDetail(button, detail, anchor) {
	if (detail.is(':visible')) {
		anchor.scrollIntoView();
		button.removeClass('glyphicon-chevron-up');
		button.addClass('glyphicon-chevron-down');
	} else {
		button.removeClass('glyphicon-chevron-down');
		button.addClass('glyphicon-chevron-up');
	}
	detail.slideToggle();
}