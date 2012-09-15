(function($){
	var method = {
		init:function(){
			method.variable = $('#test');
			method.selectedIndex = 0;
			method.animationSupport = Modernizr.cssanimations && Modernizr.opacity;	
			method.nextSlide = $('.nextSlide');
			method.prevSlide = $('.prevSlide');
			method.navItems = $('.navItems li');
			method.navItemClick();
			method.nextSlide.click(_.bind(method.nextPanel, this));
			method.prevSlide.click(_.bind(method.prevPanel,this));	
			method.autoplay();
			method.tooltip();
		},
		autoplay: function (){ 
			method.interval = setInterval(function(){method.nextPanel();},8000);
			method.nextSlide.click(function(){clearInterval(method.interval)});
			method.prevSlide.click(function(){clearInterval(method.interval)});
		},
		navItemClick: function () {
			_.each(method.navItems, _.bind(function (x, y) {
				$(x).click(_.bind(method.setPanel, this, y))
			}, this))
		},
		nextPanel: function () {
			if(3 == method.selectedIndex){
				method.setPanel(0);
			}
			else {
				method.setPanel(method.selectedIndex + 1)
			}
		},
		prevPanel: function () { 
			method.setPanel(method.selectedIndex -1)
		},
		setPanel: function (i) {
			switch (method.selectedIndex) {
			case 0:
				method.panel1Out();
				break;
			case 1:
				method.panel2Out();
				break;
			case 2:
				method.panel3Out();
				break;
			case 3:
				method.panel4Out();
				break;
			}
			switch (i) {
			case 0:
				method.panel1In();
				break;
			case 1:
				method.panel2In();
				break;
			case 2:
				method.panel3In();
				break;
			case 3:
				method.panel4In();
				break;
			}
			method.selectedIndex = i;
			method.setNavItem();
			0 == method.selectedIndex ? method.prevSlide.fadeOut() : method.prevSlide.fadeIn()
			5 == method.selectedIndex ? method.nextSlide.fadeOut() : method.nextSlide.fadeIn()
    	},
		setNavItem: function () {
			method.navItems.removeClass("active");
			$(method.navItems[method.selectedIndex]).addClass("active")
		},
		panel1In: function () {
			method.animationSupport ? ($(".textpanel_1").removeClass().addClass("textpanel_1 grid_8 position_right animateMe fadeInLeft top"), $(".imagepanel_1").removeClass().addClass("imagepanel_1 grid_8 animateMe fadeInLeft")) : ($(".textpanel_1").show(),$(".imagepanel_1").show());
		},
		panel2In: function () {
			method.animationSupport ? ($(".textpanel_2").removeClass().addClass("textpanel_2 grid_8 animateMe fadeInUp top"), $(".imagepanel_2").removeClass().addClass("imagepanel_2 grid_8 animateMe fadeInDown")) : ($(".textpanel_2").show(),$(".imagepanel_2").show());
			$("#nav2").addClass("active");
		},
		panel3In: function () {
			method.animationSupport ? ($(".textpanel_3").removeClass().addClass("textpanel_3 grid_8 animateMe fadeInLeft top"), $(".imagepanel_3").removeClass().addClass("imagepanel_3 grid_8 animateMe fadeInRight")) : ($(".textpanel_3").show(),$(".imagepanel_3").show());
			$("#nav3").addClass("active");
		},
		panel4In: function () {
			method.animationSupport ? ($(".textpanel_4").removeClass().addClass("textpanel_4 grid_8 animateMe fadeInUp top"), $(".imagepanel_4").removeClass().addClass("imagepanel_4 grid_8 animateMe fadeInDown")) : ($(".textpanel_4").show(),$(".imagepanel_4").show());
			$("#nav4").addClass("active");
		},
		panel1Out: function () {
			method.animationSupport ? ($(".textpanel_1").removeClass().addClass("textpanel_1 grid_8 position_right animateMe fadeOutUp"), $(".imagepanel_1").removeClass().addClass("imagepanel_1 grid_8 animateMe fadeOutDown")) : ($(".textpanel_1").hide(),$(".imagepanel_1").hide());
			$("#nav1").removeClass()
		},
		panel2Out: function () {
			method.animationSupport ? ($(".textpanel_2").removeClass().addClass("textpanel_2 grid_8 animateMe fadeOutDown"), $(".imagepanel_2").removeClass().addClass("imagepanel_2 grid_8 animateMe fadeOut")) : ($(".textpanel_2").hide(),$(".imagepanel_2").hide());
			$("#nav2").removeClass()
		},
		panel3Out: function () {
			method.animationSupport ? ($(".textpanel_3").removeClass().addClass("textpanel_3 grid_8 animateMe fadeOutLeft"), $(".imagepanel_3").removeClass().addClass("imagepanel_3 grid_8 animateMe fadeOutRight")) : ($(".textpanel_3").hide(),$(".imagepanel_3").hide());
			$("#nav3").removeClass()
		},
		panel4Out: function () {
			method.animationSupport ? ($(".textpanel_4").removeClass().addClass("textpanel_4 grid_8 animateMe fadeOutRight"), $(".imagepanel_4").removeClass().addClass("imagepanel_4 grid_8 animateMe fadeOutLeft")) : ($(".textpanel_4").hide(),$(".imagepanel_4").hide());
			$("#nav4").removeClass()
		},
		tooltip: function(){
			//$('.steps .inner').tooltip({trigger:'focus'});	
		},
		actions : {
			contactSupport : function(){
				$('#contacttype').val(1);	
			}
		}
	};
	$.fn.cssSlider = function(method){
		method.init();
	};
})(jQuery)