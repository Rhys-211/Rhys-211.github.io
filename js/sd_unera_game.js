window.onload = function(){
    /*const startbgm = document.getElementById('startbgm');
    startbgm.addEventListener('canplaythrough',function(){
        startbgm.play();
        alert('')
    })*/
    const startGame = document.getElementById('startGame');
    var startbgm = document.createElement("audio");
    if (startbgm != null && startbgm.canPlayType && startbgm.canPlayType("audio/mpeg")){
        startbgm.src = "audio/startbgm.mp3";
        startbgm.play();
        startGame.innerText = 'Play';
        startGame.setAttribute('onclick','alert("开发中")');
    }
}