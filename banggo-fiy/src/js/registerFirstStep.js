$(function(){
	// 刷新页面
	$('.randomCode').text(function(){
		return randomCode(4);
	});
	$('.active').on('mouseenter','a',function(){

		$(this).css('background','#6e6e6e');
	});
	// 清空
	$('#phone').val('');
	$('#username').val('');
	// 点击重新生成验证码
	$('.updateCode').click(function(){
		$('.randomCode').text(function(){
			return randomCode(4);
		})
	})
	// 点击发送激活码按钮
	$('.sendCode').click(function(){
		$phoneInput = $('#phone');
		$uesenameInput = $('#username');
		if(isPoneAvailable($phoneInput) && isUsernameAvailable($uesenameInput)){
			if($('#checkCode').val() === $('.randomCode').text()){
				var cookieKey = Cookie.set('key',randomCode(4),{});
				$('.firstStep').css('display','none');
				$('.secondStep').css('display','block');	
			}else{
				if(confirm("输入验证码错误")){
					// 重新生成验证码
					$('.randomCode').text(function(){
						return randomCode(4);
					})
					// 清空并聚焦
					$('#checkCode').val('');
					$('#checkCode')[0].focus();
				}
			}
		}else{
			confirm('请正确输入表单信息');
		}
	})
	// 用户名验证
	$('#username').keyup(function(){
		if($(this).val().length>20||$(this).val().length<4){
			$('.errorUsername').text('用户名只能为4~20个字符,一个汉字为两个字符');
			$('.errorUsername').css({
								opacity: '1',
								color: 'red'
							});
		}else{
			if(!isUsernameAvailable($(this))){
				$('.errorUsername').text('以中、英文开头，与数字、下划线组成');
				$('.errorUsername').css({
								opacity: '1',
								color: 'red'
							});
			}else{
				var username = $(this).val();
				$.ajax({
					type: 'get',
					url: '../api/register_username.php',
					data: `username=${username}`,
					success: function(data){
						if(data==='yes'){
							$('.errorUsername').text('用户名可用');
							$('.errorUsername').css({
								opacity: '1',
								color: 'green'
							});
						}else{
							$('.errorUsername').text('用户名已注册');
							$('.errorUsername').css({
								opacity: '1',
								color: 'red'
							});
						}
					}
				})
			}
		}
	})
	$('#username').blur(function(){
		if($(this).val() === ''){
			$('.errorUsername').text('用户名不能为空');
			$('.errorUsername').css({
								opacity: '1',
								color: 'red'
							});
		}
	})
	// 手机号码验证
	$('#phone').keyup(function(){
		if($(this).val() === ''){
			$('.errorPhone').css('opacity','1');
		}else{
			// 手机号验证
			if(!isPoneAvailable($(this))){
				$('.errorPhone').text('手机号码不合法！');
				$('.errorPhone').css({
								opacity: '1',
								color: 'red'
							});
			}else{
				var phone = $(this).val();
				$.ajax({
					type: 'get',
					url: '../api/register_phone.php',
					data: `phone=${phone}`,
					success: function(data){
						if(data==='yes'){
							$('.errorPhone').text('手机号码可用');
							$('.errorPhone').css({
								opacity: '1',
								color: 'green'
							});
						}else{
							$('.errorPhone').text('手机号不能重复注册');
							$('.errorPhone').css({
								opacity: '1',
								color: 'red'
							});
						}
					}
				})
			}
		}
		
	})
	$('#phone').blur(function(){
		if($(this).val() === ''){
			$('.errorPhone').text('手机号码不能为空');
			$('.errorPhone').css('opacity','1');
		}
	})
	// 手机号码验证
	function isPoneAvailable($phoneInput) {
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test($phoneInput.val())) {
            return false;
        } else {
            return true;
        }
    }
    // 用户名验证
    function isUsernameAvailable($uesenameInput) {
        var myreg=/^[\u2E80-\u9FFF | \d | _ | a-z A-Z]{4,20}$/;
        if (!myreg.test($uesenameInput.val())) {
            return false;
        } else {
            return true;
        }
    }

})