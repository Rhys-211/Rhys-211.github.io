'use strict'

let json = {};
const top_right = document.getElementById('tp_right');
const mask = document.getElementById('mask');
const sidebar = document.getElementById('sidebar');
const sd_user = document.getElementById('sd_user');
const sd_userSign = document.getElementById('sd_userSign');
const sd_user_signOut = document.getElementById('sd_user_signOut');
const sd_userAvatar = document.getElementById('sd_userAvatar');
const sd_username = document.getElementById('sd_username');
const sd_userInfo = document.getElementById('sd_userInfo');
const sd_back = document.getElementById('sd_back');
const sdSelections = document.querySelectorAll('.sdSelection')
//function(s) to User
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
//functions to all pages
function hideSidebar() {
    sidebar.style.right = '-300px';
    mask.style.backgroundColor = 'rgba(0,0,0,0)';
    mask.style.display = 'none'

    for (let i of sdSelections) {
        i.children[0].style.display = 'none';
    }
}
function showSidebar() {
    sidebar.style.right = 0;
    mask.style.display = 'block';
    mask.style.right = '300px';
    mask.style.backgroundColor = 'rgba(0,0,0,0.2)';
}

//add some events
for (let i of sdSelections) {
    i.addEventListener('mouseover', function () {
        for (let j of sdSelections) {
            j.children[0].style.display = 'none';
        }
        i.children[0].style.display = 'block';
    })
}
sd_back.addEventListener('click', hideSidebar)
top_right.addEventListener('click', showSidebar)
mask.addEventListener('click', hideSidebar)

sd_user_signOut.addEventListener('click', function () {
    document.cookie = 'json=1;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    alert('注销成功');
    window.location.reload();
})
//to get some information of user
if (document.cookie != "") {
    json = JSON.parse(document.cookie.slice(5));
    console.log('Hello,' + json.username + '!\nYour "id" is ' + json.id + '.\nYour "Info" is ' + json.info + '.\nYour "acntNmb" is ' + json.acntNmb + '.\nYour "email" is ' + json.email + '.\nYour "avatarUrl" is ' + json.avatarUrl + '.')
    sd_user.style.display = 'block';
    sd_userSign.style.display = 'none';
    sd_username.querySelector('p').innerText = json.username;
    sd_userInfo.querySelector('p').innerText = json.info;
    sd_userAvatar.querySelector('img').setAttribute('src', json.avatarUrl);
}