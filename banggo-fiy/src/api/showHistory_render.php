<?php 
	include 'connectDB.php';

	$sql = "select * from showhistory";

	$res = $conn->query($sql);

	$row = $res->fetch_all(MYSQLI_ASSOC);

	echo json_encode($row,JSON_UNESCAPED_UNICODE);

	$res->close();
	$conn->close();
 ?>