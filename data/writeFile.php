<?php
	if(!empty($_POST['name']) && !empty($_POST['cont'])){
		$data = $_POST['name'];
		$cont = $_POST['cont'];

		$fname = $data;

		$file = fopen('../upload/'.$fname, 'w') or die("Unable to open file!");//creates new file
		// $file = fopen('D:/'.$fname, 'w') or die("Unable to open file!");//creates new file
		fwrite($file, $cont);
		fclose($file);
	}
?>