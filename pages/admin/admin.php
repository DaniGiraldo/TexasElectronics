<?php

// if($_REQUEST['script'] == 'database'){
//     $script = 'create_database.sql';
// }if($_REQUEST['script'] == 'table'){
//     $script = 'create_table.sql';
// }else{
//     echo "El script no fue encontrado";
// }

$command = "mysql -uroot -p12345678 -h localhost -e 'CREATE DATABASE IF NOT EXISTS `bdunad29`'";

$result = shell_exec($command);
print_r($result);

// if($result == true){
//     echo 'Script ejecutado correctamente';
// }else{
//     echo 'Script incorrecto';
// }

?>