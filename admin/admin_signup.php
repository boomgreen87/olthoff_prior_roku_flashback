<?php 
    require_once '../load.php';

    if(isset($_POST['email'])){
        $email = trim($_POST['email']);
        $fname = trim($_POST['firstname']);
        $lname = trim($_POST['lastname']);
        $country = trim($_POST['country']);
        $username = trim($_POST['username']);
        $password = trim($_POST['password']);

        $message = createUser($email, $fname, $lname, $country, $username, $password);

        echo json_encode($message);
    }