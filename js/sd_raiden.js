window.onload = function () {
    main()
    const loadArea = document.querySelector('#loadArea')
    const load_progress = document.querySelector('progress')
    const load_start = document.querySelector('#start')
    function drawSkills(context){
        context.beginPath();
        context.moveTo(40,540);
        context.lineTo(296,540);
        context.moveTo(40,604);
        context.lineTo(296,604);
        context.moveTo(40,540);
        context.lineTo(40,604);
        context.moveTo(296,540);
        context.lineTo(296,604);
        context.moveTo(104,540);
        context.lineTo(104,604);
        context.moveTo(168,540);
        context.lineTo(168,604);
        context.moveTo(232,540);
        context.lineTo(232,604);
        context.lineWidth = 1;
        context.strokeStyle = "#666666";

        context.font = "18px Microsoft Yahei";
        context.fillText("Q", 40, 604);
        context.fillText("W", 104, 604);
        context.fillText("E", 168, 604);
        context.fillText("R", 232, 604);

        context.stroke();


        for(let i = 55;i < 95;i+= 8){
            context.beginPath();
            context.arc(i, 610, 3, 0, 2 * Math.PI)
            context.stroke();
        }
        for(let i = 119;i < 159;i+= 8){
            context.beginPath();
            context.arc(i, 610, 3, 0, 2 * Math.PI)
            context.stroke();
        }
        for(let i = 183;i < 223;i+= 8){
            context.beginPath();
            context.arc(i, 610, 3, 0, 2 * Math.PI)
            context.stroke();
        }
        for(let i = 255;i < 295;i+= 8){
            context.beginPath();
            context.arc(i, 610, 3, 0, 2 * Math.PI)
            context.stroke();
        }
    }
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
        let value = load_progress.getAttribute('value');
        let max = load_progress.getAttribute('max');
        let checkHasLoaded = setInterval(function () {
            if (value != max) {
                clearInterval(checkHasLoaded);
                canPlay()
            }
        }, 500)
        setTimeout(function () {
            if (value != max) {
                alert('加载超时，您可以选择开始游戏，但是当您进行游戏时可能会有较大延迟。\nP.S. 由于网站数据存放在国外，所以完全加载成功的概率并不是很高。如果您是强迫症患者，请刷新网页，若不是可以选择开始游戏。')
                canPlay()
                alert('value:' + value)
                alert('max:' + max)
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
        loadImage('images/raiden/fighterE.png')
    } 
    function loadGame() {
        const loadArea = document.querySelector('#loadArea')
        const load_progress = document.querySelector('progress')
        const load_start = document.querySelector('#start')
        loadImages()
        checkLoaded()
    }
    function initGame() {
        alert('游戏开发中，目前仅有移动与 fa♂射 子弹功能。无法攻击到敌人为正常现象。')
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
        class Enemy {
            constructor() {
                this.img = new Image()
                this.img.src = '/images/raiden/fighterE.png'
                this.x = Math.random() * canvas.width;
                this.y = 0;
                this.speed = 0.5;
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
        let enemies = new Array;
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
            context.clearRect(0, 0, canvas.width, canvas.height)
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
            for (let i = 0; i < enemies.length; i++) {
                let enemy = enemies[i]
                enemies[i].y += enemy.speed
            }
            //绘制
            drawSkills(context)
            context.beginPath();
            for (let i = 0; i < bullets.length; i++) {
                let bullet = bullets[i]
                context.drawImage(bullet.img, bullet.x, bullet.y)
            }
            for (let i = 0; i < enemies.length; i++) {
                let enemy = enemies[i]
                context.drawImage(enemy.img, enemy.x, enemy.y)
            }
            context.drawImage(fighter.img, fighter.x, fighter.y)
        }, 1000 / 60)
        //发射子弹
        setInterval(function () {
            bullets[bullets.length] = new Bullet();
            var bullet = bullets[bullets.length - 1]
            context.drawImage(bullet.img, bullet.x, bullet.y)
        }, 500)
        //出现敌人
        setInterval(function () {
            enemies[enemies.length] = new Enemy();
            var enemy = enemies[enemies.length - 1]
            context.drawImage(enemy.img, enemy.x, enemy.y)
        }, 4000)
    }
    loadGame()
}