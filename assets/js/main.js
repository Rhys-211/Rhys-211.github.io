'use strict'
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
let json = {};
function main() {
    function menu2nd_mouseover(menu2nd, menu2nd_sub) {
        menu2nd.addEventListener('mouseover', function () {
            sd_game_sub.style.display = 'none';
            sd_user_sub.style.display = 'none';
            sd_other_sub.style.display = 'none';
            menu2nd_sub.style.display = 'block';
        })
    }
    function menu3rd_mouseover(menu3rd, menu3rd_sub) {
        menu3rd.addEventListener('mouseover', function () {
            sd_game_normal_sub.style.display = 'none';
            sd_game_abnormal_sub.style.display = 'none';
            menu3rd_sub.style.display = 'block';
        })
    }
    function hideSidebar() {
        sidebar.style.right = '-300px';
        mask.style.backgroundColor = 'rgba(0,0,0,0)';
        mask.style.display = 'none'
        sd_game_sub.style.display = 'none';
        sd_user_sub.style.display = 'none';
        sd_other_sub.style.display = 'none';
        sd_game_normal_sub.style.display = 'none';
        sd_game_abnormal_sub.style.display = 'none';
    }
    function showSidebar() {
        sidebar.style.right = 0;
        mask.style.display = 'block';
        mask.style.right = '300px';
        mask.style.backgroundColor = 'rgba(0,0,0,0.2)';
    }

    const top_right = document.getElementById('tp_right');
    const mask = document.getElementById('mask');
    const sidebar = document.getElementById('sidebar');
    const sd_register = document.getElementById('sd_register');
    const sd_signIn = document.getElementById('sd_signIn');
    const sd_user = document.getElementById('sd_user');
    const sd_userSignOut = document.getElementById('sd_userSignOut');
    const sd_user_signOut = document.getElementById('sd_user_signOut');
    const sd_userAvatar = document.getElementById('sd_userAvatar');
    const sd_username = document.getElementById('sd_username');
    const sd_userInfo = document.getElementById('sd_userInfo');
    const sd_game = document.getElementById('sd_game');
    const sd_game_sub = document.getElementById('sd_game_sub');
    const sd_game_abnormal_winmine = document.getElementById('sd_game_abnormal_winmine');
    const sd_game_normal = document.getElementById('sd_game_normal');
    const sd_game_abnormal = document.getElementById('sd_game_abnormal');
    const sd_game_normal_sub = document.getElementById('sd_game_normal_sub');
    const sd_game_abnormal_sub = document.getElementById('sd_game_abnormal_sub');
    const sd_other = document.getElementById('sd_other');
    const sd_other_test = document.getElementById('sd_other_test');
    const sd_back = document.getElementById('sd_back');

    top_right.addEventListener('click', showSidebar)
    mask.addEventListener('click', hideSidebar)
    sd_back.addEventListener('click', hideSidebar)
    menu2nd_mouseover(sd_game, sd_game_sub)
    menu2nd_mouseover(sd_other, sd_other_sub)
    menu2nd_mouseover(sd_userAvatar, sd_user_sub)
    menu3rd_mouseover(sd_game_normal, sd_game_normal_sub)
    menu3rd_mouseover(sd_game_abnormal, sd_game_abnormal_sub)

    sd_game_abnormal_winmine.addEventListener('click', function () {
        if (confirm("您确认要打开 扫雷 吗？\n\n最低配置：\nCPU: AMD Ryzen Threadripper 1950X\n显卡: GeForce GTX 1080 Ti\n内存: 128GB\n\n推荐配置:\nCPU：神威·太湖之光\n显卡：六十四路 NVIDIA TITAN Xp\n内存：6144GB") == 1)
            window.open('/game/winmine.html');
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
        console.log('Hello,' + json.username + '!\nYour "id" is ' + json.id + '.\nYour "Info" is ' + json.info + '.\nYour "acntNmb" is ' + json.acntNmb + '.\nYour "email" is ' + json.email + '.\nYour "avatarUrl" is ' + json.avatarUrl + '.')
        sd_user.style.display = 'block';
        sd_userSignOut.style.display = 'none';
        sd_username.querySelector('p').innerText = json.username;
        sd_userInfo.querySelector('p').innerText = json.info;
        sd_userAvatar.querySelector('img').setAttribute('src', json.avatarUrl);
    }
}
