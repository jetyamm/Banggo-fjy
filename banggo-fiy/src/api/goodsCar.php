<?php 
	// 连接数据库
	include 'connectDB.php';

	// 执行sql语句
	$sql = "select * from shoppingCar";
	// 查询数据库数据结果集
	$res = $conn->query($sql);
	// 查询所有结果并输出
	if($res->num_rows>0){
		$row = $res->fetch_all(MYSQLI_ASSOC);
		echo json_encode($row,JSON_UNESCAPED_UNICODE);
	}else{
		echo 'yes';
	}

	$res->close();
	$conn->close();
 ?>