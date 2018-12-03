$(function(){
        //接收列表页数据 转码
    var data = decodeURI(location.search);


    // 取cookie
    
     var username=Cookie.get('bb');
    console.log(username);
    if(username){
        console.log(123);
       $('.aa').html(`${username}`);
       $('.aa').next().next().html(` [退出]`) ;
    }else{
        $('.aa').click(function(){
            window.open('html/denglu.html');
        });
    }
    $('.cc').click(function(){
        Cookie.set('bb','',{'path':'/'});
        //刷新页面
         location.reload();
    });


    // 对得到的字符串进行切割
    var newdata = data.slice(1);
    var mdise = document.querySelector(".merchandise");
     $.ajax({
                type:'get',
                url:'../api/verify.php',
                data:{
                    id:newdata,
                },
                async:true,
                success:function(str){
                    var arr= JSON.parse(str);
                    var res = arr.map(function(item){
                        return `<div class="mIng">
                                    <img src="${item.path}" alt="" class="img" />
                                </div>
                                <div class="book_detail fl">
                                    <div class="book_name">
                                        <a href="/7000042.html" target="_blank">${item.book}</a>
                                    </div>
                                    <div class="money">
                                        <span class="price_sell">￥${item.pirce}</span>
                                        <del class="price_ding">￥${item.cost}</del>
                                    </div>
                                </div>`;
                    }).join("");
                    mdise.innerHTML = res;
                }
            });
    
        $('.gobtn').click(function(){
            window.open('../html/shopping.html?'+newdata);
        });
        $('.huibtn').click(function(){
            location.href='../chinabook.html';
        });






});