<?php
    include 'conent.php';
    $page=isset($_GET['name']) ? $_GET['name'] : '13888888888';
    $sql="select * from chinabooks where number='$page'";
    //执行语句
    $res=$conn->query($sql);//结果集
    //var_dump($res);
    if($res->num_rows>0){//num_rows存记录的条数，所有超过0就意味着存在
        //数据库存储该用户名
        echo 0;
    }else{
        echo 1;
    }
    //关闭结果集和数据库
    $res->close();
    $conn->close();