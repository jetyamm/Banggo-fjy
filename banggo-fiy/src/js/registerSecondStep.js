$(function(){

	// 获取注册用户名账号与手机号
	$('.sendCode').click(function(){
		$('#username2').val($('#username').val());
		$('#phone2').val($('#phone').val());
	})

	// 密码验证
	$('#password').keyup(function(){
		if($(this).val().length>20||$(this).val().length<6){
			$('.errorPassword').text('密码只能为6~20个字符');
			$('.errorPassword').css({
								opacity: '1',
								color: 'red'
							});
		}else{
			if(!isPasswordAvailable($(this))){
				$('.errorPassword').text('密码不能包含空格符');
				$('.errorPassword').css({
									opacity: '1',
									color: 'red'
								});
			}else{
				$('.errorPassword').css({opacity: '0'});
			}
		}
	})
	$('#password').blur(function(){
		if($(this).val() === ''){
			$('.errorPassword').text('密码不能为空');
			$('.errorPassword').css({
								opacity: '1',
								color: 'red'
							});
		}
	})

	// 密码二次验证
	$('#password2').blur(function(){
		var pw = $('#password').val();
		if(pw !== $('#password2').val()){
			$('.errorPassword2').text('输入的密码不一致');
			$('.errorPassword2').css({
								opacity: '1',
								color: 'red'
							});
		}
	})

	$('#password').blur(function(){
		if($(this).val() === ''){
			$('.errorPassword').text('密码不能为空');
			$('.errorPassword').css({
								opacity: '1',
								color: 'red'
							});
		}
	})
	// 获取激活码
	$('#cdKey').click(function(){
		$(this).val(Cookie.get('key'));
	})

	// 注册
	$('.agreeRegister').click(function(){
		var inputKey = $('#cdKey').val();
		if(inputKey == Cookie.get('key') && $('#password').val() == $('#password2').val()){
			$.ajax({
				type: 'post',
				url: '../api/register_succsee.php',
				async: true,
				data: `username=${$('#username2').val()}&phone=${$('#phone2').val()}&password=${$('#password').val()}&invitPhone=${$('#inviterPhone').val()}`,
				success: function(data){
					if(data === 'yes'){
						if(confirm('注册成功，马上去登陆试试吧!')){
							location = '../html/login.html'
						}else{
							confirm('注册失败');
						}
					}
				}
			})
		}
	})
	// 密码验证正则
    function isPasswordAvailable($uesenameInput) {
        var myreg=/^[\S]{6,20}$/;
        if (!myreg.test($uesenameInput.val())) {
            return false;
        } else {
            return true;
        }
    }
})