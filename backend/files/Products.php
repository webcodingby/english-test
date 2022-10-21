<?php
    foreach($conn->query('SELECT * FROM products') as $row) {
        $products[] = $row;
    }
    return $products;
?>