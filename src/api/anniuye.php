<?php
    include 'conent.php';
    $sql="SELECT * FROM listgood";
    $res=$conn->query($sql);
    $row=$res->num_rows;
     //获取内容部分
    // $data=$res->fetch_all(MYSQLI_ASSOC);
    echo $row;