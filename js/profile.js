window.onload = function () {
    main();
    const username = document.getElementById('username');
    const userInfo = document.getElementById('userInfo');
    const userAcntNum = document.getElementById('userAcntNum');
    const userAvatar = document.getElementById('userAvatar');
    const userID = document.getElementById('userID');
    const title = document.getElementById('title');
    if (window.location.search != '') {
        const search = window.location.search.split('?')[1].split('=');
        if (search[0] == 'id') {
            Bmob.initialize("c4c8b7af88a34d5d587b8d15506b1882", "4298aaed28dfc11c8a492d1828d93539");
            var User = Bmob.Object.extend("User");
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
                    userAcntNum.innerText = user.get('accountNumber');
                    userAvatar.setAttribute('src', user.get('avatarUrl'));
                },
                error: function (object, error) {
                    // 查询失败
                    alert("查询失败")
                }
            });
        } else
            alert("你网址打错了吧_(:з)∠)_")
    } else {
        if (document.cookie == '')
            window.open('/index.html', '_self')
        else {
            let json = JSON.parse(document.cookie.slice(5));
            userID.innerText = json.id;
            userInfo.innerText = json.info;
            username.innerText = json.username;
            userAcntNum.innerText = json.acntNum;
            userAvatar.setAttribute('src', json.avatarUrl);
        }
    }
}
