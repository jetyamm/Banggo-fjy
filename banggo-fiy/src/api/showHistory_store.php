<?php 
	include 'connectDB.php';

	$goodId = isset($_GET['goodId']) ? $_GET['goodId'] : null;
	$title = isset($_GET['title']) ? $_GET['title'] : null;
	$currentPrice = isset($_GET['currentPrice']) ? $_GET['currentPrice'] : null;
	$url = isset($_GET['url']) ? $_GET['url'] : null;
	$originPrice = isset($_GET['originPrice']) ? $_GET['originPrice'] : null;

	$sql = "select * from showhistory where goodId='$goodId'";

	$res = $conn->query($sql);
	var_dump($price);
	if($res->num_rows > 0){
		echo 'yes';
	}else{
		$sqlInsert = "insert into showhistory(goodId,url,title,currentPrice,originPrice) values('$goodId','$url','$title','$currentPrice','$originPrice')";
		$resInsert = $conn->query($sqlInsert);
		echo $resInsert;
	}

	$res->close();
	$conn->close();
 ?>