<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$token = "6151514804:AAGk6pAtx-zsjN1QRXMQMQz9YMZ-MVBH1rQ";
$chat_id = "-860516376";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram && $sendToTelegram2) {
  header('Location: thanks.html');
} else {
  echo "Error";
}
?>