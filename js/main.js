function main(){
    const top_right = document.getElementById('tp_right');
    const sidebar = document.getElementById('sidebar');
    const sd_game = document.getElementById('sd_game');
    const sd_game_sub = document.getElementById('sd_game_sub');
    const sd_game_ttt = document.getElementById('sd_game_ttt');
    const sd_game_winmine = document.getElementById('sd_game_winmine');
    const sd_back = document.getElementById('sd_back');
    const mask = document.getElementById('mask');
    const sd_register = document.getElementById('sd_register');
    const sd_signIn = document.getElementById('sd_signIn');
    top_right.addEventListener('click',function(){
        sidebar.style.right = 0;
        mask.style.display = 'block';
        mask.style.right = '300px';
        mask.style.backgroundColor = 'rgba(0,0,0,0.2)';
    })
    mask.addEventListener('click',function(){
        sidebar.style.right = '-300px';
        mask.style.backgroundColor = 'rgba(0,0,0,0)';
        mask.style.display = 'none'
        sd_game_sub.style.display = 'none';
        sd_user_sub.style.display = 'none';
    })
    sd_back.addEventListener('click',function(){
        sidebar.style.right = '-300px';
        mask.style.backgroundColor = 'rgba(0,0,0,0)';
        mask.style.display = 'none';
        sd_game_sub.style.display = 'none';
        sd_user_sub.style.display = 'none';
    })
    sd_game.addEventListener('mouseover',function(){
        sd_game_sub.style.display = 'block';
        sd_user_sub.style.display = 'none';
    })
    sd_userAvatar.addEventListener('mouseover',function(){
        sd_user_sub.style.display = 'block';
        sd_game_sub.style.display = 'none';
    })
    sd_game_winmine.addEventListener('click',function(){
        if (confirm("您确认要打开 扫雷 吗？\n\n最低配置：\nCPU: Ryzen Threadripper 1950X\n显卡: Nvidia GTX 1080Ti\n内存: 128GB") == 1)
            window.open('sd_winmine.html');
    })
    sd_register.addEventListener('click',function(){
        window.open('register.html','_self');
    })
    sd_signIn.addEventListener('click',function(){
        window.open('signIn.html','_self');
    })
}