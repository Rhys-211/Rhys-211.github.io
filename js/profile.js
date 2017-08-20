window.onload = function () {
    main();
    const username = document.getElementById('username');
    const userInfo = document.getElementById('userInfo');
    const userAcntNmb = document.getElementById('userAcntNum');
    const userAvatar = document.getElementById('userAvatar');
    const userID = document.getElementById('userID');
    const userEmail = document.getElementById('userEmail');
    const title = document.getElementById('title');
    const changeUsername = document.getElementById('changeUsername');
    const changeUserInfo = document.getElementById('changeUserInfo');
    const changeUserEmail = document.getElementById('changeUserEmail');
    const otherProfile = document.querySelector('#otherProfile');
    const sd_username = document.getElementById('sd_username');
    const sd_userInfo = document.getElementById('sd_userInfo');
    if (window.location.search != '') {
        const search = window.location.search.split('?')[1].split('=');
        if (search[0] == 'id') {
            Bmob.initialize("c4c8b7af88a34d5d587b8d15506b1882", "4298aaed28dfc11c8a492d1828d93539");
            var User = Bmob.Object.extend("sfUser");
            //创建查询对象，入口参数是对象类的实例
            var query = new Bmob.Query(User);
            //查询单条数据，第一个参数是这条数据的objectId值
            query.get(search[1], {
                success: function (user) {
                    // 查询成功，调用get方法获取对应属性的值
                    title.innerText = user.get('username') + "'s Profile";
                    userID.innerText = user.id;
                    userInfo.innerText = user.get('info');
                    username.innerText = user.get('username');
                    userEmail.innerText = user.get('email');
                    userAcntNmb.innerText = user.get('accountNumber');
                    userAvatar.setAttribute('src', user.get('avatarUrl'));
                    otherProfile.removeChild(changeUsername);
                    otherProfile.removeChild(changeUserInfo);
                    otherProfile.removeChild(changeUserEmail);
                },
                error: function (object, error) {
                    // 查询失败
                    alert('查询失败\n返回错误码：' + error.code + '\n返回错误信息：' + error.message);
                }
            });
        } else
            alert('查询失败\n返回错误信息：你网址打错了吧_(:з)∠)_');
    } else {
        if (document.cookie == '')
            window.open('/index.html', '_self')
        else {
            let json = JSON.parse(document.cookie.slice(5));
            userID.innerText = json.id;
            userInfo.innerText = json.info;
            username.innerText = json.username;
            userAcntNmb.innerText = json.acntNmb;
            userEmail.innerText = json.email;
            userAvatar.setAttribute('src', json.avatarUrl);
            changeUsername.style.display = 'block'
            changeUserInfo.style.display = 'block'
            changeUserEmail.style.display = 'block'
            otherProfile.style.gridTemplateColumns = '2fr 4fr 1fr'
        }
    }
    changeUsername.addEventListener('click', function () {
        var newUsername = prompt('请输入新的用户名(0~10字)：')
        if (typeof (newUsername) == 'string') {
            if (newUsername.length > 0 && newUsername.length < 11) {
                changeUsername.innerText = '修改中';
                changeUsername.disabled = 'disabled';
                if (confirm('你确定要将用户名改为" ' + newUsername + ' "吗？')) {
                    Bmob.initialize("c4c8b7af88a34d5d587b8d15506b1882", "4298aaed28dfc11c8a492d1828d93539");
                    var User = Bmob.Object.extend("sfUser");
                    var query = new Bmob.Query(User);
                    query.get(json.id, {
                        success: function (object) {
                            // The object was retrieved successfully.
                            object.set("username", newUsername);
                            object.save(null, {
                                success: function (objectUpdate) {
                                    alert("修改成功, 新用户名: " + objectUpdate.get("username"));
                                    writeCookies(object);
                                    username.innerText = newUsername;
                                    sd_username.firstChild.innerText = newUsername;
                                    changeUsername.disabled = false;
                                    changeUsername.innerText = '修改';
                                },
                                error: function (model, error) {
                                    alert('修改失败\n返回错误码：' + error.code + '\n返回错误信息：' + error.message);
                                    changeUsername.disabled = false;
                                    changeUsername.innerText = '修改';
                                }
                            });
                        },
                        error: function (object, error) {
                            alert('查询失败\n返回错误码：' + error.code + '\n返回错误信息：' + error.message);
                            changeUsername.disabled = false;
                            changeUsername.innerText = '修改';
                        }
                    });
                } else {
                    changeUsername.disabled = false;
                    changeUsername.innerText = '修改';
                }
            } else if (newUsername == '') {
                alert('修改失败\n返回错误信息：Are you kidding me?');
            } else if (newUsername.length > 10) {
                alert('发布失败\n返回错误信息：你的新用户名太长，服务器表示无法承受。');
            }
        }
    })
    changeUserEmail.addEventListener('click', function () {
        var newUserEmail = prompt('请输入新的邮箱：')
        if (typeof (newUserEmail) == 'string') {
            if (/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.exec(newUserEmail)) {
                changeUserEmail.innerText = '修改中';
                changeUserEmail.disabled = 'disabled';
                if (confirm('你确定要将邮箱改为" ' + newUserEmail + ' "吗？')) {
                    Bmob.initialize("c4c8b7af88a34d5d587b8d15506b1882", "4298aaed28dfc11c8a492d1828d93539");
                    var User = Bmob.Object.extend("sfUser");
                    var query = new Bmob.Query(User);
                    query.get(json.id, {
                        success: function (object) {
                            // The object was retrieved successfully.
                            object.set("email", newUserEmail);
                            object.save(null, {
                                success: function (objectUpdate) {
                                    alert("修改成功, 新邮箱: " + objectUpdate.get("email"));
                                    writeCookies(object);
                                    userEmail.innerText = newUserEmail;
                                    changeUserEmail.disabled = false;
                                    changeUserEmail.innerText = '修改';
                                },
                                error: function (model, error) {
                                    alert('修改失败\n返回错误码：' + error.code + '\n返回错误信息：' + error.message);
                                    changeUserEmail.disabled = false;
                                    changeUserEmail.innerText = '修改';
                                }
                            });
                        },
                        error: function (object, error) {
                            alert('查询失败\n返回错误码：' + error.code + '\n返回错误信息：' + error.message);
                            changeUserEmail.disabled = false;
                            changeUserEmail.innerText = '修改';
                        }
                    });
                } else {
                    changeUserEmail.disabled = false;
                    changeUserEmail.innerText = '修改';
                }
            } else {
                alert('')
                alert('修改失败\n返回错误信息：邮箱格式不正确');
            }
        }
    })
    changeUserInfo.addEventListener('click', function () {
        var newUserInfo = prompt('请输入新的介绍(0~100字)：')
        if (typeof (newUserInfo) == 'string') {
            if (newUserInfo.length > 0 && newUserInfo.length < 101) {
                changeUserInfo.innerText = '修改中';
                changeUserInfo.disabled = 'disabled';
                if (confirm('你确定要将介绍改为" ' + newUserInfo + ' "吗？')) {
                    Bmob.initialize("c4c8b7af88a34d5d587b8d15506b1882", "4298aaed28dfc11c8a492d1828d93539");
                    var User = Bmob.Object.extend("sfUser");
                    var query = new Bmob.Query(User);
                    query.get(json.id, {
                        success: function (object) {
                            // The object was retrieved successfully.
                            object.set("info", newUserInfo);
                            object.save(null, {
                                success: function (objectUpdate) {
                                    alert("修改成功, 新介绍: " + objectUpdate.get("info"));
                                    writeCookies(object);
                                    userInfo.innerText = newUserInfo;
                                    sd_userInfo.firstChild.innerText = newUserInfo;
                                    changeUserInfo.disabled = false;
                                    changeUserInfo.innerText = '修改';
                                },
                                error: function (model, error) {
                                    alert('修改失败\n返回错误码：' + error.code + '\n返回错误信息：' + error.message);
                                    changeUserInfo.disabled = false;
                                    changeUserInfo.innerText = '修改';
                                }
                            });
                        },
                        error: function (object, error) {
                            alert('查询失败\n返回错误码：' + error.code + '\n返回错误信息：' + error.message);
                            changeUserInfo.disabled = false;
                            changeUserInfo.innerText = '修改';
                        }
                    });
                } else {
                    changeUserInfo.disabled = false;
                    changeUserInfo.innerText = '修改';
                }
            } else if (newUserInfo == '') {
                alert('修改失败\n返回错误信息：Are you kidding me?');
            } else if (newUserInfo.length > 10) {
                alert('修改失败\n返回错误信息：你的新介绍太长，服务器表示无法承受。');
            }
        }
    })
}
