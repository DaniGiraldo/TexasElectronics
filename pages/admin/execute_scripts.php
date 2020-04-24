<?php
// exec_script($_REQUEST);

// function exec_script($type){
    $script = 'create_database.sql';
    // if(isset($_REQUEST) && $_REQUEST == 'database'){
    //     var_dump($_REQUEST);

    //     $script = 'create_database.sql';
    // }if(isset($_REQUEST) && $_REQUEST == 'table'){
    //     $script = 'create_table.sql';
    // }else{
    //     $script = '';
    //     $result = "El script no fue encontrado";
    // }
    
    $command = "mysql -uroot -p12345678 -h localhost < scripts/". $script;
    
    $result = shell_exec($command);
    print_r($result);
    if(isset($result)){
        $result = 'ejecutado';
    }else{
        $result = 'no ejecutado';
    }

//     return $result;
// }

?>