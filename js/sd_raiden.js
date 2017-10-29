window.onload = function () {
    main()
    const loadArea = document.querySelector('#loadArea')
    const load_progress = document.querySelector('#progress')
    const load_start = document.querySelector('#start')
    function drawSkills(context, fighter) {
        const skillUp = new Image()
        skillUp.src = '/images/raiden/skillUp.png'
        const skillUpDisabled = new Image()
        skillUpDisabled.src = '/images/raiden/skillUpDisabled.png'

        context.rect(40, 550, 256, 64)
        context.fillStyle = '#fff'
        context.fill()

        context.beginPath();
        context.moveTo(40, 550);
        context.lineTo(296, 550);
        context.moveTo(40, 614);
        context.lineTo(296, 614);
        context.moveTo(40, 550);
        context.lineTo(40, 614);
        context.moveTo(296, 550);
        context.lineTo(296, 614);
        context.moveTo(104, 550);
        context.lineTo(104, 614);
        context.moveTo(168, 550);
        context.lineTo(168, 614);
        context.moveTo(232, 550);
        context.lineTo(232, 614);
        context.lineWidth = 1;
        context.strokeStyle = "#666666";
        context.stroke();

        context.font = "18px Microsoft Yahei";
        context.fillStyle = '#000'
        context.fillText("Q", 40, 614);
        context.fillText("W", 104, 614);
        context.fillText("E", 168, 614);
        context.fillText("R", 232, 614);

        context.fillStyle = '#fff'
        var skill = {}
        for (let i in fighter.skill) {
            skill[i] = fighter.skill[i]
        }
        for (let i = 55; i < 95; i += 8) {
            context.beginPath();
            context.arc(i, 620, 3, 0, 2 * Math.PI)
            if (skill.q != 0) {
                context.fillStyle = '#000'
                context.fill()
                skill.q--
            }
            else {
                context.fillStyle = '#fff'
                context.stroke();
            }
        }
        for (let i = 119; i < 159; i += 8) {
            context.beginPath();
            context.arc(i, 620, 3, 0, 2 * Math.PI)
            context.beginPath();
            context.arc(i, 620, 3, 0, 2 * Math.PI)
            if (skill.w != 0) {
                context.fillStyle = '#000'
                context.fill()
                skill.w--
            }
            else {
                context.fillStyle = '#fff'
                context.stroke();
            }
        }
        for (let i = 183; i < 223; i += 8) {
            context.beginPath();
            context.arc(i, 620, 3, 0, 2 * Math.PI)
            if (skill.e != 0) {
                context.fillStyle = '#000'
                context.fill()
                skill.e--
            }
            else {
                context.fillStyle = '#fff'
                context.stroke();
            }
        }
        for (let i = 256; i < 275; i += 8) {
            context.beginPath();
            context.arc(i, 620, 3, 0, 2 * Math.PI)
            if (skill.r != 0) {
                context.fillStyle = '#000'
                context.fill()
                skill.r--
            }
            else {
                context.fillStyle = '#fff'
                context.stroke();
            }
        }
        if (fighter.skillPoints > 0) {
            if (fighter.skill.q < 5)
                context.drawImage(skillUp, 48, 500)
            else
                context.drawImage(skillUpDisabled, 48, 500)
            if (fighter.skill.w < 5)
                context.drawImage(skillUp, 112, 500)
            else
                context.drawImage(skillUpDisabled, 112, 500)
            if (fighter.skill.e < 5)
                context.drawImage(skillUp, 175, 500)
            else
                context.drawImage(skillUpDisabled, 175, 500)
            if (fighter.level > 5 && fighter.skill.r == 0 || fighter.level > 10 && fighter.skill.r == 1 || fighter.level > 15 && fighter.skill.r == 2)
                context.drawImage(skillUp, 240, 500)
            else
                context.drawImage(skillUpDisabled, 240, 500)
        }
    }
    function drawLevel(context, level) {
        context.fillStyle = '#fff'
        //画圆圈与半圆
        context.beginPath();
        context.arc(940, 580, 52, -0.28 * Math.PI, 0.28 * Math.PI)
        context.fill()
        context.stroke();
        context.beginPath();
        context.arc(940, 580, 40, 0, 2 * Math.PI)
        context.fill()
        context.stroke();
        //连接圆圈与半圆
        context.beginPath();
        context.moveTo(940, 540);
        context.lineTo(973, 540);
        context.stroke();
        context.beginPath();
        context.moveTo(940, 620);
        context.lineTo(973, 620);
        context.stroke();
        //画等级
        context.beginPath();
        context.arc(905, 605, 15, 0, 2 * Math.PI)
        context.fill()
        context.stroke()
        context.font = "18px Microsoft Yahei";
        context.fillStyle = '#000'
        if (level.length == 1)
            context.fillText(level, 899, 612);
        else
            context.fillText(level, 894, 612);
    }
    function canPlay() {
        load_start.innerText = 'PLAY'
        load_start.addEventListener('click', function () {
            const canvas = document.querySelector('canvas')
            loadArea.style.display = 'none';
            canvas.style.display = '';
            initGame()
        })
    }
    function checkLoaded() {
        let value = load_progress.getAttribute('value');
        let max = load_progress.getAttribute('max');
        let checkHasLoaded = setInterval(function () {
            if (load_progress.getAttribute('value') == load_progress.getAttribute('max')) {
                clearInterval(checkHasLoaded);
                canPlay()
            }
        }, 500)
        setTimeout(function () {
            if (load_progress.getAttribute('value') != load_progress.getAttribute('max')) {
                alert('加载超时，您可以选择开始游戏，但是当您进行游戏时可能会有较大延迟。\nP.S. 由于网站数据存放在国外，所以完全加载成功的概率并不是很高。如果您是强迫症患者，请刷新网页，若不是可以选择开始游戏。')
                canPlay()
            }
        }, 60000)
    }
    function loadImage(src) {
        let img = new Image()
        img.onload = function () {
            progress.setAttribute('value', parseInt(progress.getAttribute('value')) + 1)
        }
        img.src = src
    }
    function loadImages() {
        loadImage('images/raiden/bullet.png')
        loadImage('images/raiden/fighter.png')
        loadImage('images/raiden/fighterE.png')
        loadImage('images/raiden/skillUp.png')
        loadImage('images/raiden/skillUpDisabled.png')
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
            firingInterval: 500,
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
            },
            level: 0,
            skillPoints: 0,
            skill: {
                q: 0,
                w: 0,
                e: 0,
                r: 0
            },
            levelUp: function () {
                if (this.level == 18)
                    return false
                this.level++
                this.skillPoints++
            },
        }
        let bullets = new Array;
        let firstBullet = new Bullet()
        let lastBullet = new Bullet()
        firstBullet = lastBullet;
        let enemies = new Array;
        fighter.img.onload = function () {
            context.drawImage(fighter.img, fighter.x, fighter.y)
            fighter.levelUp()
        };
        fighter.img.src = '/images/raiden/fighter.png';
        window.addEventListener('keydown', function (event) {
            fighter.keyDowns[event.key] = true
        })
        window.addEventListener('keyup', function (event) {
            fighter.keyDowns[event.key] = false
        })
        window.addEventListener('keydown', function (event) {
            if (event.key == 'Enter') {
                fighter.levelUp()
                console.log('level:' + fighter.level + '\nskill points:' + fighter.skillPoints)
            }
        })
        canvas.addEventListener('click', function (event) {
            if (event.offsetX > 48 && event.offsetX < 96 && event.offsetY > 500 && event.offsetY < 548) {
                if (fighter.skillPoints > 0 && fighter.skill.q < 5) {
                    fighter.skill.q++
                    fighter.skillPoints--
                    console.log('level:' + fighter.level + '\nskill points:' + fighter.skillPoints)
                    console.log('q:' + fighter.skill.q + '\nw:' + fighter.skill.w + '\ne:' + fighter.skill.e + '\nr:' + fighter.skill.r)
                }
            } else if (event.offsetX > 112 && event.offsetX < 160 && event.offsetY > 500 && event.offsetY < 548) {
                if (fighter.skillPoints > 0 && fighter.skill.w < 5) {
                    fighter.skill.w++
                    fighter.skillPoints--
                    console.log('level:' + fighter.level + '\nskill points:' + fighter.skillPoints)
                    console.log('q:' + fighter.skill.q + '\nw:' + fighter.skill.w + '\ne:' + fighter.skill.e + '\nr:' + fighter.skill.r)
                }
            } else if (event.offsetX > 175 && event.offsetX < 223 && event.offsetY > 500 && event.offsetY < 548) {
                if (fighter.skillPoints > 0 && fighter.skill.e < 5) {
                    fighter.skill.e++
                    fighter.skillPoints--
                    console.log('level:' + fighter.level + '\nskill points:' + fighter.skillPoints)
                    console.log('q:' + fighter.skill.q + '\nw:' + fighter.skill.w + '\ne:' + fighter.skill.e + '\nr:' + fighter.skill.r)
                }
            } else if (event.offsetX > 240 && event.offsetX < 288 && event.offsetY > 500 && event.offsetY < 548) {
                if (fighter.level - fighter.skill.r * 5 > 5) {
                    fighter.skill.r++
                    fighter.skillPoints--
                    console.log('level:' + fighter.level + '\nskill points:' + fighter.skillPoints)
                    console.log('q:' + fighter.skill.q + '\nw:' + fighter.skill.w + '\ne:' + fighter.skill.e + '\nr:' + fighter.skill.r)
                }
            }
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
            for (let bullet = firstBullet; bullet != null; bullet = bullet.next) {
                bullet.y -= bullet.speed
            }
            for (let i = 0; i < enemies.length; i++) {
                let enemy = enemies[i]
                enemies[i].y += enemy.speed
            }
            //绘制
            drawSkills(context, fighter)
            drawLevel(context, fighter.level.toString())
            for (let bullet = firstBullet; bullet != null; bullet = bullet.next) {
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
            let oldLastBullet = lastBullet;
            lastBullet.next = new Bullet();
            lastBullet = lastBullet.next;
            context.drawImage(lastBullet.img, lastBullet.x, lastBullet.y)
        }, fighter.firingInterval)
        //出现敌人
        setInterval(function () {
            enemies[enemies.length] = new Enemy();
            var enemy = enemies[enemies.length - 1]
            context.drawImage(enemy.img, enemy.x, enemy.y)
        }, 4000)
        //子弹边界判断
        /*setInterval(function () {
            
        }, 100)*/
    }
    loadGame()
}