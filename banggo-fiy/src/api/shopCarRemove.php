<?php 
	// 连接数据库
	include 'connectDB.php';

	// 获取页面参数
	$goodId = isset($_GET['goodId']) ? $_GET['goodId'] : null;
	// 执行sql语句
	$sql = "delete from shoppingcar where goodId='$goodId'";
	// 查询数据库数据结果集
	$res = $conn->query($sql);
	// 删除数据库购物车中该商品信息
	echo $res ;

	$res->close();
	$conn->close();

 ?>