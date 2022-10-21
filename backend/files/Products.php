<?php
    include_once 'backend/config/db.php';
    foreach($conn->query('SELECT * FROM products') as $row) {
        $products[] = $row;
    }
    return $products;
?>