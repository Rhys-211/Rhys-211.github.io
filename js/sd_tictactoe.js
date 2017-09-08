window.onload = function () {
    function canPlay(){
        load_start.innerText = 'PLAY'
        load_start.addEventListener('click', function () {
            const canvas = document.querySelector('canvas')
            loadArea.style.display = 'none';
            gamebox.style.display = '';
            new Audio("audio/ttt/start.mp3").play();
        })
    }
    function checkLoaded(){
        let checkHasLoaded = setInterval(function () {
            if (load_progress.getAttribute('value') == 21) {
                clearInterval(checkHasLoaded);
                canPlay()
            }
        }, 500)
        setTimeout(function () {
            if (load_progress.getAttribute('value') != 21) {
                alert('加载超时，您可以选择开始游戏，但是当您进行游戏时可能会有较大延迟。\nP.S. 由于网站数据存放在国外，所以完全加载成功的概率并不是很高。如果您是强迫症患者，请刷新网页，若不是可以选择开始游戏。')
                canPlay()
            }
        }, 60000)
    }
    function loadAudio(src){
        new Audio(src).addEventListener('canplaythrough', function () {
            load_progress.setAttribute('value', parseInt(progress.getAttribute('value')) + 1)
        })
    }
    function loadGame() {
        new Audio("audio/ttt/loading.mp3").play();
        loadAudio("audio/ttt/1AI.mp3")
        loadAudio("audio/ttt/2AI.mp3")
        loadAudio("audio/ttt/3AI.mp3")
        loadAudio("audio/ttt/4AI.mp3")
        loadAudio("audio/ttt/5AI.mp3")
        loadAudio("audio/ttt/6AI.mp3")
        loadAudio("audio/ttt/7AI.mp3")
        loadAudio("audio/ttt/8AI.mp3")
        loadAudio("audio/ttt/1Player.mp3")
        loadAudio("audio/ttt/2Player.mp3")
        loadAudio("audio/ttt/3Player.mp3")
        loadAudio("audio/ttt/4Player.mp3")
        loadAudio("audio/ttt/5Player.mp3")
        loadAudio("audio/ttt/6Player.mp3")
        loadAudio("audio/ttt/7Player.mp3")
        loadAudio("audio/ttt/8Player.mp3")
        loadAudio("audio/ttt/occupiedAI.mp3")
        loadAudio("audio/ttt/occupiedPlayer.mp3")
        loadAudio("audio/ttt/start.mp3")
        loadAudio("audio/ttt/victory.mp3")
        loadAudio("audio/ttt/defeat.mp3")
        checkLoaded()
    }
    function judgeSame(x, y, z) {
        if (boxes[x].clicked == boxes[y].clicked && boxes[y].clicked == boxes[z].clicked) {
            if (boxes[x].clicked == 1)
                return 1
            else if (boxes[x].clicked == 2)
                return 2
            else return 0
        }
    }
    function judgeOutcome() {
        if (judgeSame(0, 1, 2) == 1)
            return 1
        else if (judgeSame(0, 1, 2) == 2)
            return 2
        else if (judgeSame(3, 4, 5) == 1)
            return 1
        else if (judgeSame(3, 4, 5) == 2)
            return 2
        else if (judgeSame(6, 7, 8) == 1)
            return 1
        else if (judgeSame(6, 7, 8) == 2)
            return 2
        else if (judgeSame(0, 3, 6) == 1)
            return 1
        else if (judgeSame(0, 3, 6) == 2)
            return 2
        else if (judgeSame(1, 4, 7) == 1)
            return 1
        else if (judgeSame(1, 4, 7) == 2)
            return 2
        else if (judgeSame(2, 5, 8) == 1)
            return 1
        else if (judgeSame(2, 5, 8) == 2)
            return 2
        else if (judgeSame(0, 4, 8) == 1)
            return 1
        else if (judgeSame(0, 4, 8) == 2)
            return 2
        else if (judgeSame(2, 4, 6) == 1)
            return 1
        else if (judgeSame(2, 4, 6) == 2)
            return 2
        else
            return 0
    }
    function doPlayer(i) {
        if (boxes[i].clicked == 2)
            occupiedAI = true;
        if (boxes[i].clicked == 1)
            occupiedPlayer = true;
        boxes[i].clicked = 1;
        boxes[i].box.innerText = '❌';
    }
    function judgePlayer() {
        if (judgeOutcome() == 1)
            new Audio("audio/ttt/victory.mp3").play();
        else if (occupiedAI)
            new Audio("audio/ttt/occupiedAI.mp3").play();
        else if (occupiedPlayer)
            new Audio("audio/ttt/occupiedPlayer.mp3").play();
        else if (turns[0] == 1)
            new Audio("audio/ttt/1Player.mp3").play();
        else if (turns[0] == 2)
            new Audio("audio/ttt/2Player.mp3").play();
        else if (turns[0] == 3)
            new Audio("audio/ttt/3Player.mp3").play();
        else if (turns[0] == 4)
            new Audio("audio/ttt/4Player.mp3").play();
        else if (turns[0] == 5)
            new Audio("audio/ttt/5Player.mp3").play();
        else if (turns[0] == 6)
            new Audio("audio/ttt/6Player.mp3").play();
        else if (turns[0] == 7)
            new Audio("audio/ttt/7Player.mp3").play();
        else if (turns[0] == 8)
            new Audio("audio/ttt/8Player.mp3").play();
    }
    function doAI() {
        while (true) {
            let j;
            //判断j的值是否在正常范围(1~9)内并修改
            while (true) {
                j = Math.round(Math.random() * 10 - 1);
                if (j != 9 && j != -1)
                    break;
            }
            //判断选定区域是否已画上符号，若无，则涂圈
            if (boxes[j].clicked == 0) {
                boxes[j].box.innerText = '⭕️';
                boxes[j].clicked = 2;
                break;
                //判断是否已画满符号，若画满，则退出循环
            } else {
                let allHaveClicked = true;
                for (let k = 0; k < 9; k++) {
                    if (boxes[k].clicked == 0)
                        allHaveClicked = false;
                }
                if (allHaveClicked) {
                    isOver = true
                    break;
                }
            }
        }
    }
    function judgeAI() {
        if (isOver)
            ;
        else if (turns[1] == 1)
            new Audio("audio/ttt/1AI.mp3").play();
        else if (turns[1] == 2)
            new Audio("audio/ttt/2AI.mp3").play();
        else if (judgeOutcome() == 2)
            new Audio("audio/ttt/defeat.mp3").play();
        else if (turns[1] == 3)
            new Audio("audio/ttt/3AI.mp3").play();
        else if (turns[1] == 4)
            new Audio("audio/ttt/4AI.mp3").play();
        else if (turns[1] == 5)
            new Audio("audio/ttt/5AI.mp3").play();
        else if (turns[1] == 6)
            new Audio("audio/ttt/6AI.mp3").play();
        else if (turns[1] == 7)
            new Audio("audio/ttt/7AI.mp3").play();
        else if (turns[1] == 8)
            new Audio("audio/ttt/8AI.mp3").play();
    }
    class Box {
        constructor(getBox) {
            this.box = getBox;
            this.clicked = 0;
        }
    }
    main();
    const gamebox = document.querySelector('#gamebox')
    const loadArea = document.querySelector('#loadArea')
    const load_start = document.querySelector('#start')
    const load_progress = document.querySelector('progress')
    const boxes = new Array(9);
    let turns = [1, 1];
    let occupiedPlayer = false;
    let occupiedAI = false;
    let isOver = false;
    boxes[0] = new Box(document.getElementById('box1'));
    boxes[1] = new Box(document.getElementById('box2'));
    boxes[2] = new Box(document.getElementById('box3'));
    boxes[3] = new Box(document.getElementById('box4'));
    boxes[4] = new Box(document.getElementById('box5'));
    boxes[5] = new Box(document.getElementById('box6'));
    boxes[6] = new Box(document.getElementById('box7'));
    boxes[7] = new Box(document.getElementById('box8'));
    boxes[8] = new Box(document.getElementById('box9'));
    loadGame()
    for (let i = 0; i < 9; i++) {
        boxes[i].box.addEventListener('click', function () {
            doPlayer(i);
            judgePlayer()
            if (!occupiedPlayer && !occupiedAI)
                turns[0]++;
            setTimeout(function () {
                doAI()
                judgeAI()
                turns[1]++;
                occupiedAI = false;
                occupiedPlayer = false;
            }, 2000);
        })
    }
}