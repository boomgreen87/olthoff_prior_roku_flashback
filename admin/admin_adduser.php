<?php
    require_once '../load.php';

    // Edit user info
    if (isset($_POST['account'])) {
        // Trim user input
        $id = trim($_POST['account']);
        $icon = trim($_POST['icon']);
        $displayName = trim($_POST['displayName']);
        $admin = trim($_POST['admin']);
        $userType = trim($_POST['usertype']);
        $vidAgeRating = trim($_POST['vidAgeRating']);
        $explicitMusic = trim($_POST['explicitMusic']);

        $result = addUser($id, $icon, $displayName, $admin, $userType, $vidAgeRating, $explicitMusic);

        // Send result of edit to JS
        echo json_encode($result);
    }