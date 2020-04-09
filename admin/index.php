<?php
    require_once '../load.php';
    
    if (isset($_GET['media'])) {
        $tbl = "tbl_" . trim($_GET["media"]);
    }
    
    $results = getAll($tbl);

    echo json_encode($results);
