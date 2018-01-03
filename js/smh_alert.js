// JavaScript Document


//方法说明 定义到一个函数/方法中

var componse = {
	"required":"smh_required",		//必填
	"phone":{"name":"smh_phone","operations":{}},		//手机号格式11位		
	"telephone":{"name":"smh_telephone","operations":{}}, //座机和手机号
	"number":{"name":"smh_number",  //判断数字格式
			  "operations":{"num_max":"smh_num_max", //判断最大值
			  				"num_min":"smh_num_min", //判断最小值
							"num_max_message":"smh_num_max_message", //最大值提示信息
							"num_min_message":"smh_num_min_message",  //最小值提示信息
							"num_decimals":"smh_num_decimals",  //小数点位数
							"num_decimals_message":"smh_num_decimals_message",  //小数点提示信息
							"num_code":"smh_num_code",  //数字位数控制
							"num_code_message":"smh_num_code_message"  //数字位数提示
			}}, 
	"invite_code":{"name":"smh_invite_code","operations":{}},  //邀请码
	"pw":{"name":"smh_pw",  //密码
		  "operations":{"pw_max":"smh_pw_max", //判断密码最大长度
		  				"pw_min":"smh_pw_min", //判断密码最小长度
		}}
}

//主函数

var smh_alert=function(){
	return required()&&sphone()&&telephone()&&number()&&invite_code()&&pw();
	//  把所有模块都加载在这里 只需要一顿and就好了  &&......
}




//判断区域

//必填
var required=function(){
	//可以定义个变量
	var s = componse.required;
	var success=true;//标志位,判断是否通过
	
	//循环取包含对应属性的input
	$("body input").each(function(index, element) {
        if(typeof($(this).attr(s))!="undefined"){
			
			//判断弹出内容
			var alertContent = $(this).attr(s);
			if(alertContent==null || alertContent==""){
				alertContent = "必填项不能为空";
			}
			
			//判断是否符合规则
			if($(this).val()==""){
				alertmessage(alertContent);
				success=false;
				return false;
			}
			else{
				return true;
			}
		}

    });
	return success;
}



//手机号
var sphone=function(){	
	var s = componse.phone.name;
	var success=true;//标志位,判断是否通过
	
	//循环取包含对应属性的input
	$("body input").each(function(index, element) {
        if(typeof($(this).attr(s))!="undefined"){
			
			//判断弹出内容
			var alertContent = $(this).attr(s);
			if(alertContent==null || alertContent==""){
				alertContent = "手机号格式错误";
			}
			
			if($(this).val()==''){
				return true;
			}
			
			//判断是否符合规则
			if(!(/^1[3|4|5|7|8]\d{9}$/.test($(this).val()))){
				alertmessage(alertContent);
				success=false;
				return false;
			}
			else{
				return true;
			}
		}
    });
	return success;
}

//手机号+座机号(数字+'-')
var telephone =function(){	
	var s = componse.telephone.name;
	var success=true;//标志位,判断是否通过
	
	//循环取包含对应属性的input
	$("body input").each(function(index, element) {
        if(typeof($(this).attr(s))!="undefined"){
			
			//判断弹出内容
			var alertContent = $(this).attr(s);
			if(alertContent==null || alertContent==""){
				alertContent = "电话号码格式错误";
			}
			
			if($(this).val()==''){
				return true;
			}
			
			//判断是否符合规则
			if(!(/^[\d\-]*$/.test($(this).val()))){
				alertmessage(alertContent);
				success=false;
				return false;
			}
			else{
				return true;
			}
		}
    });
	return success;
}

//数字判断
var number=function(){
	return number_format()&&num_max()&&num_min()&&num_decimals()&&num_code();
}


//数字格式
var number_format=function(){	
	var s = componse.number.name;
	var success=true;//标志位,判断是否通过

	//循环取包含对应属性的input
	$("body input").each(function(index, element) {
        if(typeof($(this).attr(s))!="undefined"){
			
			//判断弹出内容
			var alertContent = $(this).attr(s);
			if(alertContent==null || alertContent==""){
				alertContent = "只能输入数字";
			}
			
			if($(this).val()==''){
				return true;
			}
			
			//判断是否符合规则
			if(isNaN($(this).val())){
				alertmessage(alertContent);
				success=false;
				return false;
			}
			else{
				return true;
			}
		}
    });
	return success;
}


//最大值
var num_max=function(){	
	var s = componse.number.operations.num_max;
	var t = componse.number.operations.num_max_message;
	var success=true;//标志位,判断是否通过
	
	//循环取包含对应属性的input
	$("body input").each(function(index, element) {
        if(typeof($(this).attr(s))!="undefined"){
			
			//判断弹出内容
			var alertContent = $(this).attr(t);
			if(alertContent==null || alertContent==""){
				alertContent = "输入数字不能大于"+$(this).attr(s);
			}
			
			if($(this).val()==''){
				return true;
			}
			
			//判断是否符合规则
			var a=parseInt($(this).val());
			var b=parseInt($(this).attr(s));
			if(a>b){
				alertmessage(alertContent);
				success=false;
				return false;
			}
			else{
				return true;
			}
		}
    });
	return success;
}


