let account_usable = false;
let pwd_usable = false;
let pwd2_usable = false;
let username_usable = false;
let userEmail_usable = false;
window.onload = function () {
    const account = document.getElementById('account_input');
    const pwd = document.getElementById('pwd_input');
    const pwd2 = document.getElementById('pwd2_input');
    const userEmail = document.getElementById('userEmail_input');
    const username = document.getElementById('username_input');
    const account_info = document.getElementById('account_info');
    const pwd_info = document.getElementById('pwd_info');
    const pwd2_info = document.getElementById('pwd2_info');
    const username_info = document.getElementById('username_info');
    const userEmail_info = document.getElementById('userEmail_info');
    function register() {
        register_btn.innerText = '注册中......';
        register_btn.disabled = 'disabled';
        if (account_usable == pwd_usable && pwd_usable == pwd2_usable && pwd2_usable == username_usable && username_usable == userEmail_usable && userEmail_usable == true) {
            Bmob.initialize("c4c8b7af88a34d5d587b8d15506b1882", "4298aaed28dfc11c8a492d1828d93539");
            var query = Bmob.Query("sfUser");
            query.find().then(results => {
                //开始查询用户名
                for (var i = 0; i < results.length; i++) {
                    object = results[i];
                    //查询到用户名
                    if (object.account == account.value) {
                        alert('注册失败\n返回错误信息：账号与其他用户重复！');
                        account_info.innerText = '账号重复';
                        account_info.style.color = '#FF0000';
                        account_usable = false;
                        register_btn.innerText = '注册';
                        register_btn.disabled = false;
                        break;
                        //未查询到用户名
                    } else if (i == results.length - 1) {
                        query.set("account", account.value);
                        query.set("password", pwd.value);
                        query.set("username", username.value);
                        query.set("email", userEmail.value);
                        query.set("info", '');
                        query.save().then(() => {
                            alert('注册成功！');
                            register_btn.innerText = '注册成功';
                            window.open('/user/signIn.html', '_self')
                        }).catch(err => {
                            alert('注册失败\n返回错误码：' + err.code + '\n返回错误信息：' + err.message);
                            register_btn.innerText = '注册';
                            register_btn.disabled = false;
                        });
                    }
                }
            }).catch(err => {
                alert('注册失败\n返回错误码：' + err.code + '\n返回错误信息：' + err.message);
                register_btn.innerText = '注册';
                register_btn.disabled = false;
            });
        }
        else {
            alert('注册失败\n返回错误信息：请检查上述诸项是否均符合要求。');
            register_btn.innerText = '注册';
            register_btn.disabled = false;
        }
    }
    account.addEventListener('change', function () {
        if (account.value == '') {
            account_info.innerText = '请输入账号';
            account_info.style.color = 'orange';
            account_usable = false;
        } else if (account.value.length < 6) {
            account_info.innerText = '账号过短';
            account_info.style.color = '#FF0000';
            account_usable = false;
        } else if (account.value.length > 18) {
            account_info.innerText = '账号过长';
            account_info.style.color = '#FF0000';
            account_usable = false;
        } else if (/^[a-zA-Z0-9_]{6,18}$/.exec(account.value) == null) {
            account_info.innerText = '密码含特殊字符';
            account_info.style.color = '#FF0000';
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
        } else if (pwd.value.length < 6) {
            pwd_info.innerText = '密码过短';
            pwd_info.style.color = '#FF0000';
            pwd_usable = false;
        } else if (pwd.value.length > 20) {
            pwd_info.innerText = '密码过长';
            pwd_info.style.color = '#FF0000';
            pwd_usable = false;
        } else if (/^[a-zA-Z0-9,./;'\[\]<>?:"{}`\-\=\\~!@#$%^&*()_+|]{6,21}$/.exec(pwd.value) == null) {
            pwd_info.innerText = '密码含特殊字符';
            pwd_info.style.color = '#FF0000';
            pwd_usable = false;
        } else {
            pwd_info.innerText = '该密码可使用';
            pwd_info.style.color = '#32CD32';
            pwd_usable = true;
        }
        if (pwd.value == pwd2.value) {
            pwd2_info.innerText = '两次密码相符合';
            pwd2_info.style.color = '#32CD32';
            pwd2_usable = true;
        } else if (pwd2.value != '') {
            pwd2_info.innerText = '两次密码不相符';
            pwd2_info.style.color = '#FF0000';
            pwd2_usable = false;
        }
    });
    pwd2.addEventListener('change', function () {
        if (pwd2.value == '') {
            pwd2_info.innerText = '请再次输入密码';
            pwd2_info.style.color = 'orange';
            pwd2_usable = false;
        }
        else if (pwd.value == pwd2.value) {
            pwd2_info.innerText = '两次密码相符合';
            pwd2_info.style.color = '#32CD32';
            pwd2_usable = true;
        }
        else {
            pwd2_info.innerText = '两次密码不相符';
            pwd2_info.style.color = '#FF0000';
            pwd2_usable = false;
        }
    });
    username.addEventListener('change', function () {
        if (username.value == '') {
            username_info.innerText = '请输入用户名';
            username_info.style.color = 'orange';
            username_usable = false;
        }
        else if (username.value.length > 10) {
            username_info.innerText = '用户名长度过限';
            username_info.style.color = '#FF0000';
            username_usable = false;
        } else {
            username_info.innerText = '已输入用户名';
            username_info.style.color = '#32CD32';
            username_usable = true;
        }
    });
    userEmail.addEventListener('change', function () {
        if (userEmail.value == '') {
            userEmail_info.innerText = '请输入邮箱';
            userEmail_info.style.color = 'orange';
            userEmail_usable = false;
        }
        else if (/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.exec(userEmail.value) == null) {
            userEmail_info.innerText = '邮箱格式错误';
            userEmail_info.style.color = '#FF0000';
            userEmail_usable = false;
        }
        else {
            userEmail_info.innerText = '已输入邮箱';
            userEmail_info.style.color = '#32CD32';
            userEmail_usable = true;
        }
    });
    document.getElementById('register_btn').addEventListener('click', register)
    document.addEventListener('keydown', function (event) {
        if (event.key == 'Enter')
            register()
    })
}