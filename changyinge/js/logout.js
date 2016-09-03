	var userName=document.getElementById('userName');
	var userImg=document.getElementById('userImg');
	var settings=document.getElementById('settings');
	var logout=document.getElementById('logout');
	var myzone=document.getElementsByClassName('myzone');
	logout.onclick=function(){
		var logoutOrSignin=logout.innerHTML;
		if(logoutOrSignin=="退出登录"){
			var con=confirm("确认退出？");
			if(con===true){
				userImg.setAttribute("src","images/a-1.jpg");
				userName.innerHTML="登录/注册";
				settings.innerHTML="登录";
				logout.innerHTML="注册";
				settings.setAttribute("href","signin.html");
			}
		}
		else{
			logout.setAttribute("href","signup.html");
		}
	};
	for(var i=0,len=myzone.length;i<len;i++){
		myzone[i].onclick=function(){
			if(userName.innerHTML=="登录/注册"){
				alert("请在登录后查看个人数据");
				return false;
			}
		}
	}
