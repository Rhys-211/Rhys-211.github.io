window.onload = function () {
    main()
    const loadArea = document.querySelector('#loadArea')
    const load_progress = document.querySelector('progress')
    const load_start = document.querySelector('#start')
    function canPlay(){
        load_start.innerText = 'PLAY'
        load_start.addEventListener('click', function () {
            const canvas = document.querySelector('canvas')
            loadArea.style.display = 'none';
            canvas.style.display = '';
            initGame()
        })
    }
    function checkLoaded(){
        let checkHasLoaded = setInterval(function () {
            if (load_progress.getAttribute('value') == 2) {
                clearInterval(checkHasLoaded);
                canPlay()
            }
        }, 500)
        setTimeout(function () {
            if (load_progress.getAttribute('value') != 2) {
                alert('加载超时，您可以选择开始游戏，但是当您进行游戏时可能会有较大延迟。\nP.S. 由于网站数据存放在国外，所以完全加载成功的概率并不是很高。如果您是强迫症患者，请刷新网页，若不是可以选择开始游戏。')
                canPlay()
            }
        }, 60000)
    }
    function loadImage(src){
        let img = new Image()
        img.onload = function(){
            progress.setAttribute('value', parseInt(progress.getAttribute('value')) + 1)
        }
        img.src = src
    }
    function loadImages(){
        loadImage('images/raiden/bullet.png')
        loadImage('images/raiden/fighter.png')
    } 
    function loadGame() {
        const loadArea = document.querySelector('#loadArea')
        const load_progress = document.querySelector('progress')
        const load_start = document.querySelector('#start')
        loadImages()
        checkLoaded()
    }
    function initGame() {
        alert('游戏开发中，目前仅有移动与攻击功能。')
        const canvas = document.querySelector('canvas')
        const context = canvas.getContext('2d')
        class Bullet {
            constructor() {
                this.img = new Image()
                this.img.src = '/images/raiden/bullet.png'
                this.x = fighter.x + fighter.img.width / 2 - this.img.width / 2;
                this.y = fighter.y - this.img.height;
                this.speed = 2;
            }
        }
        let fighter = {
            img: new Image(),
            x: 488,
            y: 540,
            speed: 2,
            keyDowns: {},
            keyActions: {
                a: function () {
                    fighter.x -= fighter.speed
                },
                d: function () {
                    fighter.x += fighter.speed
                },
                w: function () {
                    fighter.y -= fighter.speed
                },
                s: function () {
                    fighter.y += fighter.speed
                }
            }
        }
        let bullets = new Array;
        fighter.img.onload = function () {
            context.drawImage(fighter.img, fighter.x, fighter.y)
        };
        fighter.img.src = '/images/raiden/fighter.png';
        window.addEventListener('keydown', function (event) {
            fighter.keyDowns[event.key] = true
        })
        window.addEventListener('keyup', function (event) {
            fighter.keyDowns[event.key] = false
        })
        //更新画面
        setInterval(function () {
            //擦除
            for (let i = 0; i < bullets.length; i++) {
                let bullet = bullets[i]
                context.clearRect(bullet.x, bullet.y, bullet.img.width, bullet.img.height)
            }
            context.clearRect(fighter.x, fighter.y, fighter.img.width, fighter.img.height)
            //移动
            let keys = Object.keys(fighter.keyActions)
            for (let i = 0; i < keys.length; i++) {
                let key = keys[i]
                if (fighter.keyDowns[key])
                    fighter.keyActions[key]()
            }
            for (let i = 0; i < bullets.length; i++) {
                let bullet = bullets[i]
                bullets[i].y -= bullet.speed
            }
            //绘制
            for (let i = 0; i < bullets.length; i++) {
                let bullet = bullets[i]
                context.drawImage(bullet.img, bullet.x, bullet.y)
            }
            context.drawImage(fighter.img, fighter.x, fighter.y)
        }, 1000 / 60)
        //发射子弹
        setInterval(function () {
            bullets[bullets.length] = new Bullet();
            var bullet = bullets[bullets.length - 1]
            context.drawImage(bullet.img, bullet.x, bullet.y)
        }, 500)
    }
    loadGame()
}