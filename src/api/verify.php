<?php
    include 'conent.php';
    $id=isset($_GET['id']) ? $_GET['id'] : '1';
    $sql = "SELECT * FROM orderadd WHERE id=$id";
    //执行语句：得到结果集
    $res=$conn->query($sql);
     //获取内容部分
    $data=$res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($data,JSON_UNESCAPED_UNICODE);
    $res->close();//关掉结果集
    $conn->close();//断开连接
    
    
    ?>