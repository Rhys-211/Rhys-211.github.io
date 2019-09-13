window.onload = function () {
    const account = document.getElementById('account_input');
    const pwd = document.getElementById('pwd_input');
    const account_info = document.getElementById('account_info');
    const pwd_info = document.getElementById('pwd_info');
    function signIn() {
        signIn_btn.innerText = '登录中......';
        signIn_btn.disabled = 'disabled';
        if (account.value != '' && pwd.value != '') {
            Bmob.initialize("c4c8b7af88a34d5d587b8d15506b1882", "4298aaed28dfc11c8a492d1828d93539");
            var userQuery = Bmob.Query("sfUser");
            userQuery.find().then(results => {
                //开始查询用户名
                for (var i = 0; i < results.length; i++) {
                    object = results[i];
                    //查询到用户名
                    if (object.account == account.value) {
                        if (pwd.value == object.password) {
                            localStorage.id = object.objectId;
                            localStorage.info = object.info;
                            localStorage.username = object.username;
                            localStorage.account = object.account;
                            localStorage.avatarUrl = object.avatar == undefined ? '/assets/images/userAvatar.png' : object.avatar;
                            localStorage.email = object.email;
                            signIn_btn.innerText = '已登录';
                            alert('登录成功！');
                            window.open('/index.html', '_self')
                            break;
                        } else {
                            pwd_info.innerText = '密码错误';
                            pwd_info.style.color = 'red';
                            pwd_usable = false;
                            signIn_btn.innerHTML = '登&nbsp;&nbsp;&nbsp;&nbsp;录';
                            signIn_btn.disabled = false;
                            break;
                        }
                        //未查询到用户名
                    } else if (i == results.length - 1) {
                        account_info.innerText = '用户名不存在';
                        account_info.style.color = 'red';
                        account_usable = false;
                        signIn_btn.innerHTML = '登&nbsp;&nbsp;&nbsp;&nbsp;录';
                        signIn_btn.disabled = false;
                    }
                }
            });
        } else {
            alert('登陆失败\n返回错误信息：请检查上述诸项是否均符合要求。');
            signIn_btn.innerHTML = '登&nbsp;&nbsp;&nbsp;&nbsp;录';
            signIn_btn.disabled = false;
        }
    };
    account.addEventListener('change', function () {
        if (account.value == '') {
            account_info.innerText = '请输入账号';
            account_info.style.color = 'orange';
            account_usable = false;
        } else {
            account_info.innerText = '已输入账号';
            account_info.style.color = '#32CD32';
            account_usable = true;
        }
    });
    pwd.addEventListener('change', function () {
        if (pwd.value == '') {
            pwd_info.innerText = '请输入密码';
            pwd_info.style.color = 'orange';
            pwd_usable = false;
        } else {
            pwd_info.innerText = '已输入密码';
            pwd_info.style.color = '#32CD32';
            pwd_usable = true;
        }
    });
    document.getElementById('signIn_btn').addEventListener('click', signIn)
    document.addEventListener('keydown', function (event) {
        if (event.key == 'Enter')
            signIn()
    })
}