<?php
	if(!empty($_POST['data'])){
		$data = $_POST['data'];
		$fname = $data;
		$file = fopen('../upload/'.$fname, 'w') or die("Unable to open file!");//creates new file
		// $file = fopen('D:/'.$fname, 'w') or die("Unable to open file!");//creates new file
		fclose($file);
	}
?>