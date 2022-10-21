<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "english";
    
    $conn= mysqli_connect($servername,$username,$password,$dbname);
    if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
    }
    $order = json_decode(file_get_contents('php://input'), true);
    $sql = "INSERT INTO orders_users (product_id, user_id) VALUES (".$order['product_id'].", ".$order['user_id'].")";
    if ($conn->query($sql) === TRUE) {
        echo json_encode($order);
    }
    
?>