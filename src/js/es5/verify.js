'use strict';

$(function () {
    //接收列表页数据 转码
    var data = decodeURI(location.search);

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

    // 对得到的字符串进行切割
    var newdata = data.slice(1);
    var mdise = document.querySelector(".merchandise");
    $.ajax({
        type: 'get',
        url: '../api/verify.php',
        data: {
            id: newdata
        },
        async: true,
        success: function success(str) {
            var arr = JSON.parse(str);
            var res = arr.map(function (item) {
                return '<div class="mIng">\n                                    <img src="' + item.path + '" alt="" class="img" />\n                                </div>\n                                <div class="book_detail fl">\n                                    <div class="book_name">\n                                        <a href="/7000042.html" target="_blank">' + item.book + '</a>\n                                    </div>\n                                    <div class="money">\n                                        <span class="price_sell">\uFFE5' + item.pirce + '</span>\n                                        <del class="price_ding">\uFFE5' + item.cost + '</del>\n                                    </div>\n                                </div>';
            }).join("");
            mdise.innerHTML = res;
        }
    });

    $('.gobtn').click(function () {
        window.open('../html/shopping.html?' + newdata);
    });
    $('.huibtn').click(function () {
        location.href = '../chinabook.html';
    });
});