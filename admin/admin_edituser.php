<?php
    require_once '../load.php';

    // Edit user info
    if (isset($_POST['id'])) {
        // Trim user input
        $id = trim($_POST['id']);
        $icon = trim($_POST['icon']);
        $displayName = trim($_POST['displayName']);
        
        $result = editUser($id, $icon, $displayName);

        // Send result of edit to JS
        echo json_encode($result);
    }