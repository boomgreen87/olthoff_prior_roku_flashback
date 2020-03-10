<?php
// Required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Include database and object files
include_once '../../config/database.php';
include_once '../objects/show.php';

// Instantiate database and show object
$db       = Database::getInstance()->getConnection();

// Initialize object
$show = new Show($db);

// Query shows
if (isset($_GET['id'])) {
    $stmt = $show->getShowByID($_GET['id']);
} else if(isset($_GET['year'])){
    $stmt = $show->getShowByYear($_GET['year']);
}else {
    $stmt = $show->getShows();
}

$num = $stmt->rowCount();

// Check if more than 0 records are found
if ($num > 0) {

    // Shows array
    $results = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $single_show = $row;
        $results[]    = $single_show;
    }

    echo json_encode($results, JSON_PRETTY_PRINT);
} else {
    echo json_encode(
        array(
            "message" => "No shows found.",
        )
    );
}
