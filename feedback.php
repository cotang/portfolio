<?php
$recepient = "kbogdanov1@gmail.com";
$sitename = "Cobalt-studio.com";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$subject = trim($_POST["subject"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nE-mail: $email \nSubject: $subject \nТекст: $text";

$headers = 'From: \"$name\"'. '<'.$email.'>' . "\r\n" .
'Reply-To: '. $email . "\r\n" .
'X-Mailer: PHP/' . phpversion();

$pagetitle = "Новое сообщение с сайта \"$sitename\" на тему \"$subject\"";

mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>