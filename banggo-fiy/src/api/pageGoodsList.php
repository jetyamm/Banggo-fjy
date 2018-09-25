<?php 
	include 'connectDB.php';

	$page = isset($_GET['page']) ? $_GET['page'] : 1;

	$sql = "select * from goodslist where page='$page'";
	$res = $conn->query($sql);
	$row = $res->fetch_all(MYSQLI_ASSOC);

	echo json_encode($row,JSON_UNESCAPED_UNICODE);

	$res->close();
	$conn->close();
 ?>