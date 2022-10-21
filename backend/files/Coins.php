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
    $coins = 0;
    foreach($conn->query('SELECT * FROM coins') as $row) {
        if($row['user_id'] == $id){
            $coins += $row['price'];
        }
    }
    $coins = array('coins'=> $coins);
    echo json_encode($coins);
?>