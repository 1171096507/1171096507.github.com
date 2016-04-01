
	var curIndex = 0, //当前index
      imgLen = $(".imgBox li").length; //图片总数
     // 定时器自动变换2.5秒每次
  var autoChange = setInterval(function(){ 
    if(curIndex < imgLen-1){ 
      curIndex ++; 
    }else{ 
      curIndex = 0;
    }
    //调用变换处理函数
    changeTo(curIndex); 
  },2500);
  $("#banner").hover(function(){ 
    //滑入清除定时器
    clearInterval(autoChange);
  },function(){ 
    //滑出则重置定时器
    autoChangeAgain();
  });

  //遍历数字按钮
  $(".numBox").find("li").each(function(item){
  	$(this).hover(function(){
  		clearInterval(autoChange);
  		changeTo(item);
  		curIndex=item;
  	},function(){
  		//鼠标移出按钮时判断在banner内外
  			$("#banner").onmouseover(function(){
  			clearInterval(autoChange);
  		});
  		$("#banner").onmouseout(function(){
  			autoChangeAgain();
  		});
  	})

  })
  //重置定时器
  function autoChangeAgain(){
  	autoChange = setInterval(function(){ 
    if(curIndex < imgLen-1){ 
      curIndex ++; 
    }else{ 
      curIndex = 0;
    }
    //调用变换处理函数
    changeTo(curIndex); 
  },2500);
  }

  function changeTo(num){ 
    var goLeft = num * 712;
    $(".imgBox").animate({left: "-" + goLeft + "px"},500);
    $(".txtBox").find("li").removeClass("onTxt").eq(num).addClass("onTxt");
    $(".numBox").find("li").removeClass("onNum").eq(num).addClass("onNum");
  }
