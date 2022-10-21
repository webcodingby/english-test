<?php
    foreach($conn->query('SELECT * FROM coins') as $row) {
        $coins[] = $row;
    }
    return $coins;
?>