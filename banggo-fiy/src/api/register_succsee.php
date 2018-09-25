<?php 
	include 'connectDB.php';

	// 获取页面参数
	$username = isset($_POST['username']) ? $_POST['username'] : null;
	$phone = isset($_POST['phone']) ? $_POST['phone'] : null;
	$password = isset($_POST['password']) ? $_POST['password'] : null;
	$invitPhone = isset($_POST['invitPhone']) ? $_POST['invitPhone'] : null;
	// 执行sql语句
	$sql = "insert into user_register (username,phone,password,invitPhone) values('$username','$phone','$password','$invitPhone')";
	// 查询数据库数据结果集
	$res = $conn->query($sql);
	// 验证数据库中加入用户资料
	echo 'yes';

 ?>