window.onload = function () {
    main();
    const commentItems = document.querySelector('#commentItems');
    const comment_input = document.querySelector('#comment_input');
    const comment_btn = document.querySelector('#comment_btn');
    Bmob.initialize("c4c8b7af88a34d5d587b8d15506b1882", "4298aaed28dfc11c8a492d1828d93539");
    var Comment = Bmob.Object.extend("sfComment");
    var User = Bmob.Object.extend("sfUser");
    var query = new Bmob.Query(Comment);
    query.find({
        success: function (results) {
            //遍历评论信息
            for (var i = 0; i < results.length; i++) {
                object = results[i];
                var userQuery = new Bmob.Query(User);
                //获取评论者的部分个人信息
                userQuery.get(object.get('userId'), {
                    success: function (user) {
                        console.log(user.id)
                        //构建commentItem内容
                        let commentItem = document.createElement('div')
                        let commentItem_link = document.createElement('a')
                        let commentItem_userAvatar = document.createElement('img')
                        let commentItem_username = document.createElement('p')
                        let commentItem_postingTime = document.createElement('p')
                        let commentItem_content = document.createElement('p')
                    
                        commentItem_userAvatar.setAttribute('src', user.get('avatarUrl'))
                        commentItem_link.setAttribute('href', '/user/profile.html?id=' + user.id)
                        commentItem_link.setAttribute('target', '_blank')
                        commentItem_username.setAttribute('class', 'commentItem_username')
                        commentItem_postingTime.setAttribute('class', 'commentItem_postingTime')
                        commentItem_content.setAttribute('class', 'commentItem_content')
                    
                        commentItem_username.innerText = user.get('username')
                        commentItem_postingTime.innerText = user.createdAt
                        commentItem_content.innerText = object.get('content')
                    
                        commentItem_link.appendChild(commentItem_userAvatar);
                        commentItem.appendChild(commentItem_link);
                        commentItem.appendChild(commentItem_username);
                        commentItem.appendChild(commentItem_postingTime);
                        commentItem.appendChild(commentItem_content);
                        commentItems.appendChild(commentItem);
                    },
                    error: function (object, error) {
                        alert("查询失败")
                    }
                });
            }
        },
        error: function (error) {
            alert("查询失败: " + error.code + " " + error.message);
        }
    });





    comment_btn.addEventListener('click', function () {
        if (json != {}) {
            if (comment_input.value != '') {
                alert('功能未开启。')
            } else
                alert('内容不能为空。')
        }
        else
            alert('请先登录账号。')
    })
}