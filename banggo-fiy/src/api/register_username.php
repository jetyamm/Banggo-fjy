<?php 
	// 连接数据库
	include 'connectDB.php';

	// 获取页面参数
	$userName = isset($_GET['username']) ? $_GET['username'] : null;
	// 执行sql语句
	$sql = "select * from user_register where username='$userName'";
	// 查询数据库数据结果集
	$res = $conn->query($sql);
	// 验证数据库中是否存在用户名
	if($res->num_rows>0){
		echo 'no';
	}else{
		echo 'yes';
	}

	// $res->close();
	// $conn->close();
 ?>