<?php 
	
	include 'connectDB.php';

	$goodId = isset($_GET['goodId']) ? $_GET['goodId'] : null;

	$sql = "select * from goodslist where goodId='$goodId'";

	$res = $conn->query($sql);

	$result = json_encode($res->fetch_all(MYSQLI_ASSOC),JSON_UNESCAPED_UNICODE);

	echo $result;

	$res->close();
	$conn->close();
 ?>