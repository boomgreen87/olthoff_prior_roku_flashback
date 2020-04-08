<?php
    require_once '../load.php';

    // Edit account info
    if (isset($_POST['id'])) {
        // Trim user input
        $id = trim($_POST['id']);
        $email = trim($_POST['email']);
        $fname = trim($_POST['firstname']);
        $lname = trim($_POST['lastname']);
        $country = trim($_POST['country']);
        $password = trim($_POST['password']);

        $result = editAccount($id, $email, $fname, $lname, $country, $password);

        // Send result of edit to JS
        echo json_encode($result);
    }