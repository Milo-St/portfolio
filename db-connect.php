<?php
        // you probably wouldn't be able to guess, but this code creates a connection from this pc to the database

        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbName = "portfolio";

         // Create connection
        $conn = new mysqli($servername, $username, $password, $dbName);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
    ?>