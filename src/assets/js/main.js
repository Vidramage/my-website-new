jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MQL = 1170;

	//primary navigation slide-in effect
	if($(window).width() > MQL) {
		var headerHeight = $('.cd-header').height();
		$(window).on('scroll',
		{
	        previousTop: 0
	    },
	    function () {
		    var currentTop = $(window).scrollTop();
		    //check if user is scrolling up
		    if (currentTop < this.previousTop ) {
		    	//if scrolling up...
		    	if (currentTop > 0 && $('.cd-header').hasClass('is-fixed')) {
		    		$('.cd-header').addClass('is-visible');
		    	} else {
		    		$('.cd-header').removeClass('is-visible is-fixed');
		    	}
		    } else {
		    	//if scrolling down...
		    	$('.cd-header').removeClass('is-visible');
		    	if( currentTop > headerHeight && !$('.cd-header').hasClass('is-fixed')) $('.cd-header').addClass('is-fixed');
		    }
		    this.previousTop = currentTop;
		});
	}

	//open/close primary navigation
	$('.cd-primary-nav-trigger').on('click', function(){
		$('.cd-primary-nav li a').css('animation-delay', '500ms');
		$('.cd-primary-nav li a').css('animation-duration', '3000ms');
		$('.cd-menu-icon').toggleClass('is-clicked');
		$('.cd-header').toggleClass('menu-is-open');
		if ( $('.cd-header').hasClass('menu-is-open') ) {
			$('.cd-secondary-nav li a').css('color', 'rgba(2, 23, 37, 1)');
			$('header span.cd-menu-text').css('color', 'rgba(2, 23, 37, 1)');
			// $('.cd-primary-nav li:nth-child(odd)').addClass('animated bounceInLeft');
			// $('.cd-primary-nav li:nth-child(even)').addClass('animated bounceInRight');
			$('.cd-primary-nav li a').addClass('animated fadeIn');
		} else {
			$('.cd-secondary-nav li a').css('color', 'white');
			$('header span.cd-menu-text').css('color', 'white');
			// $('.cd-primary-nav li:nth-child(odd)').removeClass('animated bounceInLeft');
			// $('.cd-primary-nav li:nth-child(even)').removeClass('animated bounceInRight');
			$('.cd-primary-nav li a').removeClass('animated fadeIn');
		}

		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.cd-primary-nav').hasClass('is-visible') ) {
			$('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});
		}
	});

	 var body = $('body');
	 body.addClass('loaded');

	 $('#da-slider').cslider();
});
