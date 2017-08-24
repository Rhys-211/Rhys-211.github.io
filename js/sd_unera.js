const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

class Scene {
    constructor(src) {
        this.background = new Image();
        this.background.src = src;
        this.drawBackground = function () {
            this.background.onload = function () {
                context.drawImage(this, 0, 0)
            }
        }
        this.update = {}
    }
}
function getImg(src, x, y, width, height) {
    let img = new Image();
    img.onload = function () {
        context.drawImage(this, x, y, width, height);
    };
    img.src = src;
    return img;
}
function startGame() {
    let startbgm = new Audio("audio/startbgm.mp3");
    startbgm.play();
    startbgm.setAttribute('loop','loop');
    canvas.addEventListener('mousemove', function (event) {
        //清空重绘
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(startScene.background, 0, 0)
        //检测新的开始
        context.beginPath();
        context.rect(900, 100, 360, 120)
        if (context.isPointInPath(event.offsetX, event.offsetY))
            context.drawImage(startScene.newArchive, 810, 100, 472, 144)
        else
            context.drawImage(startScene.newArchive, 880, 100, 360, 120)
        //检测读取存档
        context.beginPath();
        context.rect(900, 300, 360, 120)
        if (context.isPointInPath(event.offsetX, event.offsetY))
            context.drawImage(startScene.loadArchive, 810, 300, 472, 144)
        else
            context.drawImage(startScene.loadArchive, 880, 300, 360, 120)
    })
    canvas.addEventListener('click', function (event) {
        //检测新的开始
        context.beginPath();
        context.rect(900, 100, 360, 120)
        if (context.isPointInPath(event.offsetX, event.offsetY)){
            if(json.id == undefined)
                alert('请先登录账号，再进行其他操作。')
            else
                alert('暂未开启')
        }
        //检测读取存档
        context.beginPath();
        context.rect(900, 300, 360, 120)
        if (context.isPointInPath(event.offsetX, event.offsetY))
            if(json.id == undefined)
                alert('请先登录账号，再进行其他操作。')
            else
                alert('暂未开启')
    })
    let startScene = new Scene('images/unera/background.png');
    startScene.drawBackground();
    startScene.newArchive = getImg('images/unera/newArchive.png', 880, 100, 360, 120)
    startScene.loadArchive = getImg('images/unera/loadArchive.png', 880, 300, 360, 120)
}
startGame();