<?php
require_once 'configs.php';

if ($_POST['ip'] != '') 
{
	$date = date('Y-m-d H:i:s'); # Date to write in the end of session at the file
	$ip = $_POST['ip'];		# Your target IP Address
	$end_of_file = "\n\n[End - $date];"; # This will register the end of file
	
	file_put_contents($path.'file_'.$ip.'.log', $end_of_file, FILE_APPEND);
	
}
