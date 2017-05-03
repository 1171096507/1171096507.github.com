$(document).ready(function(){
	/*购物车下拉*/
	$(".top-cart").hover(function(){
		$(".cart-show").stop().fadeToggle();
	});
	/*自定义文本框*/
	$("#search").focus(function(){
		$(".search-hot").css("display","none");
		$(".pull-down").css("display","block");
		/*在此div内，不会blur*/
		$(".pull-down ").on("mousedown",false);
	}).blur(function(){
		if ($("#search").val()=="") {
			$(".search-hot").css("display","block");
		}else{
			$(".search-hot").css("display","none");
		}
		$(".pull-down").css("display","none");
	});
	$("#search").hover(function(){
		$(".search-text,.search-submit").toggleClass("border-black");
	});
	$(".search-submit").hover(function(){
		$(".search-text").toggleClass("border-black");
		$(".search-submit").toggleClass("search-submit-on");
	});
	/*菜单下拉*/
	$(".nav-list li").hover(function(){
		var w=$(document).width(); 
		var b=w/2;
		var cm;
		var ex = navigator.userAgent;
		if (ex.indexOf("MSIE") >= 0) {
        	cm=w-9;//IE下
    	} else{cm=w}
		$(".show-goods").css({
			"width":cm+"px",
			"left":"50%",
			"margin-left":-b+"px",
			"overflow":"hidden"
		});
		$(this).children(".show-goods").stop(true,false).slideDown();
	},function(){
		$(this).children(".show-goods").stop(true,false).slideUp();
	});

	/*轮播图*/
    var unslider = $('.banner').unslider({
    	speed: false,
		dots: true,
		autoplay: true,

	}),

	data = unslider.data('unslider');
	

	$('.unslider-arrow').click(function() {

        var fn = this.className.split(' ')[1];

        data[fn]();
    });

    /*卡片切换*/
   $(".home-star-goods").slide({
    	titCell:".box-hd ul",
    	mainCell:".box-bd ul",
    	autoPage:true,
    	effect:"left",
    	autoPlay:true,
    	scroll:5,
    	vis:5,
    	delayTime:500,
    	interTime:10000,
    	pnLoop:false
    });
    /*选项卡*/
  	$(".slideTab").slide({
  		titCell:".box-hd .tab-list li",
    	mainCell:".tab-body",
  		autoPlay:true,
  		delayTime:2000
  	});
  	  /*小轮播*/
  	$(".xm-carousel-wrapper").slide({
  		titCell:".dot ul",
  		mainCell:".carousel-list ul",
  		effect:"left",
  		autoPage:true,
  		autoPlay:false,
  		pnLoop:false,
  		trigger:"click"
  	});

})