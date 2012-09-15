(function($){
	var method = {
		init: function(){
			method.selectedIndex = 0;
			//a.animationSupport = Modernizr.cssanimations && Modernizr.opacity;	
			method.nextSlide = $('#nextSlide');
			method.prevSlide = $('#prevSlide');
			method.nextSlide.click(_.bind(method.nextPanel, this));
			method.prevSlide.click(_.bind(method.prevPanel,this));	
			method.autoplay();
			method.tooltip();
		}
	};
	$.fn.cssSlider = function(method){
		method.init();
	};
})(jQuery)