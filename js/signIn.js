window.onload = function(){
    main();
    const acntNmb = document.getElementById('acntNmb_input');
    const pwd = document.getElementById('pwd_input');
    const acntNmb_info = document.getElementById('acntNmb_info');
    const pwd_info = document.getElementById('pwd_info');
    acntNmb.addEventListener('change',function(){
        if(acntNmb.value == ''){
            acntNmb_info.innerText = '请输入账号';
            acntNmb_info.style.color = 'orange';
            acntNmb_usable = false;
        }
        else{
            acntNmb_info.innerText = '已输入账号';
            acntNmb_info.style.color = '#32CD32';
            acntNmb_usable = true;
        }
    });
    pwd.addEventListener('change',function(){
        if(pwd.value == ''){
            pwd_info.innerText = '请输入密码';
            pwd_info.style.color = 'orange';
            pwd_usable = false;
        }
        else{
            pwd_info.innerText = '已输入密码';
            pwd_info.style.color = '#32CD32';
            pwd_usable = true;
        }
    });
    document.getElementById('signIn_btn').onclick = function(){
        if(acntNmb.value != '' && pwd.value != ''){
            alert('233')
        }
        else{
            alert('请检查上述诸项是否均符合要求。')
        }
    };
}