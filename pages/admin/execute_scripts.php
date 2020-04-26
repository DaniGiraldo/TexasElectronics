<?php
require_once '../../db_connection/db_connection.php';

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
}else{
    $script = "El script no fue encontrado";
}

$_query = new db_connection();

$result = $_query->query_result($script);

echo $result;

?>