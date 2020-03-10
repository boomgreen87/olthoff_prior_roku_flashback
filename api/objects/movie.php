<?php
class Movie
{

    private $conn;

    // Note: update table names, column names in here
    public $movie_table               = 'tbl_movies';
    public $genre_table               = 'tbl_genre';
    public $movie_linking_table       = 'tbl_movies_genre_rating';

    public function __construct($db) {
        $this->conn = $db;
    }

    public function getMovies() {
        //TODO: Write the SQL query that returns all movies with its genre
        $query = '';

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }

    public function getMovieByYear($year) {
        //TODO: Write the SQL query that returns all movies with the selected year
        $query = '';

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }

    public function getMovieByID($id) {
        //TODO: Write the SQL query that returns a selected movie
        $query = '';

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }
}
