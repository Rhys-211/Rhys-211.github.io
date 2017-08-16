let json = {};
function main() {
    const top_right = document.getElementById('tp_right');
    const mask = document.getElementById('mask');
    const sidebar = document.getElementById('sidebar');
    const sd_game = document.getElementById('sd_game');
    const sd_game_sub = document.getElementById('sd_game_sub');
    const sd_game_ttt = document.getElementById('sd_game_ttt');
    const sd_game_winmine = document.getElementById('sd_game_winmine');
    const sd_back = document.getElementById('sd_back');
    const sd_register = document.getElementById('sd_register');
    const sd_signIn = document.getElementById('sd_signIn');
    const sd_user = document.getElementById('sd_user');
    const sd_userSignOut = document.getElementById('sd_userSignOut');
    const sd_user_signOut = document.getElementById('sd_user_signOut');
    const sd_userAvatar = document.getElementById('sd_userAvatar');
    const sd_username = document.getElementById('sd_username');
    const sd_userInfo = document.getElementById('sd_userInfo');
    top_right.addEventListener('click', function () {
        sidebar.style.right = 0;
        mask.style.display = 'block';
        mask.style.right = '300px';
        mask.style.backgroundColor = 'rgba(0,0,0,0.2)';
    })
    mask.addEventListener('click', function () {
        sidebar.style.right = '-300px';
        mask.style.backgroundColor = 'rgba(0,0,0,0)';
        mask.style.display = 'none'
        sd_game_sub.style.display = 'none';
        sd_user_sub.style.display = 'none';
    })
    sd_back.addEventListener('click', function () {
        sidebar.style.right = '-300px';
        mask.style.backgroundColor = 'rgba(0,0,0,0)';
        mask.style.display = 'none';
        sd_game_sub.style.display = 'none';
        sd_user_sub.style.display = 'none';
    })
    sd_game.addEventListener('mouseover', function () {
        sd_game_sub.style.display = 'block';
        sd_user_sub.style.display = 'none';
    })
    sd_userAvatar.addEventListener('mouseover', function () {
        sd_user_sub.style.display = 'block';
        sd_game_sub.style.display = 'none';
    })
    sd_game_winmine.addEventListener('click', function () {
        if (confirm("您确认要打开 扫雷 吗？\n\n最低配置：\nCPU: Ryzen Threadripper 1950X\n显卡: Nvidia GTX 1080Ti\n内存: 128GB") == 1)
            window.open('sd_winmine.html');
    })
    sd_register.addEventListener('click', function () {
        window.open('/user/register.html', '_self');
    })
    sd_signIn.addEventListener('click', function () {
        window.open('/user/signIn.html', '_self');
    })
    sd_user_signOut.addEventListener('click', function () {
        document.cookie = 'json=1;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT';
        alert('注销成功');
        window.location.reload();
    })
    sd_userAvatar.addEventListener('click', function () {
        alert('点我干啥？！(￣▽￣)"')
    })
    if (document.cookie != "") {
        json = JSON.parse(document.cookie.slice(5));
        console.log('Hello,' + json.username + '!\nYour "id" is ' + json.id + '.\nYour "Info" is ' + json.info + '.\nYour "acntNmb" is ' + json.acntNmb + '.\nYour "avatarUrl" is ' + json.avatarUrl + '.')
        sd_user.style.display = 'block';
        sd_userSignOut.style.display = 'none';
        sd_username.firstChild.innerText = json.username;
        sd_userInfo.firstChild.innerText = json.info;
        sd_userAvatar.firstChild.setAttribute('src', json.avatarUrl);


        /*Bmob.initialize("c4c8b7af88a34d5d587b8d15506b1882", "4298aaed28dfc11c8a492d1828d93539");
        var User = Bmob.Object.extend("User");
        //创建查询对象，入口参数是对象类的实例
        var query = new Bmob.Query(User);
        //查询单条数据，第一个参数是这条数据的objectId值
        query.get(json.id, {
            success: function(user) {
                // 查询成功，调用get方法获取对应属性的值
                console.log(user.get("avator"))
            },
            error: function(object, error) {
                console.error('error')// 查询失败
            }
        });*/
    }
}
function writeCookies(object) {
    var time = new Date();
    time.setTime((new Date()).getTime() + 365 * 24 * 60 * 60 * 1000);
    json.id = object.id;
    json.info = object.get('info');
    json.username = object.get('username');
    json.acntNmb = object.get('accountNumber');
    json.avatarUrl = object.get('avatarUrl');
    json.email = object.get('email');
    document.cookie = 'json=' + JSON.stringify(json) + ';path=/;expires=' + time.toGMTString();
}
