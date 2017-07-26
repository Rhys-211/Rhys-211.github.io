let acntNmb_usable = false;
let pwd_usable = false;
let pwd2_usable = false;
window.onload = function(){
    main();
    const acntNmb = document.getElementById('acntNmb_input');
    const pwd = document.getElementById('pwd_input');
    const pwd2 = document.getElementById('pwd2_input');
    const acntNmb_info = document.getElementById('acntNmb_info');
    const pwd_info = document.getElementById('pwd_info');
    const pwd2_info = document.getElementById('pwd2_info');
    acntNmb.addEventListener('change',function(){
        if(acntNmb.value == ''){
            acntNmb_info.innerText = '请输入账号';
            acntNmb_info.style.color = 'orange';
            acntNmb_usable = false;
        }
        else{
            acntNmb_info.innerText = '该账号可使用';
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
            pwd_info.innerText = '该密码可使用';
            pwd_info.style.color = '#32CD32';
            pwd_usable = true;
        }
        if(pwd.value == pwd2.value){
            pwd2_info.innerText = '两次密码相符合';
            pwd2_info.style.color = '#32CD32';
            pwd2_usable = true;
        }
        else if(pwd2.value != ''){
            pwd2_info.innerText = '两次密码不相符';
            pwd2_info.style.color = '#FF0000';
            pwd2_usable = false;
        }
    });
    pwd2.addEventListener('change',function(){
        if(pwd2.value == ''){
            pwd2_info.innerText = '请再次输入密码';
            pwd2_info.style.color = 'orange';
            pwd2_usable = false;
        }
        else if(pwd.value == pwd2.value){
            pwd2_info.innerText = '两次密码相符合';
            pwd2_info.style.color = '#32CD32';
            pwd2_usable = true;
        }
        else{
            pwd2_info.innerText = '两次密码不相符';
            pwd2_info.style.color = '#FF0000';
            pwd2_usable = false;
        }
    });
    document.getElementById('register_btn').onclick = function(){
        if(acntNmb_usable == true && pwd_usable == true && pwd2_usable == true){
            alert('233')
        }
        else{
            alert('请检查上述诸项是否均符合要求。')
        }
    };
}