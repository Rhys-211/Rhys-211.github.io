function main(){
    const top_right = document.getElementById('top_right');
    const sidebar = document.getElementById('sidebar');
    const sidebar_game = document.getElementById('sidebar_game');
    const sidebar_game_sub = document.getElementById('sidebar_game_sub');
    const sidebar_game_ttt = document.getElementById('sidebar_game_ttt');
    const sidebar_game_winmine = document.getElementById('sidebar_game_winmine');
    const sidebar_back = document.getElementById('sidebar_back');
    const mask = document.getElementById('mask');
    const siderbar_register = document.getElementById('siderbar_register');
    const siderbar_signIn = document.getElementById('siderbar_signIn');
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
        sidebar_game_sub.style.display = 'none';
    })
    sidebar_back.addEventListener('click',function(){
        sidebar.style.right = '-300px';
        mask.style.backgroundColor = 'rgba(0,0,0,0)';
        mask.style.display = 'none';
        sidebar_game_sub.style.display = 'none';
    })
    sidebar_game.addEventListener('mouseover',function(){
        sidebar_game_sub.style.display = 'block';
    })
    sidebar_game_winmine.addEventListener('click',function(){
        if (confirm("您确认要打开 扫雷 吗？\n\n最低配置：\nCPU: Ryzen Threadripper 1950X\n显卡: Nvidia GTX 1080Ti\n内存: 128GB") == 1)
            window.open('sd_winmine.html');
    })
    siderbar_register.addEventListener('click',function(){
        window.open('register.html','_self');
    })
    siderbar_signIn.addEventListener('click',function(){
        alert('功能未开启，敬请期待')
    })
}