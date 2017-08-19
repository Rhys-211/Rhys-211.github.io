window.onload = function () {
    main();
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
    class Box {
        constructor(getBox) {
            this.box = getBox;
            this.clicked = 0;
        }
    }
    const boxes = new Array(9);
    boxes[0] = new Box(document.getElementById('box1'));
    boxes[1] = new Box(document.getElementById('box2'));
    boxes[2] = new Box(document.getElementById('box3'));
    boxes[3] = new Box(document.getElementById('box4'));
    boxes[4] = new Box(document.getElementById('box5'));
    boxes[5] = new Box(document.getElementById('box6'));
    boxes[6] = new Box(document.getElementById('box7'));
    boxes[7] = new Box(document.getElementById('box8'));
    boxes[8] = new Box(document.getElementById('box9'));
    for (let i = 0; i < 9; i++) {
        boxes[i].box.addEventListener('click', function () {
            //轮到玩家
            boxes[i].clicked = 1;
            boxes[i].box.innerText = '❌';
            //判断胜负并输出结果
            if (judgeOutcome() == 1)
                alert("呃，这。。。可能。。是。。因为。。你的电脑。。配置太。。差了，发挥不出我的实力。嗯。。没错。。就是这样。。。")
            //轮到AI
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
                    for(let k = 0;k < 9;k++){
                        if(boxes[k].clicked == 0)
                            allHaveClicked = false;
                    }
                    if(allHaveClicked)
                        break;
                }
            }
            //判断胜负并输出结果
            if (judgeOutcome() == 2)
                alert("愚蠢的玩家呦，想要赢我的话，就痛恨我，憎恨我吧！然后丑陋地活下去吧。逃吧，逃吧，尽力地苟且偷生吧 。然后等到和我有一样的能力的时候，再来找我吧！")
        })
    }
}