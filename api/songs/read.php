<?php
// Required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Include database and object files
include_once '../../config/database.php';
include_once '../objects/song.php';

// Instantiate database and song object
$db       = Database::getInstance()->getConnection();

// Initialize object
$song = new Song($db);

// Query songs
if (isset($_GET['id'])) {
    $stmt = $song->getSongByID($_GET['id']);
} else if(isset($_GET['year'])){
    $stmt = $song->getSongByYear($_GET['year']);
}else {
    $stmt = $song->getSongs();
}

$num = $stmt->rowCount();

// Check if more than 0 records are found
if ($num > 0) {

    // Songs array
    $results = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $single_song = $row;
        $results[]    = $single_song;
    }

    echo json_encode($results, JSON_PRETTY_PRINT);
} else {
    echo json_encode(
        array(
            "message" => "No songs found.",
        )
    );
}
