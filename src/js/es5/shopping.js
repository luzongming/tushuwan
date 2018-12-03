'use strict';

$(function () {
    //接收列表页数据 转码
    var data = decodeURI(location.search);
    // 对得到的字符串进行切割
    var newdata = data.slice(1);

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

    // 渲染页面
    $.ajax({
        type: 'get',
        url: '../api/shopping.php',
        data: {
            way: 'shop'
        },
        async: true,
        success: init
    });
    function init(str) {
        var arr = JSON.parse(str);
        // console.log(arr);
        var res = arr.map(function (item) {
            return '<ul class="single_goods" data-id=' + item.id + '>\n                            <li class="single_1">\n                                <p><input type="checkbox" class="goods_checkbox" /></p>\n                            </li>\n                            <li class="single_2">\n                                <dl class="clearfix">\n                                    <dt>\n                                        <a href="javascript:;"><img src="' + item.path + '" alt="" /></a>\n                                    </dt>\n                                    <dd>\n                                        <a href="javascript:;">' + item.book + '</a>\n                                    </dd>\n                                </dl>\n                            </li>\n                            <li class="single_3">\n                                <p>\uFFE5<i>' + item.cost + '</i></p>\n                            </li>\n                            <li class="single_4">\n                            <p>\uFFE5<i class="unit_price">' + item.pirce + '</i></p>\n                            </li>\n                            <li class="single_5">\n                                <a href="javascript:;" class="num_less">-</a><input type="text" value="' + item.num + '" class="nums" /><a href="javascript:;" class="num_add">+</a>\n                            </li>\n                            <li class="single_6">\n                                <i class="single_66">' + (item.num * item.pirce).toFixed(2) + '</i>\n                            </li>\n                            <li class="single_7">\n                                <a href="javascript:;" class="delete_goods">\u5220\u9664</a>\n                                <a href="javascript:;" class="in_favorites">\u79FB\u5165\u6536\u85CF</a>\n                            </li>\n                        </ul>';
        }).join("");
        $('.car_c').append(res);
    }

    var arr = []; //存被选中的复选框下标
    var arrDel = []; //存被选中的商品id

    //购物车内数量++和--
    //加
    $('.car_c').on('click', '.single_5 .num_add', function () {
        var num_text = $(this).prev().val();
        // console.log(num_text);
        num_text++;
        if (num_text >= 100) {
            num_text = 100;
        }
        var liId = $(this).parent().parent().attr('data-id');
        // console.log(liId);
        $.ajax({
            type: 'get',
            url: '../api/shopping.php',
            async: true,
            data: {
                id: liId,
                num: num_text,
                way: 'num'
            },
            success: function success(data) {
                // console.log(data);
            }
        });
        $(this).prev().val(num_text);
        subTotal($(this));
    });
    //减
    $('.car_c').on('click', '.single_5 .num_less', function () {
        var num_text = $(this).next().val();
        num_text--;
        if (num_text <= 1) {
            num_text = 1;
        }
        var liId = $(this).parent().parent().attr('data-id');
        $.ajax({
            type: 'get',
            url: '../api/shopping.php',
            async: true,
            data: {
                id: liId,
                num: num_text,
                way: 'num'
            },
            success: function success(data) {
                // console.log(data);
            }
        });
        $(this).next().val(num_text);
        subTotal($(this));
    });
    //在输入框输入内容后还可以正常使用++--
    $('.car_c').on('keyup', '.single_5 .nums', function () {
        var num_text = $(this).val();
        var liId = $(this).parent().parent().attr('data-id');
        if (num_text >= 100) {
            num_text = 100;
        }if (num_text <= 1) {
            num_text = 1;
        }
        $.ajax({
            type: 'get',
            url: '../api/shopping.php',
            async: true,
            data: {
                id: liId,
                num: num_text,
                way: 'num'
            },
            success: function success(data) {
                // console.log(data);
            }
        });
        $(this).val(num_text);
        subTotal($(this));
    });

    // //小计
    function subTotal(now) {
        var num = now.parent().find('input').val(); //数量
        var price = now.parent().prev().find('.unit_price').text();
        console.log(price);
        price = $.trim(price); //工具方法：去除前后空格
        var all = (num * price).toFixed(2);
        console.log(all);
        //保留两个小数，小计：数量*单价
        now.parent().next().html('\uFFE5<i class="single_66">' + all + '</i>');
        updateNum();
    }

    // //删除当行
    $('.car_c').on('click', '.delete_goods', function () {
        var mes = confirm('您确定要删除该行吗？');
        if (mes) {
            $(this).parent().parent().remove();
            //接口3：删除数据库的某行
            var liId = $(this).parent().parent().attr('data-id');
            $.ajax({
                type: 'get',
                url: '../api/shopping.php',
                async: true,
                data: {
                    id: liId,
                    way: 'del'
                },
                success: function success(data) {
                    // console.log(data);
                }
            });
        }
        updateNum();
        update();
    });

    // //全选
    var isok = true;
    $('.checkAll').on('click', function () {
        if (isok) {
            //设置
            $('.car_c').find('.goods_checkbox').prop('checked', 'checked');
            $('.checkAll').prop('checked', 'checked');
        } else {
            //不选
            $('.checkAll').removeAttr('checked');
            $('.car_c .goods_checkbox').removeAttr('checked');
        }
        isok = !isok;
        updateNum();
    });

    // //复选框被勾选
    $('.car_c').on('click', '.goods_checkbox', function () {
        $(this).css('background', 'red');
        updateNum();
        if (arr.length == $('.goods_checkbox').size()) {
            //控制是否全选勾上
            //证明全被勾选
            $('.checkAll').prop('checked', 'checked');
            isok = false;
        } else {
            $('.checkAll').removeAttr('checked');
            isok = true;
        }
    });

    // //总数量和总价格改变：封装成函数
    function updateNum() {
        //空数组：存被勾选的行的下标
        arr.length = 0;
        arrDel.length = 0;
        var le = $('.car_c .goods_checkbox').size(); //复选框的总个数
        // console.log(le);
        for (var i = 0; i < le; i++) {
            if ($('.car_c .goods_checkbox').eq(i).prop('checked')) {
                //意味着这一行被勾选
                arr.push(i);
                var liId = $('.goods_checkbox').eq(i).parent().parent().parent().attr('data-id');
                arrDel.push(liId);
            }
        }

        // console.log(arr,arrDel);

        //统计被勾选的行对应的数量，累加放到底部对应位置
        //统计被勾选的行对应的小计，累加放到底部对应位置
        var num = 0; //总数量
        var totalPrice = 0; //存总价
        for (var i = 0; i < arr.length; i++) {
            num += $('.nums').eq(arr[i]).val() * 1;
            var price = $('.single_66').eq(arr[i]).text();
            // price = $.trim(price); //去掉前后空格
            console.log(price);
            totalPrice += price * 1;
        }

        //console.log(num);
        $('.quantity').html(num);
        $('.balance_num i').html(num);
        $('.balance_price i').html('￥' + totalPrice.toFixed(2));
    }

    // //全删
    $('.balance_del').on('click', function () {
        updateNum();
        var mes = confirm('您确定要删除多行吗？');
        if (mes) {
            for (var i = arr.length - 1; i >= 0; i--) {
                //找到对应的行，删除
                $('.goods_checkbox').eq(arr[i]).parent().parent().parent().remove();
                // console.log(arrDel[i]);
                $.ajax({
                    type: 'get',
                    url: '../api/shopping.php',
                    async: true,
                    data: {
                        id: arrDel[i],
                        way: 'del'
                    },
                    success: function success(data) {
                        // console.log(data);
                    }
                });
            }
        }
        update();
    });
    update();
    //更新状态
    function update() {
        if ($('.goods_checkbox').size() == 0) {
            //意味着没有商品数据了
            // $('.shoppingProcedure').css('display','none');
            // $('.tShoppCar').css('display','none');

        } else {
                // $('.shoppingProcedure').css('display','block');
                // $('.tShoppCar').css('display','block');

            }
    }
});