window.onload = function(){
    main();
    if(prompt('请输入预览密码') == 'パスワード'){
        alert("密码正确");
        document.getElementById('gamebox').setAttribute('src','sd_unera_game.html')
    }
    else
        alert("密码错误")
}