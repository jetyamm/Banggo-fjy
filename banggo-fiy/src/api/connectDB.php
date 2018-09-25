<?php 
	// 初始化数据库
	$username = 'root';
	$password = '';
	$servername = 'localhost';
	$dbname = 'banggo';

	// 连接数据库
	$conn = new mysqli($servername,$username,$password,$dbname);

	// 连接失败
	if($conn->connect_error){
		die('连接失败' .$conn->connect_error);
	}
	
	// 查询前设置编码，防止出现乱码 
	$conn->set_charset('utf8');

	// 连接成功
	// echo '连接成功';

 ?>