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

    // 存储cookie
    var username=Cookie.get('bb');
    // console.log(username);
    if(username){
        // console.log(123);
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


     // 搜索点击展开
     var sele = document.querySelector(".selectSwitch");
     var slectCon = document.querySelector(".slectCon");
     var isok5 = true;
     sele.onclick = function(){
        if (isok5){
            slectCon.classList.add('on');
        }else{
            slectCon.classList.remove('on');
        }
        isok5 = !isok5;
     }


    var out = document.querySelector(".out");
    var net = document.querySelector(".next");
    var curs = document.querySelector(".curs");
    var prev = document.querySelector(".prev");
    var ynum=1;
    var way = '../api/anniuye.php';
    var bata = `time=${new Date()}`;
    var annum;
    ajax('GET',way,bata,function(str){
        annum = str/52;
        for(var i=0;i<annum;i++){
            curs.innerHTML += `<li class="">
                                    <a href="javascript:;">${i+1}</a>
                                </li>`
            }
            curs.children[0].className='current';

    }) ;

    curs.onclick =function(ev){
        var ev = ev || window.event;
        if (ev.target.tagName.toLowerCase() == 'a'){
            ynum =ev.target.innerText;
            xuanran(ynum,52);
            for(var i=0;i<curs.children.length;i++){
                curs.children[i].className = "";
            }
            curs.children[ynum-1].className="current";
            anpanduan();
        }
    }


    function anpanduan(){
        if(ynum>1){
            prev.style.display="block";
        }else{
            prev.style.display="none";
        }
        if(ynum!=annum){
            net.style.display="block";
        }else{
             net.style.display="none";
        }
    }
   
    // 上一页
    prev.onclick=function(){
        ynum--;
        if (ynum<=1){
            ynum=1;
        }
        xuanran(ynum,52);
        for(var i=0;i<curs.children.length;i++){
                curs.children[i].className = "";
            }
        curs.children[ynum-1].className="current";
        anpanduan();
    }
    // 下一页
    net.onclick=function(){
        ynum++;
        if (ynum=annum){
            ynum=annum;
        }
        xuanran(ynum,52);
        for(var i=0;i<curs.children.length;i++){
                curs.children[i].className = "";
            }
        curs.children[ynum-1].className="current";
        anpanduan();
    }

    var inpval =document.querySelector('.inputxt');
    var gobtn = document.querySelector('.gobtn');
   

    gobtn.onclick = function(){
        var val = inpval.value.trim();
        if(val<1 || val>annum){
            alert("陈独秀同志，请不要腰间盘突出，不然你扁桃体会发炎的");
        }else{
            xuanran(val,52);
        }
    }


    function xuanran(page,qty){
        var url = '../api/listgood.php';
        var data = `ye=${page}&num=${qty}&time=${new Date()}`;
        ajax('GET',url,data,function(str){
            var arr = JSON.parse(str);
            var res = arr.map(function(item){
                return `<li class="listbook" data-id=${item.id}>
                            <div class="cover">
                                <a href="javascript:;">
                                    <img src="${item.path}" height="200" width="142" alt="" class="imgbook" />
                                </a>
                            </div>
                            <div class="infor">
                                <div class="priceWrap">
                                    <span class="sellPrice">￥${item.pirce}</span>
                                    <span class="discount">(${item.discount}折)</span>
                                    <del class="cost">￥${item.cost}</del>
                                </div>
                                <h2 class="name">${item.book}</h2>
                                <div class="otherInfor">
                                    <a href="javascript:;" class="author ">${item.name}</a>
                                    <i>&nbsp;/</i>
                                    <a href="javascript:;" class="publisher">${item.publishing}</a>
                                </div>
                                <div class="oparateButton">
                                    <a href="javascript:;" class="buyButton">加入购物车</a>
                                    <a href="javascript:;" class="collectBtn">收藏</a>
                                </div>
                            </div>
                        </li> `
            }).join("");
            out.innerHTML=res;
        });
    }
    out.innerHTML = xuanran(1,52);
    // 定价排序
    var dingjia = document.querySelector('.dingjia');
    var pirce;
    var trfa ;
    var isok = true;
    dingjia.onclick = function(){
        pirce = "cost";
        if(isok){
            trfa = 'asc';
            var url = '../api/listorder.php';
            pairan(trfa,url);
        }else{
            console.log(2);
            trfa = 'desc';
            var url =  '../api/listorder.php';
            pairan(trfa,url);
        }
        isok = !isok;
    }


    // // 折扣排序
    var zhekou = document.querySelector('.zhekou');
    var isok2 = true;

    zhekou.onclick = function(){
        pirce = "discount";
        if (isok2){
            trfa = 'asc';
            var url = '../api/listorder.php';
            pairan(trfa,url);
        }else{
            trfa = 'desc';
            var url =  '../api/listorder.php';
            pairan(trfa,url);
        }
        isok2 = !isok2;
    }

    // // 售价排序
    var shoujia = document.querySelector('.shoujia');
    var isok3 = true;
    shoujia.onclick = function(){
        pirce = "pirce";
            if (isok3){
                trfa = 'asc';
                var url = '../api/listorder.php';
                pairan(trfa,url);
            }else{
                trfa = 'desc';
                var url =  '../api/listorder.php';
                pairan(trfa,url);
            }
            isok3 = !isok3;
        }

    function pairan(a,url){
        var data =`ye=1&qty=52&set=${pirce}&kg=${a}&time=${new Date()}`;
            ajax('GET',url,data,function(str){
                var brr = JSON.parse(str);
                var arr= brr.datalist;
                var res = arr.map(function(item){
                return `<li class="listbook" data-id=${item.id}>
                            <div class="cover">
                                <a href="javascript:;">
                                    <img src="${item.path}" height="200" width="142" alt="" class="imgbook" />
                                </a>
                            </div>
                            <div class="infor">
                                <div class="priceWrap">
                                    <span class="sellPrice">￥${item.pirce}</span>
                                    <span class="discount">(${item.discount}折)</span>
                                    <del class="cost">￥${item.cost}</del>
                                </div>
                                <h2 class="name">${item.book}</h2>
                                <div class="otherInfor">
                                    <a href="javascript:;" class="author ">${item.name}</a>
                                    <i>&nbsp;/</i>
                                    <a href="javascript:;" class="publisher">${item.publishing}</a>
                                </div>
                                <div class="oparateButton">
                                    <a href="javascript:;" class="buyButton">加入购物车</a>
                                    <a href="javascript:;" class="collectBtn">收藏</a>
                                </div>
                            </div>
                        </li> `
            }).join("");
            out.innerHTML=res;
            });
    }


    // listRight部分---- 吸底菜单
    var listRightInner = document.querySelector(".listRightInner");
        var hzTop = listRightInner.offsetHeight;
        // 鼠标滚动事件
        window.onscroll = function(){
            var scY = window.scrollY;
            if (scY>=hzTop){
                listRightInner.classList.add('absoluted');
                    if(scY>4837){
                         listRightInner.style.top ='1700px';
                     }else{
                        listRightInner.style.top = (scY-hzTop)*1+'px';
                     }
            }else{
                listRightInner.classList.remove('absoluted');
                listRightInner.style.top = '1470px';
            }
        }


        // 点击跳转详情页
        $('.out').on('click','li',function(){
            var id = $(this).attr('data-id');
            // console.log(id);
            window.open('../html/show.html?'+id);
        })

        

});