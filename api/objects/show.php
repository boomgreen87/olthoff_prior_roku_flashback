<?php
class Show
{

    private $conn;

    // Note: update table names, column names in here
    public $show_table               = 'tbl_shows';
    public $genre_table              = 'tbl_genre';
    public $show_linking_table       = 'tbl_shows_genre_rating';

    public function __construct($db) {
        $this->conn = $db;
    }

    public function getShows() {
        //TODO: Write the SQL query that returns all movies with its genre
        $query = '';

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }

    public function getShowByYear($year) {
        //TODO: Write the SQL query that returns all movies with the selected year
        $query = '';

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }

    public function getShowByID($id) {
        //TODO: Write the SQL query that returns a selected movie
        $query = '';

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }
}
