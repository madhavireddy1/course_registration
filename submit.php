<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Here, you can handle the form data, save it to a database, etc.

    echo "Form submitted successfully!";
    echo "Name: " . $name;
    echo "Email: " . $email;
}
?>