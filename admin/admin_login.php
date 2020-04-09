<?php 
    require_once '../load.php';

    if(isset($_POST['username'])){
        // Trim user
        $username = trim($_POST['username']);
        $password = trim($_POST['password']);

        $message = login($username, $password);

        echo json_encode($message);
    }