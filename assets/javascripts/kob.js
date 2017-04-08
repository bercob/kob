$(document).ready(function() {
	var owl = $('.owl-carousel');
	owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
	});

	$('span.detail-down').click(function () {
		slideToggleDetail($(this), $(this).parent().siblings('.section-detail'));
	})

  $('span.detail-up').click(function () {
		slideToggleDetail($(this).parent().parent().parent().find('span.detail-down'), $(this).parent().parent('.section-detail'));
	})

  $('.navbar-nav li a').click(function() {
    $('.navbar-collapse').collapse('hide');
  })

})

function slideToggleDetail(button, detail) {
	if (detail.is(':visible')) {
		button.removeClass('glyphicon-chevron-up');
		button.addClass('glyphicon-chevron-down');
	} else {
		button.removeClass('glyphicon-chevron-down');
		button.addClass('glyphicon-chevron-up');
	}  		
	detail.slideToggle();
}