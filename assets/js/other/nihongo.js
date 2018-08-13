function getVowel(kana) {
    if (kana.length != 1)
        console.error('This is a wrong length.')
    if (
        kana == 'あ' ||
        kana == 'か' ||
        kana == 'さ' ||
        kana == 'た' ||
        kana == 'な' ||
        kana == 'は' ||
        kana == 'ま' ||
        kana == 'や' ||
        kana == 'ら' ||
        kana == 'わ' ||
        kana == 'が' ||
        kana == 'ざ' ||
        kana == 'だ' ||
        kana == 'ば' ||
        kana == 'ぱ'
    ) return 'a'

    else if (
        kana == 'い' ||
        kana == 'き' ||
        kana == 'し' ||
        kana == 'ち' ||
        kana == 'に' ||
        kana == 'ひ' ||
        kana == 'み' ||
        kana == 'り' ||
        kana == 'ぎ' ||
        kana == 'じ' ||
        kana == 'ぢ' ||
        kana == 'び' ||
        kana == 'ぴ'
    ) return 'i'

    else if (
        kana == 'う' ||
        kana == 'く' ||
        kana == 'す' ||
        kana == 'つ' ||
        kana == 'ぬ' ||
        kana == 'ふ' ||
        kana == 'む' ||
        kana == 'ゆ' ||
        kana == 'る' ||
        kana == 'ぐ' ||
        kana == 'ず' ||
        kana == 'づ' ||
        kana == 'ぶ' ||
        kana == 'ぷ'
    ) return 'u'

    else if (
        kana == 'え' ||
        kana == 'け' ||
        kana == 'せ' ||
        kana == 'て' ||
        kana == 'ね' ||
        kana == 'へ' ||
        kana == 'め' ||
        kana == 'れ' ||
        kana == 'げ' ||
        kana == 'ぜ' ||
        kana == 'で' ||
        kana == 'べ' ||
        kana == 'ぺ'
    ) return 'e'

    else if (
        kana == 'お' ||
        kana == 'こ' ||
        kana == 'そ' ||
        kana == 'と' ||
        kana == 'の' ||
        kana == 'ほ' ||
        kana == 'も' ||
        kana == 'よ' ||
        kana == 'ろ' ||
        kana == 'ご' ||
        kana == 'ぞ' ||
        kana == 'ど' ||
        kana == 'ぼ' ||
        kana == 'ぽ'
    ) return 'o'

    else
        console.error('It is not a right kana.')
}
function isSpeGodan(word) {
    if (
        word == '要る' ||
        word == '焦る' ||
        word == '帰る' ||
        word == '限る' ||
        word == '切る' ||
        word == '蹴る' ||
        word == '滑る' ||
        word == '知る' ||
        word == '握る' ||
        word == '捻る' ||
        word == '入る' ||
        word == '練る' ||
        word == '走る' ||
        word == '参る' ||
        word == '減る' ||
        word == '滅入る' ||
        word == '交じる' ||
        word == '嘲る' || word == 'あざける' ||
        word == '遮る' || word == 'さえぎる' ||
        word == '喋る' || word == 'しゃべる' ||
        word == '罵る' || word == 'ののしる' ||
        word == '覆る' || word == 'くつがえる' ||
        word == '翻る' || word == 'ひるがえる' ||
        word == '蘇る' || word == '甦る' || word == 'よみがえる'
    )
        return true;
}
function convertKana(kana, newVowel) {
    const kanas = [
        ['あ', 'い', 'う', 'え', 'お'],
        ['か', 'し', 'く', 'け', 'こ'],
        ['が', 'ぎ', 'ぐ', 'げ', 'ご'],
        ['さ', 'し', 'す', 'せ', 'そ'],
        ['ざ', 'じ', 'ず', 'ぜ', 'ぞ'],
        ['た', 'ち', 'つ', 'て', 'と'],
        ['だ', 'ぢ', 'づ', 'で', 'ど'],
        ['な', 'に', 'ぬ', 'ね', 'の'],
        ['は', 'ひ', 'ふ', 'へ', 'ほ'],
        ['ば', 'び', 'ぶ', 'べ', 'ぼ'],
        ['ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ'],
        ['ま', 'み', 'む', 'め', 'も'],
        ['や', 'ゝ', 'ゝ', 'ゝ', 'よ'],
        ['ら', 'り', 'る', 'れ', 'ろ'],
        ['わ', 'ゐ', 'ゝ', 'ゑ', 'を']
    ];
    if (newVowel == 'a') newVowel = '0'
    else if (newVowel == 'i') newVowel = '1'
    else if (newVowel == 'u') newVowel = '2'
    else if (newVowel == 'e') newVowel = '3'
    else if (newVowel == 'o') newVowel = '4'
    for (let i = 0; i < kanas.length; i++) {
        for (let j = 0; j < kanas[i].length; j++) {
            if (kana == kanas[i][j])
                return kanas[i][newVowel]
        }
    }
}
function refresh(estimatedVerb) {
    if (estimatedVerb == 0) {
        if (word == 'くる' || word == '来る')
            estimatedVerb = 1
        else if (word == 'する')
            estimatedVerb = 2
        else if (getVowel(word[word.length - 1]) == 'u' && word[word.length - 1] != 'る')
            estimatedVerb = 3
        else if (word[word.length - 1] == 'る') {
            if (isSpeGodan(word) || getVowel(word[word.length - 2]) == 'a' || getVowel(word[word.length - 2]) == 'u' || getVowel(word[word.length - 2]) == 'o')
                estimatedVerb = 3
            else if (getVowel(word[word.length - 2]) == 'i' || getVowel(word[word.length - 2]) == 'e')
                estimatedVerb = 4
            else
                alert('请将倒数第二个字符改写为假名形式。')
        } else
            alert('请将最后一个字符改写为假名形式。')
    }
    if (estimatedVerb == 1) {
        words[0].innerText = '来（き）'
        words[1].innerText = '来（く）る'
        words[2].innerText = '来（こ）ない'
        words[3].innerText = '来（き）た'
        words[4].innerText = '来（こ）なかった'
        words[5].innerText = '来（き）ます'
        words[6].innerText = '来（き）ません'
        words[7].innerText = '来（き）ました'
        words[8].innerText = '来（き）ませんでした'
        words[9].innerText = '来（き）て'
        words[10].innerText = '来（き）まして'
        words[11].innerText = '来（こ）なくて'
        words[12].innerText = '来（き）ませんでして'
        words[13].innerText = '来（こ）られる'
        words[14].innerText = '来（こ）られない'
        words[15].innerText = '来（こ）られた'
        words[16].innerText = '来（こ）られなかった'
        words[17].innerText = '来（く）れば'
    } else if (estimatedVerb == 2) {
        words[0].innerText = 'し'
        words[1].innerText = 'する'
        words[2].innerText = 'しない'
        words[3].innerText = 'した'
        words[4].innerText = 'しなかった'
        words[5].innerText = 'します'
        words[6].innerText = 'しません'
        words[7].innerText = 'しました'
        words[8].innerText = 'しませんでした'
        words[9].innerText = 'して'
        words[10].innerText = 'しまして'
        words[11].innerText = 'しなくて'
        words[12].innerText = 'しませんでして'
        words[13].innerText = '出来（でき）る'
        words[14].innerText = '出来（でき）ない'
        words[15].innerText = '出来（でき）た'
        words[16].innerText = '出来（でき）なかった'
        words[17].innerText = 'すれば'
    } else if (estimatedVerb == 3) {
        if (word == 'いく' || word == '行く') {
            words[0].innerText = '行（い）き'
            words[1].innerText = '行（い）く'
            words[2].innerText = '行（い）かない'
            words[3].innerText = '行（い）った'
            words[4].innerText = '行（い）かなかった'
            words[5].innerText = '行（い）きます'
            words[6].innerText = '行（い）きません'
            words[7].innerText = '行（い）きました'
            words[8].innerText = '行（い）きませんでした'
            words[9].innerText = '行（い）って'
            words[10].innerText = '行（い）きまして'
            words[11].innerText = '行（い）かなくて'
            words[12].innerText = '行（い）きませんでして'
            words[13].innerText = '行（い）ける'
            words[14].innerText = '行（い）けない'
            words[15].innerText = '行（い）けた'
            words[16].innerText = '行（い）けなかった'
            words[17].innerText = '行（い）けば'
        } else if (word == 'ある' || word == '有る') {
            words[0].innerText = '有（あ）り'
            words[1].innerText = '有（あ）る'
            words[2].innerText = '無（な）い'
            words[3].innerText = '有（あ）った'
            words[4].innerText = '無（な）かった'
            words[5].innerText = '有（あ）ります'
            words[6].innerText = '無（な）いです/有（あ）りません'
            words[7].innerText = '有（あ）りました'
            words[8].innerText = '無（な）かったです/有（あ）りませんでした'
            words[9].innerText = '有（あ）って'
            words[10].innerText = '有（あ）りまして'
            words[11].innerText = '無（な）くて'
            words[12].innerText = '無（な）かってです/有（あ）りませんでして'
            words[13].innerText = '有（あ）り得（え/う）る'
            words[14].innerText = '有（あ）り得（え）ない'
            words[15].innerText = '有（あ）り得（え）た'
            words[16].innerText = '有（あ）り得（え）なかった'
            words[17].innerText = '有（あ）れば'
        } else {
            let front = word.substring(0, word.length - 1)
            let after = word.substring(word.length - 1)
            words[0].innerText = front + convertKana(after, 'i')
            words[1].innerText = word
            words[2].innerText = front + convertKana(after, 'a') + 'ない'
            if (after == 'す') words[3].innerText = front + 'した'
            else if (after == 'く') words[3].innerText = front + 'いた'
            else if (after == 'ぐ') words[3].innerText = front + 'いだ'
            else if (after == 'む' || after == 'ぶ' || after == 'ぬ') words[3].innerText = front + 'んだ'
            else if (after == 'る' || after == 'う' || after == 'つ') words[3].innerText = front + 'っだ'
            words[4].innerText = front + convertKana(after, 'a') + 'なかった'
            words[5].innerText = words[0].innerText + 'ます'
            words[6].innerText = words[0].innerText + 'ません'
            words[7].innerText = words[0].innerText + 'ました'
            words[8].innerText = words[0].innerText + 'ませんでした'
            if (after == 'す') words[9].innerText = front + 'して'
            else if (after == 'く') words[9].innerText = front + 'いて'
            else if (after == 'ぐ') words[9].innerText = front + 'いで'
            else if (after == 'む' || after == 'ぶ' || after == 'ぬ') words[9].innerText = front + 'んで'
            else if (after == 'る' || after == 'う' || after == 'つ') words[9].innerText = front + 'っで'
            words[10].innerText = words[0].innerText + 'まして'
            words[11].innerText = front + convertKana(after, 'a') + 'なくて'
            words[12].innerText = words[0].innerText + 'ませんでして'
            words[13].innerText = front + convertKana(after, 'e') + 'る'
            words[14].innerText = front + convertKana(after, 'e') + 'ない'
            words[15].innerText = front + convertKana(after, 'e') + 'た'
            words[16].innerText = front + convertKana(after, 'e') + 'なかった'
            words[17].innerText = front + convertKana(after, 'e') + 'ば'
        }
    } else if (estimatedVerb == 4) {
        words[0].innerText = word.substring(0, word.length - 1)
        words[1].innerText = word
        words[2].innerText = words[0].innerText + 'ない'
        words[3].innerText = words[0].innerText + 'た'
        words[4].innerText = words[0].innerText + 'なかった'
        words[5].innerText = words[0].innerText + 'ます'
        words[6].innerText = words[0].innerText + 'ません'
        words[7].innerText = words[0].innerText + 'ました'
        words[8].innerText = words[0].innerText + 'ませんでした'
        words[9].innerText = words[0].innerText + 'て'
        words[10].innerText = words[0].innerText + 'まして'
        words[11].innerText = words[0].innerText + 'なくて'
        words[12].innerText = words[0].innerText + 'ませんでして'
        words[13].innerText = words[0].innerText + 'られる'
        words[14].innerText = words[0].innerText + 'られない'
        words[15].innerText = words[0].innerText + 'られた'
        words[16].innerText = words[0].innerText + 'られなかった'
        words[17].innerText = words[0].innerText + convertKana(word[word.length - 1], 'e') + 'ば'
    }
}
let type = 0, verb = 0, word;
let words = document.querySelectorAll('span#words');
let typeBtns = document.querySelectorAll('#type button');
let verbBtns = document.querySelectorAll('#verb button');
typeBtns[type].style.background = "#111";
verbBtns[verb].style.background = "#111";
document.querySelector('input').addEventListener('change', function () {
    word = document.querySelector('input').value;
    refresh(verb)
})
for (let i = 0; i < 3; i++) {
    typeBtns[i].addEventListener('click', function () {
        if (i != 0)
            alert('暂不支持。')
    })
}
for (let i = 0; i < 5; i++) {
    verbBtns[i].addEventListener('click', function () {
        verbBtns[verb].style.background = "#333";
        verb = i;
        verbBtns[verb].style.background = "#111";
        refresh(verb)
    })
}


