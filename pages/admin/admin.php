<?php

function exec_script($type = ''){
    
    if(isset($type) && $type == 'database'){
        $script = 'create_database.sql';
    }if(isset($type) && $type == 'table'){
        $script = 'create_table.sql';
    }else{
        $result = "El script no fue encontrado";
    }

    $command = "mysql -uroot -p12345678 -h localhost --force < scripts/". $script;

    $result = shell_exec($command);
    
    if(isset($result)){
        $result = 'ejecutado';
    }else{
        $result = 'no ejecutado';
    }

    return $result;
}


?>
<input type="hidden" id="exec" value="" onchange="exec();">
<!-- <label id="result_exec"></label> -->
<script>
    function exec(){
        var type = $('#exec').attr('value');
        alert("<?= exec_script('database'); ?>");
    }
</script>