<?php
    include 'conent.php';
    $page=isset($_POST['name']) ? $_POST['name'] : '1';
    $qty=isset($_POST['num']) ? $_POST['num'] : '5';
    // echo $qty;
    $sql="SELECT * FROM chinabooks WHERE number='$page' and code='$qty'";
    $res=$conn->query($sql);
    if($res->num_rows>0){
        echo 'yes';
    }else{
        echo 'no';
    }
    $res->close();
    $conn->close();
?>