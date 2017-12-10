let comments = new Array();
window.onload = function () {
    const commentItems = document.querySelector('#commentItems');
    const comment_input = document.querySelector('#comment_input');
    const comment_btn = document.querySelector('#comment_btn');
    const commentItems_loading = commentItems.children[0];

    Bmob.initialize("c4c8b7af88a34d5d587b8d15506b1882", "4298aaed28dfc11c8a492d1828d93539");
    const Comment = Bmob.Object.extend("sfComment");
    const User = Bmob.Object.extend("sfUser");
    const commentQuery = new Bmob.Query(Comment);
    const userQuery = new Bmob.Query(User);
    commentQuery.descending("createdAt");

    commentQuery.find({
        success: function (results) {
            //获取commentItem所需的主要信息（内容，系统，用户ID，发送时间）
            for (let i = 0; i < results.length; i++) {
                comments[i] = {};
                comments[i].content = results[i].attributes.content;
                comments[i].system = results[i].attributes.system;
                comments[i].browser = results[i].attributes.browser;
                comments[i].userId = results[i].attributes.userId;
                comments[i].createdAt = results[i].createdAt;
            }
            //构建commentItem内容
            for (let i = 0; i < comments.length; i++) {
                //创建commentItem中的各种元素
                let commentItem = document.createElement('div')
                let commentItem_link = document.createElement('a')
                let commentItem_userAvatar = document.createElement('img')
                let commentItem_username = document.createElement('p')
                let commentItem_postingTime = document.createElement('p')
                let commentItem_content = document.createElement('p')
                let commentItem_system = document.createElement('img')
                let commentItem_browser = document.createElement('img')
                //对commentItem中的元素的的属性进行常规赋值操作（主要是一些CSS样式）
                commentItem_link.setAttribute('target', '_blank')
                commentItem_userAvatar.setAttribute('class', 'avatar')
                commentItem_username.setAttribute('class', 'commentItem_username')
                commentItem_postingTime.setAttribute('class', 'commentItem_postingTime')
                commentItem_system.setAttribute('class', 'commentItem_incidental')
                commentItem_browser.setAttribute('class', 'commentItem_incidental')
                commentItem_content.setAttribute('class', 'commentItem_content')
                //对commentItem中的元素的主要内容进行赋值操作（个人主页地址，发送时间，内容,系统，浏览器）
                commentItem_link.setAttribute('href', '/user/profile.html?id=' + comments[i].userId)
                commentItem_postingTime.innerText = comments[i].createdAt
                commentItem_content.innerText = comments[i].content
                //对commentItem中的附带信息（系统）进行赋值操作
                if (comments[i].system[0] == 'Win8-10')
                    commentItem_system.setAttribute('src', '/assets/images/comment/Win8-10.png')
                if (comments[i].system[0] == 'Windows')
                    commentItem_system.setAttribute('src', '/assets/images/comment/Windows.jpg')
                else if (comments[i].system[0] == 'Apple')
                    commentItem_system.setAttribute('src', '/assets/images/comment/Apple.jpg')
                else if (comments[i].system[0] == 'Android')
                    commentItem_system.setAttribute('src', '/assets/images/comment/Android.jpg')
                else if (comments[i].system[0] == 'Linux')
                    commentItem_system.setAttribute('src', '/assets/images/comment/Linux.png')
                else if (comments[i].system[0] == 'unknown')
                    commentItem_system.setAttribute('src', '/assets/images/comment/unknown.png')
                commentItem_system.setAttribute('title', comments[i].system[1])
                //对commentItem中的附带信息（浏览器）进行赋值操作
                if (comments[i].browser[0] == 'Chrome')
                    commentItem_browser.setAttribute('src', '/assets/images/comment/Chrome.png')
                else if (comments[i].browser[0] == 'Firefox')
                    commentItem_browser.setAttribute('src', '/assets/images/comment/Firefox.jpg')
                else if (comments[i].browser[0] == 'Safari')
                    commentItem_browser.setAttribute('src', '/assets/images/comment/Safari.png')
                else if (comments[i].browser[0] == 'Opera')
                    commentItem_browser.setAttribute('src', '/assets/images/comment/Opera.png')
                else if (comments[i].browser[0] == 'Edge')
                    commentItem_browser.setAttribute('src', '/assets/images/comment/Edge.png')
                else if (comments[i].browser[0] == 'QQBrowser')
                    commentItem_browser.setAttribute('src', '/assets/images/comment/QQbrowser.png')
                else if (comments[i].browser[0] == 'Silk')
                    commentItem_browser.setAttribute('src', '/assets/images/comment/Silk.png')
                else
                    commentItem_browser.setAttribute('src', '/assets/images/comment/unknown.png')
                commentItem_browser.setAttribute('title', comments[i].browser[1])
                //对commentItem中的元素的剩余用户内容进行赋值操作（用户名，头像）
                userQuery.get(comments[i].userId, {
                    success: function (user) {
                        //获取commentItem所需的用户信息
                        comments[i].username = user.get('username');
                        comments[i].avatarUrl = user.get('avatarUrl');
                        //向commentItem中的元素写入用户信息
                        commentItem_userAvatar.setAttribute('src', comments[i].avatarUrl)
                        commentItem_username.innerText = comments[i].username
                    },
                    error: function (error) {
                        alert("查询失败: " + error.code + " " + error.message);
                    }
                })
                //实现以上元素，将其添加为commmentItem的子类
                commentItem_link.appendChild(commentItem_userAvatar);
                commentItem.appendChild(commentItem_link);
                commentItem.appendChild(commentItem_username);
                commentItem.appendChild(commentItem_postingTime);
                commentItem.appendChild(commentItem_system);
                commentItem.appendChild(commentItem_browser);
                commentItem.appendChild(commentItem_content);
                commentItems.appendChild(commentItem);
            }
            //隐藏“Loading...”
            commentItems_loading.style.display = 'none';
        },
        error: function (error) {
            alert("查询失败: " + error.code + " " + error.message);
        }
    });
    comment_btn.addEventListener('click', function () {
        if (json.id != undefined) {
            if (comment_input.value != '') {
                comment_btn.disabled = 'disabled';
                comment_btn.innerText = '发布中......'
                //获取系统版本
                var ua = navigator.userAgent
                var system = new Array(2)
                if (ua.indexOf('Windows NT 5.0') > -1 || ua.indexOf("Windows 2000") > -1) {
                    system[0] = 'Windows'
                    system[1] = 'Microsoft Windows 2000'
                }
                else if (ua.indexOf('Windows NT 5.1') > -1 || ua.indexOf("Windows XP") > -1) {
                    system[0] = 'Windows'
                    system[1] = 'Microsoft Windows XP';
                }
                else if (ua.indexOf('Windows NT 5.2') > -1 || ua.indexOf("Windows 2003") > -1) {
                    system[0] = 'Windows'
                    system[1] = 'Microsoft Windows 2003'
                }
                else if (ua.indexOf('Windows NT 6.0') > -1 || ua.indexOf("Windows Vista") > -1) {
                    system[0] = 'Windows'
                    system[1] = 'Microsoft Windows Vista'
                }
                else if (ua.indexOf('Windows NT 6.1') > -1 || ua.indexOf("Windows 7") > -1) {
                    system[0] = 'Windows'
                    system[1] = 'Microsoft Windows 7'
                }
                else if (ua.indexOf('Windows NT 6.2') > -1 || ua.indexOf("Windows 8") > -1) {
                    system[0] = 'Win8-10'
                    system[1] = 'Microsoft Window 8'
                }
                else if (ua.indexOf('Windows NT 6.3') > -1 || ua.indexOf("Windows 8.1") > -1) {
                    system[0] = 'Win8-10'
                    system[1] = 'Microsoft Windows 8.1'
                }
                else if (ua.indexOf('Windows NT 10.0') > -1 || ua.indexOf("Windows 10") > -1) {
                    system[0] = 'Win8-10'
                    system[1] = 'Microsoft Windows 10'
                }
                else if (ua.indexOf('Android') > -1) {
                    system[0] = 'Android'
                    system[1] = ua.split(';')[1]
                }
                else if (ua.indexOf('iPhone') > -1) {
                    system[0] = 'Apple'
                    system[1] = 'IOS ' + navigator.userAgent.match(/CPU iPhone OS (.*?) like Mac OS X/)[1].replace(/_/g, '.')
                }
                else if (ua.indexOf('Linux') > -1) {
                    system[0] = 'Linux'
                    system[1] = 'Linux'
                }
                else {
                    system[0] = 'unknown'
                    system[1] = "未知系统"
                }
                if (ua.indexOf("x64") > -1 || ua.indexOf("WOW64") > -1)
                    system[1] += ' 64位'
                else if (system[0] == 'Windows' || system[0] == 'Win8-10')
                    system[1] += ' 32位'
                //获取浏览器
                var browser = new Array(2)
                if (ua.indexOf('Firefox') > -1) {
                    browser[0] = 'Firefox'
                    browser[1] = 'Mozilla Firefox'
                } else if (ua.indexOf('Opera' || 'OPR') > -1) {
                    browser[0] = 'Opera'
                    browser[1] = 'Opera'
                } else if (ua.indexOf('Edge') > -1) {
                    browser[0] = 'Edge'
                    browser[1] = 'Microsoft Edge'
                } else if (ua.indexOf('QQBrowser') > -1) {
                    browser[0] = 'QQBrowser'
                    browser[1] = 'QQ浏览器'
                } else if (ua.indexOf('Chrome') > -1) {
                    browser[0] = 'Chrome'
                    browser[1] = 'Google Chrome'
                } else if (ua.indexOf('Silk') > -1) {
                    browser[0] = 'Silk'
                    browser[1] = 'Amazon Silk'
                } else if (ua.indexOf('Safari') > -1) {
                    browser[0] = 'Safari'
                    browser[1] = 'Apple Safari'
                } else {
                    browser[0] = 'unknown'
                    browser[1] = "未知浏览器"
                }
                commentQuery.find({
                    success: function (results) {
                        var comment = new Comment();
                        comment.set('userId', json.id);
                        comment.set('system', system);
                        comment.set('browser', browser);
                        comment.set('ua', ua);
                        comment.set('content', comment_input.value);
                        comment.save(null, {
                            success: function (comment) {
                                alert('发布成功！');
                                window.location.reload();
                            },
                            error: function (comment, error) {
                                alert('发布失败\n返回错误码：' + error.code + '\n返回错误信息：' + error.message);
                                comment_btn.disabled = false;
                                comment_btn.innerText = '发布'
                            }
                        });
                    },
                    error: function (error) {
                        alert('发布失败\n返回错误码：' + error.code + '\n返回错误信息：' + error.message);
                        comment_btn.disabled = false;
                        comment_btn.innerText = '发布'
                    }
                });
            } else {
                alert('发布失败\n返回错误信息：内容不能为空。');
                comment_btn.disabled = false;
                comment_btn.innerText = '发布'
            }
        } else {
            alert('发布失败\n返回错误信息：请先登录账号。');
            comment_btn.disabled = false;
            comment_btn.innerText = '发布'
        }
    })
}