const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const loadArea = document.querySelector('#loadArea')
const load_progress = document.querySelector('#progress')
const load_start = document.querySelector('#start')

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
function loadImage(src) {
    let img = new Image()
    img.onload = function () {
        progress.setAttribute('value', parseInt(progress.getAttribute('value')) + 1)
    }
    img.src = src
}
function loadImages() {
    loadImage('/assets/images/unera/background.png')
    loadImage('/assets/images/unera/loadArchive.png')
    loadImage('/assets/images/unera/newArchive.png')
}
function loadAudio(src) {
    new Audio(src).addEventListener('canplaythrough', function () {
        load_progress.setAttribute('value', parseInt(progress.getAttribute('value')) + 1)
    })
}
function loadAudioes() {
    loadAudio('/assets/audio/unera/startbgm.mp3')
}
function loadGame() {
    loadImages()
    loadAudioes()
    checkLoaded()
}
function checkLoaded() {
    let checkHasLoaded = setInterval(function () {
        if (load_progress.getAttribute('value') == load_progress.getAttribute('max')) {
            clearInterval(checkHasLoaded);
            finishLoadingGame()
        }
    }, 500)
    setTimeout(function () {
        if (load_progress.getAttribute('value') != load_progress.getAttribute('max')) {
            alert('加载超时，您可以选择开始游戏，但是当您进行游戏时可能会有较大延迟。\nP.S. 由于网站数据存放在国外，所以完全加载成功的概率并不是很高。如果您是强迫症患者，请刷新网页，若不是可以选择开始游戏。')
            finishLoadingGame()
        }
    }, 60000)
}
function finishLoadingGame(){
    load_start.innerText = 'PLAY'
    load_start.addEventListener('click', function () {
        const canvas = document.querySelector('canvas')
        loadArea.style.display = 'none';
        canvas.style.display = '';
        initGame()
    })
}
function getImg(src, x, y, width, height) {
    let img = new Image();
    img.onload = function () {
        context.drawImage(this, x, y, width, height);
    };
    img.src = src;
    return img;
}
function initGame() {
    const startbgm = new Audio('/assets/audio/unera/startbgm.mp3');
    startbgm.play();
    startbgm.setAttribute('loop', 'loop');
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
        if (context.isPointInPath(event.offsetX, event.offsetY)) {
            if (localStorage.id)
                alert('暂未开启')
            else
                alert('请先登录账号，再进行其他操作。')
        }
        //检测读取存档
        context.beginPath();
        context.rect(900, 300, 360, 120)
        if (context.isPointInPath(event.offsetX, event.offsetY))
            if (localStorage.id)
                alert('暂未开启')
            else
                alert('请先登录账号，再进行其他操作。')
    })
    let startScene = new Scene('/assets/images/unera/background.png');
    startScene.drawBackground();
    startScene.newArchive = getImg('/assets/images/unera/newArchive.png', 880, 100, 360, 120)
    startScene.loadArchive = getImg('/assets/images/unera/loadArchive.png', 880, 300, 360, 120)
}
loadGame();