<?php
require_once('/data/admin_inventory.php');

$_data = new data_admin_inventory();
$action = $_REQUEST['function'];

switch ($action){
    case 'insert': {
        $result = $_data->insert($_REQUEST);
        echo $result;
        break;
    }
    
    case 'search': {
        $html   = '';
        $result = $_data->search($_REQUEST);
        
        if(is_string($result) && $result == 'error'){
            $html .= '<script type="text/javascript">
                alert("El producto no existe");
            </script>'; 
        }else{
            $html .= '<table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Actualizar</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>';
                
                $html .= '<tbody>
                    <tr>
                        <td id="td_code">'.$result['code'].'</td>
                        <td id="td_name">'.$result['name'].'</td>
                        <td id="td_brand">'.$result['brand'].'</td>
                        <td id="td_price">'.$result['price'].'</td>
                        <td id="td_quantity">'.$result['quantity'].'</td>
                        <td><img id="update" src="assets/images/icons/update.png" class="icon"></td>
                        <td><img id="delete" src="assets/images/icons/delete.png" class="icon"></td>
                    </tr>
                </tbody>';

            $html .= '</table>
            <script type="text/javascript">
                inventory_events();
            </script>';
        }

        echo $html;

        break;
    }

    case 'update': {
        $result = $_data->update($_REQUEST);
        echo $result;
        break;
    }

    case 'delete': {
        $result = $_data->delete($_REQUEST);
        echo $result;
        break;
    }
}
?>