<?php
     include 'conent.php';
     //可以加在接受数据处
    function trimall($str){ // 清除空格函数
        $qian=array(" ","　","\t","\n","\r");
        return str_replace($qian, '', $str);   
    }


    //接收数据
    $way = isset($_GET['way']) ? $_GET['way'] : 'shop';

    $id = isset($_GET['id']) ? $_GET['id'] : 1;

    $num = isset($_GET['num']) ? $_GET['num'] : 1;


    if($way=='shop'){
        $sql='SELECT * FROM `orderadd`';//写查询语句

        $res=$conn->query($sql);//执行语句：得到结果集
    
        $data=$res->fetch_all(MYSQLI_ASSOC);//获取内容部分

        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    
        $res->close();//关掉结果集

    }   

    if($way=='num'){
        $sql="update `orderadd` set num=$num WHERE id=$id";//写查询语句
        $res=$conn->query($sql);//执行语句：得到结果集
    
        //用于检测是否修改成功
        if($res){
            //插入成功返回yes否则返回no
            echo 'yes';
        }
    }

    if($way=='del'){
        $sql="DELETE FROM `orderadd` WHERE id=$id";//删除该行

        $res=$conn->query($sql);//执行语句：得到结果集
    
        //用于检测是否删除成功
        if($res){
            //插入成功返回yes否则返回no
            echo 'yes';
        }
    }
    
    if($way=='sum'){
        $sql="select num from orderadd";//查询所有的num

        $res=$conn->query($sql);//执行语句：得到结果集
        $data = $res->fetch_all(MYSQLI_ASSOC);

        $sum = 0;
        for($i = 0; $i<count($data); $i++) {
            $sum += $data[$i]['num'];
        }
        echo $sum;
    }
    
    
    
    //关闭数据库
    $conn->close();
?>

