'use strict';

$(function () {
    var num = '';
    // 生成随机验证码
    function yanZheng() {
        num = '';
        var str = '0123456789zxcvbnmasdfghjklqwertyuiop';
        for (var i = 0; i < 4; i++) {
            num += str.charAt(parseInt(Math.random() * str.length));
        }
        return num;
    }
    // 页面加载前渲染验证码
    $('.securityCode').html(yanZheng());
    // 点击生成新的验证码
    $('.securityCode').on('click', function () {
        $('.securityCode').html(yanZheng());
        $('.securityCode').css('color', randomNum());
    });
    // 换一换
    $('.huan').on('click', function () {
        $('.securityCode').html(yanZheng());
        $('.securityCode').css('color', randomNum());
    });
    // 生成随机颜色的颜色
    function randomNum() {
        var r = parseInt(Math.random() * 256);
        var g = parseInt(Math.random() * 256);
        var b = parseInt(Math.random() * 256);
        return "rgb(" + r + ',' + g + ',' + b + ")";
    }
    var isok1 = false;
    var isok2 = false;
    var isok3 = false;
    var isok4 = false;

    $('.input').keyup(function () {
        var inPut = $(this).val();
        inPut = $.trim(inPut);

        // 验证手机号码
        if ($(this).is("#phone")) {
            $.ajax({
                type: 'get',
                url: '../api/zhuceverify.php',
                data: {
                    name: inPut
                },
                async: true,
                success: function success(data) {
                    if (data != 1) {
                        alert("用户已被注册");
                        return isok1 = false;
                    }
                }
            });
            $(this).parent().remove('bianhei', 'bianred');
            if (checkReg.tel(inPut)) {
                $(this).parent().removeClass('bianred');
                $(this).parent().addClass('bianhei');
                $(this).parent().next().css('display', 'block');
                $(this).parent().next().next().css('display', 'none');
                isok1 = true;
            } else {
                $(this).parent().removeClass('bianhei');
                $(this).parent().addClass('bianred');
                $(this).parent().next().css('display', 'none');
                $(this).parent().next().next().html('请输入正确的手机号码');
                $(this).parent().next().next().css('color', 'red');
                $(this).parent().next().next().css('display', 'block');
                isok1 = false;
            }
        }
        // 验证密码
        if ($(this).is('#cipher')) {
            if (checkReg.psweasy(inPut)) {
                $(this).parent().removeClass('bianred');
                $(this).parent().addClass('bianhei');
                $(this).parent().next().css('display', 'block');
                $(this).parent().next().next().css('display', 'none');
                isok2 = true;
            } else {
                $(this).parent().removeClass('bianhei');
                $(this).parent().addClass('bianred');
                $(this).parent().next().css('display', 'none');
                $(this).parent().next().next().html('请输入字母开头无特殊符号的密码');
                $(this).parent().next().next().css('color', 'red');
                $(this).parent().next().next().css('display', 'block');
                isok2 = false;
            }
        }
        //确认密码
        if ($(this).is('#verify')) {
            if ($(this).val() === $('#cipher').val()) {
                $(this).parent().removeClass('bianred');
                $(this).parent().addClass('bianhei');
                $(this).parent().next().css('display', 'block');
                $(this).parent().next().next().css('display', 'none');
                isok3 = true;
            } else {
                $(this).parent().removeClass('bianhei');
                $(this).parent().addClass('bianred');
                $(this).parent().next().css('display', 'none');
                $(this).parent().next().next().html('陛下真是日理万机啊');
                $(this).parent().next().next().css('color', 'red');
                $(this).parent().next().next().css('display', 'block');
                isok3 = false;
            }
        }
        if ($(this).is('#yanzhengma')) {
            if ($(this).val() === $('.securityCode').html()) {
                $(this).parent().next().next().next().css('display', 'block');
                $(this).parent().removeClass('bianred');
                $(this).parent().addClass('bianhei');
                $(this).parent().next().next().next().next().css('display', 'none');
                isok4 = true;
            } else {
                $(this).parent().next().next().next().css('display', 'none');
                $(this).parent().removeClass('bianhei');
                $(this).parent().addClass('bianred');
                $(this).parent().next().next().next().next().css('display', 'block');
                isok4 = false;
            }
        }
    });
    // console.log(isok1);
    $('#btn').on('click', function () {
        if (isok1 && isok2 && isok3 && isok4) {
            var val = $('#phone').val();
            var pasNum = $('#cipher').val();
            var url = '../api/zhuce.php';
            var data = 'name=' + val + '&mima=' + pasNum + '&time=' + new Date();
            ajax('POST', url, data, function (str) {
                console.log(str);
            });

            location.href = '../html/denglu.html';
        }
    });
});