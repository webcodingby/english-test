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
    $login = $out['login'];
    $user = array();
    foreach($conn->query('SELECT * FROM users') as $row) {
         if($row['login'] == $login){
            $user = array('id'=> $row['id']);
         }
    }
    echo json_encode($user);
?>