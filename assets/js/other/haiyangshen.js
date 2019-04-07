function msgs() {
    alert('海洋神万岁！！！');
    alert('横扫一切牛鬼蛇神！！');
    alert('海洋神是人民心中最红的红太阳！');
    alert('干革命靠肖海洋思想！');
    alert('谁反对肖海洋，就砸烂谁的狗头！');
    alert('海洋阶级专政万岁！！');
    alert('伟大、光荣、正确的中国海洋教万岁！');
    alert('战无不胜的肖海洋思想万岁！');
    alert('海洋神的革命路线胜利万岁！');
    alert('海洋阶级专政下的大民主万岁！');
    alert('伟大导师、伟大领袖、伟大统帅、伟大舵手海洋神万岁！万万岁！');
}
document.querySelector('#b0').style.height = (window.innerWidth - 20) / 16 * 9 + 'px'
document.querySelector('#b0').addEventListener('click', msgs)
let voice = new Array(5)
for (let i = 1; i < 5; i++){
    voice[i] = new Audio()
    voice[i].src = '/assets/audio/haiyangshen/' + i + '.mp3'
    voice[i].load()
}
    

for (let i = 1; i < 5; i++) {
    document.querySelector('#b' + i).style.height = (window.innerWidth - 20) / 49 * 25 + 'px'
    document.querySelector('#b' + i).addEventListener('click', function () {
        voice[i].play()
    })
}
alert('海洋大法好，入教保平安（迫真）\n（顺便说一下，点击页面各张图片都会有惊喜哟）')