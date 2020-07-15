$(document).ready(function() {
	$('.acc-title').on('click', function() {                    
		var $this = $(this);
		var $parent = $this.parent();

		if ( $parent.hasClass('active') ){
			$parent.removeClass('active')
				.find('.acc-body').slideUp();
		} else {
			$this
				.siblings().slideDown()
				.parent().addClass('active')
				.siblings().removeClass('active')
				.find('.acc-body').slideUp();     
		}
	});

	$('.header-menu').on('click' , function(e) {
		e.preventDefault();
		var $this = $(this);

		$this
			.parents('.nav').find('.menu').toggleClass('active');
	});
});

