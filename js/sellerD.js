$(function(){
	//收藏店铺
	$('.shouchang').click(function(){
		if(!$(this).hasClass('shou_Y')){
			$(this).removeClass('shouchang');
			$(this).addClass('shou_Y')
		}else{
			$(this).removeClass('shou_Y');
			$(this).addClass('shouchang')
		}
	});
	
	

    $('.yuan').html(0);
    $('.yuan').css('display','none');
    //点击相应的加减衣服
	$(".both_top").on("click", function(){ 
		var text = $(this).siblings().children('span').html();// 获取到点击的相应衣服
            var $countInput = $(this).children(".yuan");
            $countInput.css('display','block')
            $countInput.html($countInput.html()-0+1);
        });
	$('.classify div').click(function(){
		var text = $(this).children('span').html();
		$('.shopp-tit span').html(text)
	})
	//弹出框
	$('.foot_left').click(function(){
		$('.Transparent').addClass('TransparentY')	;
		$(document.body).css({
		   "overflow-x":"hidden",
		   "overflow-y":"hidden"
		 })
	});
	$('.result_right').on('click',function(){
		$('.Transparent').removeClass('TransparentY');
		$(document.body).css({
		   "overflow-x":"auto",
		   "overflow-y":"auto"
		 })
	});
	
    //洗衣篓的加减
    $(function(){
        $(".addJ").on("click", function(){
            // 先找到当前加号的父元素class="line"的div,再寻找当前div下的文本框class="amount" 
            var $countInput = $(this).siblings(".count");
            $countInput.val($countInput.val()-0+1);
        });
        $(".reduce").on("click", function(){
            var $countInput = $(this).siblings(".count");
            if ($countInput.val()-0 > 0){
                $countInput.val($countInput.val()-1);
            }
        });
    });
    
    //平台会员卡和返现会员卡的点击开关显示
    $('.no').on('click',function(){
    	if(!$(this).hasClass('off')){
    		$(this).addClass('off')
    	}else{
    		$(this).removeClass('off')
    	}
    });
    $('.off').on('click',function(){
    	if(!$(this).hasClass('no')){
    		$(this).addClass('no');
    		$(this).removeClass('off');
    	}else{
    		$(this).addClass('off');
    		$(this).removeClass('no');
    	}
    });
    var members = [
    {
        "Name": "Bob",
        "Age": 32,
        "Company": "IBM",
        "Engineer": true
    },
    {
        "Name": "John",
        "Age": 20,
        "Company": "Oracle",
        "Engineer": false
    },
    {
        "Name": "Henry",
        "Age": 45,
        "Company": "Microsoft",
        "Engineer": false
    }
   ]
   

})
