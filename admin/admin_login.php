<?php 
    require_once '../load.php';

    if(isset($_POST['username'])){
        // Trim user
        $username = trim($_POST['username']);
        $password = trim($_POST['password']);

        if(!empty($username) && !empty($password)){
            //Log account in
            $message = login($username, $password);
        }else{
            return false;
        }

        echo json_encode($message);
    }