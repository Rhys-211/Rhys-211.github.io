window.onload = function(){
    var musicOfHaiyang = document.querySelector('#musicOfHaiyang')
    var srcOfHaiyang = '//music.163.com/outchain/player?type=2&id='
    if(Math.random() < 0.5)
        srcOfHaiyang += '33911781&auto=0&height=66'
    else
        srcOfHaiyang += '28828078&auto=0&height=66'
        musicOfHaiyang.setAttribute('src',srcOfHaiyang)
    
    document.querySelector("#developer3").addEventListener('click',function(){
        window.open("../other/haiyangshen.html")
    })
}
