CREATE TABLE IF NOT EXISTS `tabla29` (
    `codigo` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre` VARCHAR(200) NOT NULL,
    `marca` VARCHAR(200) NOT NULL,
    `precio` DOUBLE NOT NULL,
    `cantidad` INT UNSIGNED NOT NULL DEFAULT 0,
    `fecha_creacion` DATETIME
) ENGINE=INNODB;