<?php
    require_once '../load.php';

    // Delete selected user
    if (isset($_GET['user'])) {
        $result = deleteUser($_GET['user']);

        // Send result back to JS
        echo $result;
    }