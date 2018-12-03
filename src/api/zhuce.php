<?php
    include 'conent.php';
    $page=isset($_POST['name']) ? $_POST['name'] : '1';
    $qty=isset($_POST['mima']) ? $_POST['mima'] : '5';
    // var_dump($page);
    $sql = "INSERT INTO chinabooks(NUMber,code) VALUES ('$page','$qty')";
    $res=$conn->query($sql);
    if($res){
        echo 'yes';
    }else{
        echo 'no';
    }
    $res->close();
    $conn->close();
?>