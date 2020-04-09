<?php
    require_once '../load.php';

    // Edit user permissions
    if (isset($_POST['id'])) {
        // Trim user input
        $id = trim($_POST['id']);
        $admin = trim($_POST['admin']);
        $userType = trim($_POST['userType']);
        $vidRating = trim($_POST['vidRating']);
        $explicitMusic = trim($_POST['explicitMusic']);
        
        $result = changePermissions($id, $admin, $userType, $vidRating, $explicitMusic);

        // Send result of edit to JS
        echo json_encode($result);
    }