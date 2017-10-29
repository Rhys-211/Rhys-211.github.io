let comments = new Array();
window.onload = function () {
    main();
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
            //获取commentItem所需的主要信息（内容，用户ID，发送时间）
            for (let i = 0; i < results.length; i++) {
                comments[i] = {};
                comments[i].content = results[i].attributes.content;
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
                //对commentItem中的元素的的属性进行常规赋值操作（主要是一些CSS样式）
                commentItem_link.setAttribute('target', '_blank')
                commentItem_username.setAttribute('class', 'commentItem_username')
                commentItem_postingTime.setAttribute('class', 'commentItem_postingTime')
                commentItem_content.setAttribute('class', 'commentItem_content')
                //对commentItem中的元素的主要内容进行赋值操作（个人主页地址，发送时间，内容）
                commentItem_link.setAttribute('href', '/user/profile.html?id=' + comments[i].userId)
                commentItem_postingTime.innerText = comments[i].createdAt
                commentItem_content.innerText = comments[i].content
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
                commentQuery.find({
                    success: function (results) {
                        var comment = new Comment();
                        comment.set("userId", json.id);
                        comment.set("content", comment_input.value);
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