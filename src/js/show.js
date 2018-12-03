$(function(){
      //二级导航 
    $('.vab').on('mouseover',function(){
        $(this).addClass('hover')
        $(this).find('.gunzi').css('display','block');
        $(this).find('.vb').css('display','block');
        $(this).find('em').css('color','red');
    });
     $('.vab').on('mouseout',function(){
        $(this).find('em').css('color','gray');
        $(this).removeClass('hover')
        $(this).find('.gunzi').css('display','none');
        $(this).find('.vb').css('display','none');
    });

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



    var ctLeft = document.querySelector('.ctLeft');
    //接收列表页数据 转码
    var data = decodeURI(location.search);
    // 对得到的字符串进行切割
    var newdata = data.slice(1);
    var lujing = '../api/show.php';
    var shul = `id=${newdata}&time=${new Date()}`;
    ajax('GET',lujing,shul,function(str){
        var arr = JSON.parse(str);
        var res = arr.map(function(item){
            return ` <div class="bookcover">
                        <div class="bookImg" id="popbigpic">
                            <img src="${item.path}" height="300" width="203" alt="" class="bimg" />
                            <div class="tejia">
                                <img src="../img/tejia.png" height="50" width="50" alt="" />
                            </div>
                            <span class="bigIcon"></span>
                        </div>
                        <div class="fenxiang">
                             <a href="javascript:;">分享</a>
                        </div>
                    </div>
                    <div class="bookcent">
                        <div class="padLeft">
                            <h2>${item.book}</h2>
                            <p class="recomand">比同名电影内容更丰富，刘震云小说从乡土文学向现代都市转型的“大跃进”</p>
                            <div class="author">
                                <span>作者：</span>
                                <a href="javascript:;" class="bokname">${item.name} 著</a>
                            </div>
                            <div class="publisher">
                                <span>出版社：</span>
                                <a href="javascript:;">${item.publishing}</a>
                                <span>出版时间：</span>
                                <i>2018-11-30</i>
                            </div>
                            <div class="otherInfor">
                                <span>开本：</span>
                                <em>32开</em>
                                <span>页数：</span>
                                <i>253</i>
                            </div>
                            <div class="startWrap">
                                <span>读者评分：</span>
                                <em>4.4分</em>
                                <i class="one"></i>
                                <i class="one"></i>
                                <i class="one"></i>
                                <i class="one"></i>
                                <i class="half"></i>
                                <a href="javascript:;">31条评论</a>
                            </div>
                            <div class="sort">
                                <span>本类榜单：</span>
                                <a href="javascript:;">小说销量榜</a>
                            </div>
                            <div class="priceWrap">
                                <span class="sellPriceTit">中 图 价:</span>
                                <span class="sellPrice">¥${item.pirce}</span>
                                <span class="discount">(${item.discount}折)</span>
                                <span class="priceTit">定价:</span>
                                <del class="price">¥${item.cost}</del>
                                <a href="javascript:;" >登录后可看到会员价</a>
                            </div>
                            <div class="oparateButton">
                                <a href="javascript:;" class="buyButton">加入购物车</a>
                                <a href="javascript:;" class="collectBtn">收藏</a>
                                <div class="freightPolicyWrap">
                                    <span class="freightTit">
                                        免运费政策
                                        <i class="icon"></i>
                                    </span>
                                    <div class="freightCon">
                                        <div class="reightPolicy">
                                            北京满49元免运费<br />
                                            全国满69元免运费（港澳台除外）
                                            <i class="icon"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="buyTip">
                                <span>温馨提示：</span>
                                5折以下图书主要为出版社尾货，大部分为全新，个别图书品相8-9成新、切口<br />
                                有划线标记、光盘等附件不全
                            </div>
                        </div>
                    </div>`
        });
        ctLeft.innerHTML = res;
        // 遮罩显示图片
        tuimg.innerHTML = arr.map(function(item){
            return ` <div class="xiaoBox">
                        <img src="${item.path}">
                        <span class="cha">×</span>
                    </div>`;
        });     
        //获取渲染节点  回调 
        var btn_fdj = $('.ctLeft').find('.bigIcon')[0];
        aa(btn_fdj);
        var btn_cha = $('.tuimg').find('.cha')[0];
        bb(btn_cha);
        var joinbtn = $('.ctLeft').find('.buyButton')[0];
        join(joinbtn);
    });
    
    // 遮罩点击显示隐藏
    var tuimg = document.querySelector('.tuimg');
    var zhezhao = document.querySelector('.zhezhao');
    function aa(aa){
        aa.onclick = function(){
            zhezhao.style.display='block';
            tuimg.style.display='block';
        }

    }
    function bb(bb){
        bb.onclick = function(){
            zhezhao.style.display='none';
            tuimg.style.display='none';
        }
    }




    // // 点击添加订单表
    function join(cc){
        cc.onclick =function(){
            $.ajax({
                type:'get',
                url:'../api/dingdanbiao.php',
                data:{
                    id:newdata,
                    num:1
                },
                async:true,
                success:function(data){
                    window.open('../html/verify.html?'+newdata);
                }
            });
        }
    }





     // 鼠标经过显示相应内容1
    var ho = document.querySelector(".hoOut");
    var hoLi = ho.getElementsByTagName('li');
    for(var i=0;i<hoLi.length;i++){
        hoLi[i].index = i;
        hoLi[i].onmouseover = function(){
            for(var i=0;i<hoLi.length;i++){
                hoLi[i].classList.remove('reveal');
            }
            this.classList.add('reveal');
        }
    }

    // 返回顶部
    $(document).ready(function() {
    //隐藏
    $(".fanhuitop").hide();
        $(window).scroll(function() {
            if ($(window).scrollTop() > 200) {
                $(".fanhuitop").fadeIn(1500);
            }
            else {
                $(".fanhuitop").fadeOut(1500);
            }
        });
        //回到顶部
        $(".fanhuitop").click(function() {
            $('body,html').animate({
                scrollTop: 0
            },
            500);
            return false;
        });
    });



    // 鼠标经过显示相应内容2
    var ctl = document.querySelector(".ctlL");
    var ctLi = ctl.getElementsByTagName('li');
    for(var i=0;i<ctLi.length;i++){
        ctLi[i].index = i;
        ctLi[i].onmouseover = function(){
            for(var i=0;i<ctLi.length;i++){
                ctLi[i].classList.remove('xsi');
            }
            this.classList.add('xsi');
        }
    }






    // 点击改变ul样式
    var isok = true;
    $('.cbtn').on('click',function(){
        if (isok) {
            $('.tab').animate({'left':'-920px'},1000);
        }else{
            $('.tab').animate({'left':'0'},1000);
        }
        isok = !isok;
    })
    






    // 吸顶菜单
    var fol = document.getElementById("fol");
    var xiding = document.querySelector('.xiding');
    var foT = xiding.offsetHeight;
    // 鼠标滚动事件
    window.onscroll = function(){
        var scY = window.scrollY;
        if (scY>=1000){
            xiding.classList.add('xi');
        }else{
            xiding.classList.remove('xi');
        }
    }



    //设置标识。防止出现跑马灯  
    var flag = true 
    $(".tiaoyue li").click(function(){  
        flag = false  
        $(this).addClass("current").siblings().removeClass("current")  
        var index = $(this).index()//获取当前点击元素的索引  
        var top = $(".banner").eq(index).offset().top;//获取每个banner到顶部的距离  
        $("html,body").stop(true).animate({"scrollTop":top},function(){flag = true})  
    })  

    // 滚轮滑动切换楼层  
    $(window).scroll(function(){  
        if(flag){    
            var winH = $(window).innerHeight()/2;  
            var scrollT = $(window).scrollTop()  
            var len = $(".banner").size()  
            for(var i=0;i<len;i++){  
                //banner对象加了i之后变成了js对象,所以用offsetTop  
                var bannerGap = $(".banner")[i].offsetTop - scrollT  
                if(bannerGap < winH){  
                    $(".floor li").eq(i).addClass("current").siblings().removeClass("current")  
                }  
            }  
        }  
    })  






}); 

  