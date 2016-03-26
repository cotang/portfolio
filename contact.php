<?php
    $to      = 'kbogdanov1@gmail.com';
    $email   = $_POST['email'];

    $name  = $_POST['name'];
    $message = $_POST['message'];

    $headers = 'From: http://YourUrl'. '<'.$email.'>' . "\r\n" .
        'Reply-To: '. $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
  
?>