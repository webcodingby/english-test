<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "english";
    
    $conn= mysqli_connect($servername,$username,$password,$dbname);
    if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
    }
    $out = json_decode(file_get_contents('php://input'), true);
    $id = $out['id'];
    $user = array();
    foreach($conn->query('SELECT * FROM orders_users') as $row) {
          if($row['user_id'] == $id){
             $user[] = array('product_id'=> $row['product_id']);
          }
    }
    echo json_encode($user);
?>