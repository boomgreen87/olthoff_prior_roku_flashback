<?php
    require_once '../load.php';

    // Get Roku account
    if (isset($_GET['account'])) {
        $account = getAccount($_GET['account']);

        // Send this (all of the users or an error message) back to JS
        echo $account;
    }