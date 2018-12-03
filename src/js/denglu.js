$(function(){
            var num ='';
        // 生成随机验证码
        function yanZheng(){
            num ='';
            var str = '0123456789zxcvbnmasdfghjklqwertyuiop';
            for(var i=0;i<4;i++){
                num+=str.charAt(parseInt(Math.random()*str.length));
            }
            return num;
        }
        // 页面加载前渲染验证码
        $('.securityCode').html(yanZheng());
        // 点击生成新的验证码
        $('.securityCode').on('click',function(){
            $('.securityCode').html(yanZheng());
            $('.securityCode').css('color',randomNum());
        });
        // 换一换
        $('.huan').on('click',function(){
            $('.securityCode').html(yanZheng());
            $('.securityCode').css('color',randomNum());
        });
        // 生成随机颜色的颜色
         function randomNum(){
            var r = parseInt(Math.random()*256);
            var g = parseInt(Math.random()*256);
            var b = parseInt(Math.random()*256);
            return "rgb("+r+','+g+','+b+")";
        }
    $('#btn').click(function(){
        var val1 = $('#phone').val();
        var val2 = $('#cipher').val();
        var url = '../api/denglu.php';
        var data = `name=${val1}&num=${val2}&time=${new Date()}`;
        if (val1 && val2){
            if ($('#yanzhengma').val()===$('.securityCode').html()) {
                ajax('POST',url,data,function(str){
                    if (str=='yes'){
                        Cookie.set('bb',val1,{path:'/'});
                        location.href = '../chinabook.html';
                    }else{
                        alert("用户名错误或密码错误");
                        $('#cipher').val('');
                        $('.securityCode').html(yanZheng());
                        $('.securityCode').css('color',randomNum());
                        $('#yanzhengma').val('');
                    }
                });
            }else{
                alert('验证码Error mistake fault Bug');
                $('.securityCode').html(yanZheng());
                $('.securityCode').css('color',randomNum());
                $('#yanzhengma').val('');
            }
        }else{
            alert('sorry name and password no kong');
        }
        
    });
});