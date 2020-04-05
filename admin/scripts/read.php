<?php

// Gets all information from a povided table
function getAll($tbl)
{
    $pdo = Database::getInstance()->getConnection();
    $queryAll = 'SELECT * FROM ' . $tbl;
    $results = $pdo->query($queryAll);

    if ($results) {
        return $results->fetchAll(PDO::FETCH_ASSOC);
    } else {
        return 'There was a problem accessing this info';
    }
}