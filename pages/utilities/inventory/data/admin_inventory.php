<?php
require_once('../../../db_connection/db_connection.php');

class data_admin_inventory{

    function insert($prm = array()){
       
        $_query = new db_connection();

        $query = "insert into `bdunad29`.`tabla29`
        (
            codigo, 
            nombre, 
            marca, 
            precio, 
            cantidad,
            fecha_creacion
        )
        values
        (
            '".$prm['code']."',
            '".$prm['name']."',
            '".$prm['brand']."',
            '".$prm['price']."',
            '".$prm['quantity']."',
            now()
        );";

        $result = $_query->query_result($query);

        return $result;
    }

    function search($prm = array()){
        $_query = new db_connection();

        $query = "select * from `bdunad29`.`tabla29` where codigo = '". $prm['code'] ."';";
        
        $result = $_query->query_result($query);

        return $result;
    }

    function update($prm = array()){
        print_r($prm);
        $_query = new db_connection();

        $query = "update `bdunad29`.`tabla29` set
        nombre = '".$prm['name']."',
        marca = '".$prm['brand']."',
        precio = '".$prm['price']."',
        cantidad = '".$prm['quantity']."',
        where code = '" .$prm['code'] ."';";
        echo $query;
        exit();
        $result = $_query->query_result($query);

        return $result;
    }

    function delete($prm = array()){
        $_query = new db_connection();

        $query = "delete from `bdunad29`.`tabla29` where codigo = '" .$prm['code']. "';";

        $result = $_query->query_result($query);

        return $result;
    }
}
?>