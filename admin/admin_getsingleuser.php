<?php
    require_once '../load.php';

    // Get Roku user
    if (isset($_GET['user'])) {
        $user = getSingleUser($_GET['user']);

        // Send this (all of the users or an error message) back to JS
        echo json_encode($user);
    }