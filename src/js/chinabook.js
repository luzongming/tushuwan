$(function(){
    // 顶部高度改变，隐藏大图
    setTimeout(function(){
        $('#roof').animate({'height':0},2000,function(){
            $('#roof').css('display','none');
        });
    },2000);

    var username=Cookie.get('bb');
    if(username){
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



    // 左侧展开show(),hide()显示隐藏
    $(".leftsmallBanner").hover(function () {
            $(".leftsmallBanner .bannerdd").show();
            $(".leftsmallBanner .bannerdd").animate({ width: "800px" });
        }, function () {
            $(".leftsmallBanner .bannerdd").animate({ width: "0px" }, function () {
                $(".leftsmallBanner .bannerdd").hide();
            });
        })



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




    // 轮播图
    //1.把所有的图片放在右侧，第一个图片放到可视区
    //获取图片宽度
    var iW=$('#imglist li').eq(0).outerWidth();//JS offsetwidth
    $('#imglist li').css('left',iW);
    $('#imglist li').eq(0).css('left',0);
    
    
    //2.开定时器：每次轮播一个图
    var timer=null;
    clearInterval(timer);
    var now=0;
    
    timer=setInterval(next,2000);//每隔2秒钟切换一个图
    
    function next(){
        //旧的挪走
        $('#imglist li').eq(now).animate({'left':-iW},1000);
        now=++now>=$('#imglist li').size()?0:now;
        //新的快速放在右侧，再挪进可视区
        $('#imglist li').eq(now).css('left',iW);
        $('#imglist li').eq(now).animate({'left':0},1000);
        light();
    }
    
    //3.焦点跟随
    function light(){
        $('#light span').removeClass('active');
        $('#light span').eq(now).addClass('active');
    }
    
    function prev(){
        //从左侧切入到可视区
        //旧的挪到右侧
        $('#imglist li').eq(now).animate({'left':iW},3000);
        //新的
        now=--now<0?$('#imglist li').size()-1:now;
        $('#imglist li').eq(now).css('left',-iW);
        $('#imglist li').eq(now).animate({'left':0},3000);
        light();
    }
    
    //4.点击上下按钮可以切图:如果是渲染出来的数据，记得用事件委托来绑定
    
    //鼠标经过停止，鼠标离开继续运动
    $('.sli').hover(function(){
            clearInterval(timer);
        },function(){
            clearInterval(timer);
            timer=setInterval(next,2000);
    });
    
    //点击切换到上一张
    $('#prev').click(function(){
        prev();
    });
    
    //点击切换到下一张
    $('#next').click(function(){
        //下一张
        next();
    });
    
    //5.点击焦点可以跳转
    
    $('#light span').click(function(){
        //旧 ：now
        //新：index() 新的
        var index=$(this).index();
        if(index>now){
            //从右边切入
            //旧 now：挪到左边
            $('#imglist li').eq(now).animate({'left':-iW},1000);
            //新的
            $('#imglist li').eq(index).css('left',iW);
            $('#imglist li').eq(index).animate({'left':0},1000);
            now=index;//最新的一张变成index
            
        }
        if(index<now){
            //从左边切入
            //旧 now：挪到左边
            $('#imglist li').eq(now).animate({'left':iW},1000);
            //新的
            $('#imglist li').eq(index).css('left',-iW);
            $('#imglist li').eq(index).animate({'left':0},1000);
            now=index;//最新的一张变成index
        }
        light();
    });



    // tab切换1
    var swiTop = document.querySelector('.swiTop');
    var swi = swiTop.getElementsByTagName('span');
    var swiLe = document.querySelector('.swi_le');
    var sBt = swiLe.getElementsByClassName('swiBot');
    for(var i=0;i<swi.length;i++){
        swi[i].index = i;
        // 鼠标经过事件
        swi[i].onmouseover = function(){
            for(var i=0;i<sBt.length;i++){
                swi[i].classList.remove('tive');
                sBt[i].style.display = 'none';
            }
            this.classList.add('tive');
            sBt[this.index].style.display = 'block';
        }
       
    }    
    
    // qiehuan部分
    var qhBot = document.querySelector('.qhBot');
    var qieg = qhBot.getElementsByClassName("gg");
    var qh = qhBot.getElementsByClassName("qh");
    for(var i=0;i<qh.length;i++){
        qh[i].index = i;
        // 点击事件
        qh[i].onclick = function(){
            for(var i=0;i<qieg.length;i++){
                qieg[i].style.display = 'none';
            }
            qieg[this.index].style.display = 'block';
        }
       
    }    


    // 封装渲染页面部分
    function aa(page,qty){
         var url = 'api/tabqiehuan.php';
            var data = `ye=${page}&num=${qty}&time=${new Date()}`;
            ajax('GET',url,data,function(str){
                var arr = JSON.parse(str);
                var res = arr.map(function(item){
                    return `<li class="taB">
                                <div class="taBa">
                                    <img src="${item.path}" class="paTh" />
                                </div>
                                <h3>
                                    <a href="javascript:;" class="book">${item.book}</a>              
                                </h3>
                                <p class="naMe">${item.name}</p>
                                <div class="jig">
                                    <span class="piRce">￥${item.pirce}</span>
                                    <span class="moNey">￥${item.money}</span>
                                </div>
                            </li>`;
                }).join("");
                output.innerHTML = res;
            });
    }


    // tabqiehuan部分
    var output = document.querySelector('.output');
    var outLi = output.getElementsByClassName('taB');
    var an = document.querySelector('.tabAn');
    var aLi = an.getElementsByClassName('taban');
    output.innerHTML = aa(1,8);
    for(var i=0;i<aLi.length;i++){
        aLi[i].index = i;
        aLi[i].onmouseover = function(){
            for(var i=0;i<aLi.length;i++){
                aLi[i].classList.remove('cus');
            }
            this.classList.add('cus');
            var page = Number(this.index+1);
            var qty = 8;
           aa(page,qty);
        }
    }


       //tabHover部分
    var hv = document.querySelector(".hoOut");
    var hLi = hv.getElementsByTagName('li');
    for(var i=0;i<hLi.length;i++){
        hLi[i].index = i;
        hLi[i].onmouseover = function(){
            for(var i=0;i<hLi.length;i++){
                hLi[i].classList.remove('reveal');
            }
            this.classList.add('reveal');
        }
    }

    // 页面渲染二
     // 封装渲染页面部分
    function bb(page,qty){
         var url = 'api/tabqiehuan2.php';
            var data = `ye=${page}&num=${qty}&time=${new Date()}`;
            ajax('GET',url,data,function(str){
                var arr = JSON.parse(str);
                var res = arr.map(function(item){
                    return `<li class="tAb">
                                <div class="tAba">
                                    <img src="${item.path}" class="paTh" />
                                </div>
                                <h3>
                                    <a href="javascript:;" class="bok">${item.book}</a>              
                                </h3>
                                <p class="tName">${item.name}</p>
                                <div class="tjia">
                                    <span class="piC">￥${item.pirce}</span>
                                    <span class="moN">￥${item.money}</span>
                                </div>
                            </li>`;
                }).join("");
                outp.innerHTML = res;
            });
    }

      // tabqiehuan部分
    var outp = document.querySelector('.outp');
    var oLi = output.getElementsByClassName('tAb');
    var tabab = document.querySelector('.tabab');
    var bLi = tabab.getElementsByClassName('tabac');
    outp.innerHTML = bb(1,8);
    for(var i=0;i<aLi.length;i++){
        bLi[i].index = i;
        bLi[i].onmouseover = function(){
            for(var i=0;i<bLi.length;i++){
                bLi[i].classList.remove('ccus');
            }
            this.classList.add('ccus');
            var page = Number(this.index+1);
            var qty = 8;
           bb(page,qty);
        }
    }

    // tab2
    var ho = document.querySelector(".hoO");
    // console.log(ho);
    var hoLi = ho.getElementsByTagName('li');
    for(var i=0;i<hoLi.length;i++){
        hoLi[i].index = i;
        hoLi[i].onmouseover = function(){
            for(var i=0;i<hoLi.length;i++){
                hoLi[i].classList.remove('xian');
            }
            this.classList.add('xian');
        }
    }

    var ot = document.querySelector('.mBot');
    var oDiv = ot.getElementsByClassName('mBcent');
    var cLi = document.querySelector(".cLi");
    var Lic = cLi.getElementsByTagName('li');
    for(var i=0;i<Lic.length;i++){
        Lic[i].index = i;
        Lic[i].onmouseover = function(){
            for(var i=0;i<Lic.length;i++){
                Lic[i].classList.remove('cur');
            }
            this.classList.add('cur');
        }
    }

    //mBleft部分 点击改变高度 
    $(".downArrow").click(function(){
        $(".cLi").animate({'top':'-420px'},1000);
        $(this).addClass('nextStop');
        $(".upArrow").removeClass('prevStop');
    });
    $(".upArrow").click(function(){
        
        $(".cLi").animate({'top':'0px'},1000);
         $(".downArrow").removeClass('nextStop');
         $(this).addClass('prevStop');
    });
    

    // 回到顶部
    var arr;
    var la = document.querySelector('.last');
    la.onclick=function(){
        //一进来一定要先清除定时器，不然点击div的时候，只要内容的距离还不到0点击div都会触发定时器
        clearInterval(arr);
        //开启定时器，实现内容每30毫秒就向上移动
        arr=setInterval(function(){
            //获取到垂直滚动条的距离
            var abc=window.scrollY;
            //用获取到垂直滚动条的距离进行判断什么时候可以关闭定时器
            if(abc<=0){
                abc=0;
                clearInterval(arr);
            }
            //用获取到的垂直滚动条距离/10，得到的结果再向上取整，得到每一次返回顶部滚动条要走的距离。（除以10是因为想要得到由快到慢的返回效果）
            var are= Math.ceil(abc);
            //获取当前位置滚动的距离，因为是要向上滚动所以要取负数
            window.scrollBy(0, -are);
        },30)
    }
                    


});