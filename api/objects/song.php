<?php
class Song
{

    private $conn;

    // Note: update table names, column names in here
    public $song_table               = 'tbl_songs';
    public $genre_table              = 'tbl_genre';
    public $song_linking_table       = 'tbl_songs_genre_rating';

    public function __construct($db) {
        $this->conn = $db;
    }

    public function getSongs() {
        //TODO: Write the SQL query that returns all movies with its genre
        $query = '';

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }

    public function getSongByYear($year) {
        //TODO: Write the SQL query that returns all movies with the selected year
        $query = '';

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }

    public function getSongByID($id) {
        //TODO: Write the SQL query that returns a selected movie
        $query = '';

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }
}
