window.onload = function(){
    main();
    const acntNmb = document.getElementById('acntNmb_input');
    const pwd = document.getElementById('pwd_input');
    const acntNmb_info = document.getElementById('acntNmb_info');
    const pwd_info = document.getElementById('pwd_info');
    acntNmb.addEventListener('change',function(){
        if(acntNmb.value == ''){
            acntNmb_info.innerText = '请输入账号';
            acntNmb_info.style.color = 'orange';
            acntNmb_usable = false;
        }
        else{
            acntNmb_info.innerText = '已输入账号';
            acntNmb_info.style.color = '#32CD32';
            acntNmb_usable = true;
        }
    });
    pwd.addEventListener('change',function(){
        if(pwd.value == ''){
            pwd_info.innerText = '请输入密码';
            pwd_info.style.color = 'orange';
            pwd_usable = false;
        }
        else{
            pwd_info.innerText = '已输入密码';
            pwd_info.style.color = '#32CD32';
            pwd_usable = true;
        }
    });
    document.getElementById('signIn_btn').onclick = function(){
        signIn_btn.innerText = '登录中。。。';
        signIn_btn.disabled = 'disabled';
        if(acntNmb.value != '' && pwd.value != ''){
            Bmob.initialize("c4c8b7af88a34d5d587b8d15506b1882", "4298aaed28dfc11c8a492d1828d93539");
            var User = Bmob.Object.extend("User");
            var query = new Bmob.Query(User);
            query.find({
                success: function(results) {
                    for (var i = 0; i < results.length; i++) {
                        object = results[i];
                        if (object.get('accountNumber') == acntNmb.value){
                            alert('登陆成功！！！(然鹅并没有)');
                            signIn_btn.innerText = '已登录';
                            break;
                        } else if(i == results.length - 1){
                            alert('登陆失败: 用户名不存在。');
                            acntNmb_info.innerText = '用户名不存在';
                            acntNmb_info.style.color = 'red';
                            acntNmb_usable = false;
                            signIn_btn.innerHTML = '登&nbsp;&nbsp;&nbsp;&nbsp;录';
                            signIn_btn.disabled = false;
                        }
                    }
                },
                error: function(error) {
                    alert("登录失败: " + error.code + " " + error.message);
                    signIn_btn.innerHTML = '登&nbsp;&nbsp;&nbsp;&nbsp;录';
                    signIn_btn.disabled = false;
                }
            });
        } else {
            alert('登录失败: 请检查上述诸项是否均符合要求。')
            signIn_btn.innerHTML = '登&nbsp;&nbsp;&nbsp;&nbsp;录';
            signIn_btn.disabled = false;
        }
    };
}