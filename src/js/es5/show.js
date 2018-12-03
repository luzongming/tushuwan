'use strict';

$(function () {
    //二级导航 
    $('.vab').on('mouseover', function () {
        $(this).addClass('hover');
        $(this).find('.gunzi').css('display', 'block');
        $(this).find('.vb').css('display', 'block');
        $(this).find('em').css('color', 'red');
    });
    $('.vab').on('mouseout', function () {
        $(this).find('em').css('color', 'gray');
        $(this).removeClass('hover');
        $(this).find('.gunzi').css('display', 'none');
        $(this).find('.vb').css('display', 'none');
    });

    // 取cookie
    var username = Cookie.get('bb');
    console.log(username);
    if (username) {
        console.log(123);
        $('.aa').html('' + username);
        $('.aa').next().next().html(' [\u9000\u51FA]');
    } else {
        $('.aa').click(function () {
            window.open('html/denglu.html');
        });
    }
    $('.cc').click(function () {
        Cookie.set('bb', '', { 'path': '/' });
        //刷新页面
        location.reload();
    });

    var ctLeft = document.querySelector('.ctLeft');
    //接收列表页数据 转码
    var data = decodeURI(location.search);
    // 对得到的字符串进行切割
    var newdata = data.slice(1);
    var lujing = '../api/show.php';
    var shul = 'id=' + newdata + '&time=' + new Date();
    ajax('GET', lujing, shul, function (str) {
        var arr = JSON.parse(str);
        var res = arr.map(function (item) {
            return ' <div class="bookcover">\n                        <div class="bookImg" id="popbigpic">\n                            <img src="' + item.path + '" height="300" width="203" alt="" class="bimg" />\n                            <div class="tejia">\n                                <img src="../img/tejia.png" height="50" width="50" alt="" />\n                            </div>\n                            <span class="bigIcon"></span>\n                        </div>\n                        <div class="fenxiang">\n                             <a href="javascript:;">\u5206\u4EAB</a>\n                        </div>\n                    </div>\n                    <div class="bookcent">\n                        <div class="padLeft">\n                            <h2>' + item.book + '</h2>\n                            <p class="recomand">\u6BD4\u540C\u540D\u7535\u5F71\u5185\u5BB9\u66F4\u4E30\u5BCC\uFF0C\u5218\u9707\u4E91\u5C0F\u8BF4\u4ECE\u4E61\u571F\u6587\u5B66\u5411\u73B0\u4EE3\u90FD\u5E02\u8F6C\u578B\u7684\u201C\u5927\u8DC3\u8FDB\u201D</p>\n                            <div class="author">\n                                <span>\u4F5C\u8005\uFF1A</span>\n                                <a href="javascript:;" class="bokname">' + item.name + ' \u8457</a>\n                            </div>\n                            <div class="publisher">\n                                <span>\u51FA\u7248\u793E\uFF1A</span>\n                                <a href="javascript:;">' + item.publishing + '</a>\n                                <span>\u51FA\u7248\u65F6\u95F4\uFF1A</span>\n                                <i>2018-11-30</i>\n                            </div>\n                            <div class="otherInfor">\n                                <span>\u5F00\u672C\uFF1A</span>\n                                <em>32\u5F00</em>\n                                <span>\u9875\u6570\uFF1A</span>\n                                <i>253</i>\n                            </div>\n                            <div class="startWrap">\n                                <span>\u8BFB\u8005\u8BC4\u5206\uFF1A</span>\n                                <em>4.4\u5206</em>\n                                <i class="one"></i>\n                                <i class="one"></i>\n                                <i class="one"></i>\n                                <i class="one"></i>\n                                <i class="half"></i>\n                                <a href="javascript:;">31\u6761\u8BC4\u8BBA</a>\n                            </div>\n                            <div class="sort">\n                                <span>\u672C\u7C7B\u699C\u5355\uFF1A</span>\n                                <a href="javascript:;">\u5C0F\u8BF4\u9500\u91CF\u699C</a>\n                            </div>\n                            <div class="priceWrap">\n                                <span class="sellPriceTit">\u4E2D \u56FE \u4EF7:</span>\n                                <span class="sellPrice">\xA5' + item.pirce + '</span>\n                                <span class="discount">(' + item.discount + '\u6298)</span>\n                                <span class="priceTit">\u5B9A\u4EF7:</span>\n                                <del class="price">\xA5' + item.cost + '</del>\n                                <a href="javascript:;" >\u767B\u5F55\u540E\u53EF\u770B\u5230\u4F1A\u5458\u4EF7</a>\n                            </div>\n                            <div class="oparateButton">\n                                <a href="javascript:;" class="buyButton">\u52A0\u5165\u8D2D\u7269\u8F66</a>\n                                <a href="javascript:;" class="collectBtn">\u6536\u85CF</a>\n                                <div class="freightPolicyWrap">\n                                    <span class="freightTit">\n                                        \u514D\u8FD0\u8D39\u653F\u7B56\n                                        <i class="icon"></i>\n                                    </span>\n                                    <div class="freightCon">\n                                        <div class="reightPolicy">\n                                            \u5317\u4EAC\u6EE149\u5143\u514D\u8FD0\u8D39<br />\n                                            \u5168\u56FD\u6EE169\u5143\u514D\u8FD0\u8D39\uFF08\u6E2F\u6FB3\u53F0\u9664\u5916\uFF09\n                                            <i class="icon"></i>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="buyTip">\n                                <span>\u6E29\u99A8\u63D0\u793A\uFF1A</span>\n                                5\u6298\u4EE5\u4E0B\u56FE\u4E66\u4E3B\u8981\u4E3A\u51FA\u7248\u793E\u5C3E\u8D27\uFF0C\u5927\u90E8\u5206\u4E3A\u5168\u65B0\uFF0C\u4E2A\u522B\u56FE\u4E66\u54C1\u76F88-9\u6210\u65B0\u3001\u5207\u53E3<br />\n                                \u6709\u5212\u7EBF\u6807\u8BB0\u3001\u5149\u76D8\u7B49\u9644\u4EF6\u4E0D\u5168\n                            </div>\n                        </div>\n                    </div>';
        });
        ctLeft.innerHTML = res;
        // 遮罩显示图片
        tuimg.innerHTML = arr.map(function (item) {
            return ' <div class="xiaoBox">\n                        <img src="' + item.path + '">\n                        <span class="cha">\xD7</span>\n                    </div>';
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
    function aa(aa) {
        aa.onclick = function () {
            zhezhao.style.display = 'block';
            tuimg.style.display = 'block';
        };
    }
    function bb(bb) {
        bb.onclick = function () {
            zhezhao.style.display = 'none';
            tuimg.style.display = 'none';
        };
    }

    // // 点击添加订单表
    function join(cc) {
        cc.onclick = function () {
            $.ajax({
                type: 'get',
                url: '../api/dingdanbiao.php',
                data: {
                    id: newdata,
                    num: 1
                },
                async: true,
                success: function success(data) {
                    window.open('../html/verify.html?' + newdata);
                }
            });
        };
    }

    // 鼠标经过显示相应内容1
    var ho = document.querySelector(".hoOut");
    var hoLi = ho.getElementsByTagName('li');
    for (var i = 0; i < hoLi.length; i++) {
        hoLi[i].index = i;
        hoLi[i].onmouseover = function () {
            for (var i = 0; i < hoLi.length; i++) {
                hoLi[i].classList.remove('reveal');
            }
            this.classList.add('reveal');
        };
    }

    // 返回顶部
    $(document).ready(function () {
        //隐藏
        $(".fanhuitop").hide();
        $(window).scroll(function () {
            if ($(window).scrollTop() > 200) {
                $(".fanhuitop").fadeIn(1500);
            } else {
                $(".fanhuitop").fadeOut(1500);
            }
        });
        //回到顶部
        $(".fanhuitop").click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });

    // 鼠标经过显示相应内容2
    var ctl = document.querySelector(".ctlL");
    var ctLi = ctl.getElementsByTagName('li');
    for (var i = 0; i < ctLi.length; i++) {
        ctLi[i].index = i;
        ctLi[i].onmouseover = function () {
            for (var i = 0; i < ctLi.length; i++) {
                ctLi[i].classList.remove('xsi');
            }
            this.classList.add('xsi');
        };
    }

    // 点击改变ul样式
    var isok = true;
    $('.cbtn').on('click', function () {
        if (isok) {
            $('.tab').animate({ 'left': '-920px' }, 1000);
        } else {
            $('.tab').animate({ 'left': '0' }, 1000);
        }
        isok = !isok;
    });

    // 吸顶菜单
    var fol = document.getElementById("fol");
    var xiding = document.querySelector('.xiding');
    var foT = xiding.offsetHeight;
    // 鼠标滚动事件
    window.onscroll = function () {
        var scY = window.scrollY;
        if (scY >= 1000) {
            xiding.classList.add('xi');
        } else {
            xiding.classList.remove('xi');
        }
    };

    //设置标识。防止出现跑马灯  
    var flag = true;
    $(".tiaoyue li").click(function () {
        flag = false;
        $(this).addClass("current").siblings().removeClass("current");
        var index = $(this).index(); //获取当前点击元素的索引  
        var top = $(".banner").eq(index).offset().top; //获取每个banner到顶部的距离  
        $("html,body").stop(true).animate({ "scrollTop": top }, function () {
            flag = true;
        });
    });

    // 滚轮滑动切换楼层  
    $(window).scroll(function () {
        if (flag) {
            var winH = $(window).innerHeight() / 2;
            var scrollT = $(window).scrollTop();
            var len = $(".banner").size();
            for (var i = 0; i < len; i++) {
                //banner对象加了i之后变成了js对象,所以用offsetTop  
                var bannerGap = $(".banner")[i].offsetTop - scrollT;
                if (bannerGap < winH) {
                    $(".floor li").eq(i).addClass("current").siblings().removeClass("current");
                }
            }
        }
    });
});