<?php
require_once '../../db_connection/db_connection.php';

$_query = new db_connection();

if($_REQUEST['type'] == 'database'){
    $script = 'CREATE DATABASE IF NOT EXISTS `bdunad29`;';

}else if($_REQUEST['type'] == 'table'){
    $script = 'CREATE TABLE IF NOT EXISTS `bdunad29`.`tabla29` (
        `codigo` INT UNSIGNED NOT NULL PRIMARY KEY,
        `nombre` VARCHAR(200) NOT NULL,
        `marca` VARCHAR(200) NOT NULL,
        `precio` DOUBLE NOT NULL,
        `cantidad` INT UNSIGNED NOT NULL DEFAULT 0,
        `fecha_creacion` DATETIME
    ) ENGINE=INNODB;
    ADD UNIQUE INDEX `codigo_uq` (`codigo`);';

}else if($_REQUEST['type'] == 'backup'){
    date_default_timezone_set("America/Bogota");

    $mysqldump='"C:\wamp\bin\mysql\mysql5.5.24\bin\mysqldump.exe"';
    $result = shell_exec("$mysqldump --no-defaults -u root -p12345678 bdunad29 > backups/".date("YmdHis")."_bk_bdunad29.sql");

}else if($_REQUEST['type'] == 'report'){

}else{
    $script = "El script no fue encontrado";
}

$result = $_query->query_result($script);

echo $result;

?>