//最小值
var num_min=function(){	
	var s = componse.number.operations.num_min;
	var t = componse.number.operations.num_min_message;
	var success=true;//标志位,判断是否通过
	
	//循环取包含对应属性的input
	$("body input").each(function(index, element) {
        if(typeof($(this).attr(s))!="undefined"){
			
			//判断弹出内容
			var alertContent = $(this).attr(t);
			if(alertContent==null || alertContent==""){
				alertContent = "输入数字不能小于"+$(this).attr(s);
			}
			
			if($(this).val()==''){
				return true;
			}
			
			//判断是否符合规则
			var a=parseInt($(this).val());
			var b=parseInt($(this).attr(s));
			if(a<b){
				alertmessage(alertContent);
				success=false;
				return false;
			}
			else{
				return true;
			}
		}
    });
	return success;
}

//允许几位小数
var num_decimals=function(){	
	var s = componse.number.operations.num_decimals;
	var t = componse.number.operations.num_decimals_message;
	var success=true;//标志位,判断是否通过

	//循环取包含对应属性的input
	$("body input").each(function(index, element) {
        if(typeof($(this).attr(s))!="undefined"){
			
			//判断弹出内容
			var alertContent = $(this).attr(t);
			if(alertContent==null || alertContent==""){
				alertContent = "只能输入"+$(this).attr(s)+"位小数";
			}
			
			if($(this).val()==''){
				return true;
			}
			
			//判断是否符合规则
			var decimal_pattern='\^\\d+(\\.\\d{0,'+$(this).attr(s)+'})?$';
			var decimal_confirm=new RegExp(decimal_pattern);//需要增加小数点位数随机

			if(!(decimal_confirm.test($(this).val()))){
				alertmessage(alertContent);
				success=false;
				return false;
			}
			else{
				return true;
			}
		}
    });
	return success;
}

//数字位数
var num_code=function(){	
	var s = componse.number.operations.num_code;
	var t = componse.number.operations.num_code_message;
	var success=true;//标志位,判断是否通过
	
	//循环取包含对应属性的input
	$("body input").each(function(index, element) {
        if(typeof($(this).attr(s))!="undefined"){
			
			//判断弹出内容
			var alertContent = $(this).attr(t);
			if(alertContent==null || alertContent==""){
				alertContent = "输入数字长度不能大于"+$(this).attr(s);
			}
			
			if($(this).val()==''){
				return true;
			}
			
			//判断是否符合规则
			var a=$(this).val().length;
			var b=$(this).attr(s);
			if(a!=b){
				alertmessage(alertContent);
				success=false;
				return false;
			}
			else{
				return true;
			}
		}
    });
	return success;
}


//邀请码格式
var invite_code=function(){	
	var s = componse.invite_code.name;
	var success=true;//标志位,判断是否通过
	
	//循环取包含对应属性的input
	$("body input").each(function(index, element) {
        if(typeof($(this).attr(s))!="undefined"){
			
			//判断弹出内容
			var alertContent = $(this).attr(s);
			if(alertContent==null || alertContent==""){
				alertContent = "格式错误";
			}
			
			if($(this).val()==''){
				return true;
			}
			
			//判断是否符合规则
//			同时存在数字和大写字母判断/^(?=.*[A-Z])(?=.*\d).{5}$/
			if(!(/^[A-Za-z1-9]{5}$/.test($(this).val()))){
				alertmessage(alertContent);
				success=false;
				return false;
			}
			else{
				return true;
			}
		}
    });
	return success;
}


//密码
var pw=function(){	
	var s = componse.pw.name;
	var smax = componse.pw.operations.pw_max;
	var smin = componse.pw.operations.pw_min;
	var success=true;//标志位,判断是否通过
	
	//循环取包含对应属性的input
	$("body input").each(function(index, element) {
        if(typeof($(this).attr(s))!="undefined"){
			
			//判断弹出内容
			var alertContent = $(this).attr(s);
			if(alertContent==null || alertContent==""){
				alertContent = "密码错误";
			}
			
			if($(this).val()==''){
				return true;
			}
			
			//判断是否符合规则
			var m=parseInt($(this).attr(smax));
			var n=parseInt($(this).attr(smin));
			var pw_pattern='\^(?=.*[a-zA-Z])(?=.*[0-9]).{'+n+','+m+'}$';
			var pw_confirm=new RegExp(pw_pattern);
			console.log(pw_confirm);
			
			if(!(pw_confirm.test($(this).val()))){
				alertmessage(alertContent);
				success=false;
				return false;
			}
			else{
				return true;
			}
		}
    });
	return success;
}
//弹出框区域
//alert
var alertmessage=function(message){	
	var scroll_top=document.body.scrollTop;//网页被卷去的高
	$('.alert').remove();
	var html="<div class='alert'><div>"+message+"</div></div>";
	$("body").append(html);
	$('.alert').css({'display':'block','top':scroll_top});
	$(".alert").addClass("alertnb");
	setTimeout(function alertnone(){$(".alert").css("display","none");},2000);
}

