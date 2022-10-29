<?php
require_once '/private/Config/connection.php';

$result['success']=array('success'=>false, 'message'=>"");

if($_POST){
    $id=$_POST['computerid'];
    $sqlEliminar="DELETE FROM gce_caracteristicas WHERE gce_id=$id";

    if($connection->query($sqlEliminar)===true){
        $result['success']=true;
        $result['message']="deleted successfully!";
    }else{
        $result['success']=false;
        $result['message']="ERROR: dont deleted!";
    }
}else{
    $result['success']=false;
    $result['message']="dont deleted!";
}

echo json_encode($result);



