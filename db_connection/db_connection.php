<?php
class db_connection{

    function __construct() {
        $this->host = 'localhost';
        $this->user = 'root';
        $this->pwd  = '12345678';
    }

    function on_connection(){
        $mysqli = new mysqli($this->host, $this->user, $this->pwd);
        
        if ($mysqli->connect_errno) {
            echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
        }

        return $mysqli;
    }

    function query_result($query = ''){
        $error = false;

        $conex = $this->on_connection();
        
        if($error == false){
            $result = mysqli_query($conex, $query);
        }

        if($result->num_rows == 1){
            while ($row = $result->fetch_row()) {
                $ar_result['success'] = true;
                $ar_result['code'] = $row[0];
                $ar_result['name'] = $row[1];
                $ar_result['brand'] = $row[2];
                $ar_result['price'] = $row[3];
                $ar_result['quantity'] = $row[4];
            }
        }else{
            $ar_result = 'success';
        }
        $conex->close();
        return $ar_result;
    }

    function query_results($prm = array()){

    }
}
?>