<?php 
	// 连接数据库
	include 'connectDB.php';

	// 获取页面参数
	$goodId = isset($_GET['goodId']) ? $_GET['goodId'] : null;
	$qty = isset($_GET['qty']) ? $_GET['qty'] : null;
	$title = isset($_GET['title']) ? $_GET['title'] : null;
	$price = isset($_GET['price']) ? $_GET['price'] : null;
	$url = isset($_GET['url']) ? $_GET['url'] : null;
	$size = isset($_GET['size']) ? $_GET['size'] : null;
	$color = isset($_GET['color']) ? $_GET['color'] : null;
	// 执行sql语句
	$sql = "select * from shoppingCar where goodId='$goodId'";
	// 查询数据库数据结果集
	$res = $conn->query($sql);
	// 验证数据库购物车中是否存在同样商品
	if($res->num_rows>0){
		$sqlUpdate = "update shoppingCar set qty=qty+'$qty'";
		$resUpdate = $conn->query($sqlUpdate);
		echo 'update';

		$resUpdate->close();
	}else{
		$sqlInsert = "insert into shoppingCar (goodId,url,title,price,qty,size,color) values('$goodId','$url','$title','$price','$qty','$size','$color')";
		$resInsert = $conn->query($sqlInsert);
		echo 'add';

		$resInsert->close();
	}

	$res->close();
	
	$conn->close();
 ?>