<?php
include('db-connect.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $language = $_POST['language'];
    $subject = $_POST['subject'];
    $inputcheck = 1;

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "E-mail Invalid <br>";
        $inputcheck = 0;
    }

    // Validate name
    if (!preg_match("/^[A-Za-z]{1,25}$/", $name)) {
        echo "Name Invalid <br>";
        $inputcheck = 0;
    }

    // Validate language
    if (!preg_match("/^[A-Za-z]{1,25}$/", $language)) {
        echo "Language Invalid <br>";
        $inputcheck = 0;
    }

    // Validate subject
    if (strlen($subject) > 255) {
        echo "Subject Invalid <br>";
        $inputcheck = 0;
    }

    // If all inputs are valid, proceed with database insertion
    if ($inputcheck == 1) {
        $stmt = $conn->prepare("INSERT INTO contactpage (email, name, language, subject) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $email, $name, $language, $subject);
        $stmt->execute();
        $stmt->close();
        $conn->close();
        echo "Data Inserted Successfully";
    } else {
        echo "Invalid data";
    }
}
?>
