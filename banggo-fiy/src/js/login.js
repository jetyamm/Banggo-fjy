$(function(){
	// 进入注册页面
	$('.register').click(function(){
		location = '../html/register.html';
	});
	// 进入首页
	$('.home').click(function(){
		location = '../index.html';
	})
	// 刷新页面更新验证码
	$('.code').text(`${randomCode(4)}`);
	// 点击换一张更新验证码
	$('.codeSwitch').click(function(){
		$('.code').text(`${randomCode(4)}`);
	});

	Cookie.remove('username');

	// 选择登陆方式登陆
	$('.btnTop').on('click','span',function(){
		$(this).parent().children().css('border-top','1px solid #ccc');
		$(this).css('border-top','2px solid red');	
	})
	// 账户登陆
	$('.accountLogin').click(function(){
		$('#username').prev().css('margin-left','0').text('用户名：');
		$('.loginTip').css('opacity',1).text('请输入账户或邮箱地址');
	})
	// 手机号登陆
	$('.phoneLogin').click(function(){
		$('#username').prev().css('margin-left','0').text('手机号：');
		$('.loginTip').css('opacity',1).text('请输入手机号');
	})
	// 卡号登陆
	$('.cartLogin').click(function(){
		$('#username').prev().css('margin-left','14px').text('卡号：');
		$('.loginTip').css('opacity',1).text('请输入卡号');
	})

	// 点击登陆
	$('.loginBtn').click(function(){
		var username = $('#username').val();
		var pw = $('#password').val();
		console.log(username,pw);
		$.ajax({
			type: 'post',
			async: true,
			url: '../api/login.php',
			data: `username="${username}"&password="${pw}"`,
			success: function(data){
				if(data === 'yes'){
					Cookie.set("username",username);
					location = '../index.html';
				}else{
					confirm('输入账号或密码有误！');
					$('.code').text(`${randomCode(4)}`);
				}
			}
		})
	})
})