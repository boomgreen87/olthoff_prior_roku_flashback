<?php
// Required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Include database and object files
include_once '../../config/database.php';
include_once '../objects/movie.php';

// Instantiate database and movie object
$db       = Database::getInstance()->getConnection();

// Initialize object
$movie = new Movie($db);

// Query movies
if (isset($_GET['id'])) {
    $stmt = $movie->getMovieByID($_GET['id']);
} else if(isset($_GET['year'])){
    $stmt = $movie->getMovieByYear($_GET['year']);
}else {
    $stmt = $movie->getMovies();
}

$num = $stmt->rowCount();

// Check if more than 0 records are found
if ($num > 0) {

    // Movies array
    $results = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $single_movie = $row;
        $results[]    = $single_movie;
    }

    echo json_encode($results, JSON_PRETTY_PRINT);
} else {
    echo json_encode(
        array(
            "message" => "No movies found.",
        )
    );
}
