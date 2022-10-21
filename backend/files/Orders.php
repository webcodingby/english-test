<?php
    foreach($conn->query('SELECT * FROM products') as $row) {
        $orders[] = $row;
    }
    return $orders;
?>