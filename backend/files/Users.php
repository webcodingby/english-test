<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "english";
     
    $conn= mysqli_connect($servername,$username,$password,$dbname);
    if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
    }
    foreach($conn->query('SELECT * FROM users') as $row) {
        $users[] = $row;
    }
    return $users;
?>