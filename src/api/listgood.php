<?php
    include 'conent.php';
    $page = $_GET['ye'];
    $qty = $_GET['num'];
    $index=($page-1)*$qty;
    $sql = "SELECT * FROM listgood LIMIT $index,$qty";
    //执行语句：得到结果集
    $res=$conn->query($sql);
     //获取内容部分
    $data=$res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($data,JSON_UNESCAPED_UNICODE);
    $res->close();//关掉结果集
    $conn->close();//断开连接