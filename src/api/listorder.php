<?php
    include 'conent.php';
    $qty1=isset($_GET['set']) ? $_GET['set'] : '';
    $page=isset($_GET['ye']) ? $_GET['ye'] : '1';
    $qty=isset($_GET['qty']) ? $_GET['qty'] : '52';
    $way = isset($_GET['kg']) ? $_GET['kg'] : 'asc';
    $index=($page-1)*$qty;

    $sql="SELECT*FROM listgood ORDER BY $qty1 $way LIMIT $index,$qty";
    $res=$conn->query($sql);
    $data=$res->fetch_all(MYSQLI_ASSOC);
    ///var_dump($data);
    $goodlist=array(
        'datalist'=>$data,//查询到的数据
    );
    echo json_encode($goodlist,JSON_UNESCAPED_UNICODE);

 $res->close();//关掉结果集
 $conn->close();//断开连接





?>