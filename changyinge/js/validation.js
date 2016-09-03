	// var signupForm=document.getElementById('signupForm');
	// var password=document.getElementById('password').value;
	// var confirmPassword=document.getElementById('confirmPassword').value;
	// var signupUser=document.getElementById('signupUser');
	// signupUser.onclick=function(){
	// 	if(password!=confirmPassword){
	// 		alert("两次输入密码不一致！");
	// 		signupForm.setAttribute("action","#");
	// 	}
	// }
function checkPass(){
 	var pwd1=document.getElementById('password').value;
	var pwd2=document.getElementById('confirmPassword').value;
 	if(pwd1!=pwd2){
    	document.getElementById("errorSpan").style.display = "block";
    	return false;
 	}
}