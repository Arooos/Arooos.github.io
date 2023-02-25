<?php
$surname = $_POST['surname'];
$name = $_POST['name'];
$patronymic = $_POST['patronymic'];
$select = $_POST['select'];
$phone = $_POST['phone'];
$token = "6151514804:AAGk6pAtx-zsjN1QRXMQMQz9YMZ-MVBH1rQ";
$chat_id = "-860516376";
$arr = array(
	'Фамилия: ' => $surname,
	'Имя: ' => $name,
	'Отчество: ' => $patronymic,
	'Класс: ' => $select,
	'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
	$txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>