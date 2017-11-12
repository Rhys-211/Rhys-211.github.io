let acntNmb_usable = false;
let pwd_usable = false;
let pwd2_usable = false;
let username_usable = false;
let userEmail_usable = false;
window.onload = function () {
    main();
    const acntNmb = document.getElementById('acntNmb_input');
    const pwd = document.getElementById('pwd_input');
    const pwd2 = document.getElementById('pwd2_input');
    const userEmail = document.getElementById('userEmail_input');
    const username = document.getElementById('username_input');
    const acntNmb_info = document.getElementById('acntNmb_info');
    const pwd_info = document.getElementById('pwd_info');
    const pwd2_info = document.getElementById('pwd2_info');
    const username_info = document.getElementById('username_info');
    const userEmail_info = document.getElementById('userEmail_info');
    function register() {
        register_btn.innerText = '注册中......';
        register_btn.disabled = 'disabled';
        if (acntNmb_usable == pwd_usable && pwd_usable == pwd2_usable && pwd2_usable == username_usable && username_usable == userEmail_usable && userEmail_usable == true) {
            Bmob.initialize("c4c8b7af88a34d5d587b8d15506b1882", "4298aaed28dfc11c8a492d1828d93539");
            var User = Bmob.Object.extend("sfUser");
            var query = new Bmob.Query(User);
            query.find({
                success: function (results) {
                    //开始查询用户名
                    for (var i = 0; i < results.length; i++) {
                        object = results[i];
                        //查询到用户名
                        if (object.get('accountNumber') == acntNmb.value) {
                            alert('注册失败\n返回错误信息：账号与其他用户重复！');
                            acntNmb_info.innerText = '账号重复';
                            acntNmb_info.style.color = '#FF0000';
                            acntNmb_usable = false;
                            register_btn.innerText = '注册';
                            register_btn.disabled = false;
                            break;
                            //未查询到用户名
                        } else if (i == results.length - 1) {
                            var user = new User();
                            user.set("accountNumber", acntNmb.value);
                            user.set("password", pwd.value);
                            user.set("username", username.value);
                            user.set("email", userEmail.value);
                            user.set("info", '');
                            user.set("avatarUrl", '/assets/images/userAvatar.png');
                            user.save(null, {
                                success: function (user) {
                                    alert('注册成功！');
                                    register_btn.innerText = '注册成功';
                                    window.open('/user/signIn.html', '_self')
                                },
                                error: function (user, error) {
                                    alert('注册失败\n返回错误码：' + error.code + '\n返回错误信息：' + error.message);
                                    register_btn.innerText = '注册';
                                    register_btn.disabled = false;
                                }
                            });
                        }
                    }
                },
                error: function (error) {
                    alert('注册失败\n返回错误码：' + error.code + '\n返回错误信息：' + error.message);
                    register_btn.innerText = '注册';
                    register_btn.disabled = false;
                }
            });
        }
        else {
            alert('注册失败\n返回错误信息：请检查上述诸项是否均符合要求。');
            register_btn.innerText = '注册';
            register_btn.disabled = false;
        }
    }
    acntNmb.addEventListener('change', function () {
        if (acntNmb.value == '') {
            acntNmb_info.innerText = '请输入账号';
            acntNmb_info.style.color = 'orange';
            acntNmb_usable = false;
        } else if (acntNmb.value.length < 6) {
            acntNmb_info.innerText = '账号过短';
            acntNmb_info.style.color = '#FF0000';
            acntNmb_usable = false;
        } else if (acntNmb.value.length > 18) {
            acntNmb_info.innerText = '账号过长';
            acntNmb_info.style.color = '#FF0000';
            acntNmb_usable = false;
        } else if (/^[a-zA-Z0-9_]{6,18}$/.exec(acntNmb.value) == null) {
            acntNmb_info.innerText = '密码含特殊字符';
            acntNmb_info.style.color = '#FF0000';
            acntNmb_usable = false;
        } else {
            acntNmb_info.innerText = '已输入账号';
            acntNmb_info.style.color = '#32CD32';
            acntNmb_usable = true;
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