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
function isGodan(word) {
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
        word == '蘇る' || word == '甦る' || word == 'よみがえる' ||

        word == '行く' || word == '有る'
    )
        return true;
}
function convertKana(kana, oldVowel, newVowel) {
    const kanas = [
        ['わ', 'い', 'う', 'え', 'お'],
        ['か', 'き', 'く', 'け', 'こ'],
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
    if (oldVowel == 'a') oldVowel = '0'
    else if (oldVowel == 'i') oldVowel = '1'
    else if (oldVowel == 'u') oldVowel = '2'
    else if (oldVowel == 'e') oldVowel = '3'
    else if (oldVowel == 'o') oldVowel = '4'
    for (let i = 0; i < kanas.length; i++) {
        if (kana == kanas[i][oldVowel])
            return kanas[i][newVowel]
    }
}
function refresh(estimatedVerbType) {
    if(word.length < 2)
        return;
    //判断动词类型
    if (estimatedVerbType == 0) {
        if (word == 'くる' || word == '来る')
            estimatedVerbType = 1
        else if (word == 'する')
            estimatedVerbType = 2
        else if (getVowel(word[word.length - 1]) == 'u' && word[word.length - 1] != 'る')
            estimatedVerbType = 3
        else if (word[word.length - 1] == 'る') {
            if (isGodan(word) || getVowel(word[word.length - 2]) == 'a' || getVowel(word[word.length - 2]) == 'u' || getVowel(word[word.length - 2]) == 'o')
                estimatedVerbType = 3
            else if (getVowel(word[word.length - 2]) == 'i' || getVowel(word[word.length - 2]) == 'e')
                estimatedVerbType = 4
            else
                alert('请将倒数第二个字符改写为假名形式。')
        } else
            alert('请将最后一个字符改写为う段假名形式。')
    }
    if (estimatedVerbType == 1) {
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
        words[17].innerText = '来（こ）られます'
        words[18].innerText = '来（こ）られません'
        words[19].innerText = '来（こ）られました'
        words[20].innerText = '来（こ）られませんでした'
        words[21].innerText = '来（く）れば'
        words[22].innerText = '来（こ）なければ'
        words[23].innerText = '来（こ）よう'
        words[24].innerText = '来（き）ましょう'
        words[25].innerText = '来（こ）させる'
        words[26].innerText = '来（こ）させない'
        words[27].innerText = '来（こ）させた'
        words[28].innerText = '来（こ）させなかった'
        words[29].innerText = '来（こ）させます'
        words[30].innerText = '来（こ）させません'
        words[31].innerText = '来（こ）させました'
        words[32].innerText = '来（こ）させませんでした'
        words[33].innerText = '来（こ）られる'
        words[34].innerText = '来（こ）られない'
        words[35].innerText = '来（こ）られた'
        words[36].innerText = '来（こ）られなかった'
        words[37].innerText = '来（こ）られます'
        words[38].innerText = '来（こ）られません'
        words[39].innerText = '来（こ）られました'
        words[40].innerText = '来（こ）られませんでした'
        words[41].innerText = '来（こ）させられる'
        words[42].innerText = '来（こ）させられない'
        words[43].innerText = '来（こ）させられた'
        words[44].innerText = '来（こ）させられなかった'
        words[45].innerText = '来（こ）させられます'
        words[46].innerText = '来（こ）させられません'
        words[47].innerText = '来（こ）させられました'
        words[48].innerText = '来（こ）させられませんでした'
        words[49].innerText = '来（こ）い'
    } else if (estimatedVerbType == 2) {
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
        words[17].innerText = '出来（でき）ます'
        words[18].innerText = '出来（でき）ません'
        words[19].innerText = '出来（でき）ました'
        words[20].innerText = '出来（でき）ませんでした'
        words[21].innerText = 'すれば'
        words[22].innerText = 'しなければ'
        words[23].innerText = 'しよう'
        words[24].innerText = 'しましょう'
        words[25].innerText = 'させる'
        words[26].innerText = 'させない'
        words[27].innerText = 'させた'
        words[28].innerText = 'させなかった'
        words[29].innerText = 'させます'
        words[30].innerText = 'させません'
        words[31].innerText = 'させました'
        words[32].innerText = 'させませんでした'
        words[33].innerText = 'される'
        words[34].innerText = 'されない'
        words[35].innerText = 'された'
        words[36].innerText = 'されなかった'
        words[37].innerText = 'されます'
        words[38].innerText = 'されません'
        words[39].innerText = 'されました'
        words[40].innerText = 'されませんでした'
        words[41].innerText = 'させられる'
        words[42].innerText = 'させられない'
        words[43].innerText = 'させられた'
        words[44].innerText = 'させられなかった'
        words[45].innerText = 'させられます'
        words[46].innerText = 'させられません'
        words[47].innerText = 'させられました'
        words[48].innerText = 'させられませんでした'
        words[49].innerText = 'しろ'
    } else if (estimatedVerbType == 3) {
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
            words[17].innerText = '行（い）けます'
            words[18].innerText = '行（い）けません'
            words[19].innerText = '行（い）けました'
            words[20].innerText = '行（い）けませんでした'
            words[21].innerText = '行（い）けば'
            words[22].innerText = '行（い）かなければ'
            words[23].innerText = '行（い）こう'
            words[24].innerText = '行（い）きましょう'
            words[25].innerText = '行（い）かせる'
            words[26].innerText = '行（い）かせない'
            words[27].innerText = '行（い）かせた'
            words[28].innerText = '行（い）かせなかった'
            words[29].innerText = '行（い）かせます'
            words[30].innerText = '行（い）かせません'
            words[31].innerText = '行（い）かせました'
            words[32].innerText = '行（い）かせませんでした'
            words[33].innerText = '行（い）かれる'
            words[34].innerText = '行（い）かれない'
            words[35].innerText = '行（い）かれた'
            words[36].innerText = '行（い）かれなかった'
            words[37].innerText = '行（い）かれます'
            words[38].innerText = '行（い）かれません'
            words[39].innerText = '行（い）かれました'
            words[40].innerText = '行（い）かれませんでした'
            words[41].innerText = '行（い）かせられる'
            words[42].innerText = '行（い）かせられない'
            words[43].innerText = '行（い）かせられた'
            words[44].innerText = '行（い）かせられなかった'
            words[45].innerText = '行（い）かせられます'
            words[46].innerText = '行（い）かせられません'
            words[47].innerText = '行（い）かせられました'
            words[48].innerText = '行（い）かせられませんでした'
            words[49].innerText = '行（い）け'
        } else if (word == 'ある' || word == '有る') {
            words[0].innerText = '有（あ）り'
            words[1].innerText = '有（あ）る'
            words[2].innerText = '無（な）い'
            words[3].innerText = '有（あ）った'
            words[4].innerText = '無（な）かった'
            words[5].innerText = '有（あ）ります'
            words[6].innerText = '有（あ）りません'
            words[7].innerText = '有（あ）りました'
            words[8].innerText = '有（あ）りませんでした'
            words[9].innerText = '有（あ）って'
            words[10].innerText = '有（あ）りまして'
            words[11].innerText = '無（な）くて'
            words[12].innerText = '有（あ）りませんでして'
            words[13].innerText = '有（あ）り得（え/う）る'
            words[14].innerText = '有（あ）り得（え）ない'
            words[15].innerText = '有（あ）り得（え）た'
            words[16].innerText = '有（あ）り得（え）なかった'
            words[17].innerText = '有（あ）り得（え）ます'
            words[18].innerText = '有（あ）り得（え）ません'
            words[19].innerText = '有（あ）り得（え）ました'
            words[20].innerText = '有（あ）り得（え）ませんでした'
            words[21].innerText = '有（あ）れば'
            words[22].innerText = '無（な）ければ'
            words[23].innerText = '有（あ）ろう'
            words[24].innerText = '有（あ）りましょう'
            words[25].innerText = '有（あ）らせる'
            words[26].innerText = '有（あ）らせない'
            words[27].innerText = '有（あ）らせた'
            words[28].innerText = '有（あ）らせなかった'
            words[29].innerText = '有（あ）らせます'
            words[30].innerText = '有（あ）らせません'
            words[31].innerText = '有（あ）らせました'
            words[32].innerText = '有（あ）らせませんでした'
            words[33].innerText = '有（あ）られる'
            words[34].innerText = '有（あ）られない'
            words[35].innerText = '有（あ）られた'
            words[36].innerText = '有（あ）られなかった'
            words[37].innerText = '有（あ）られます'
            words[38].innerText = '有（あ）られません'
            words[39].innerText = '有（あ）られました'
            words[40].innerText = '有（あ）られませんでした'
            words[41].innerText = '有（あ）らせられる'
            words[42].innerText = '有（あ）らせられない'
            words[43].innerText = '有（あ）らせられた'
            words[44].innerText = '有（あ）らせられなかった'
            words[45].innerText = '有（あ）らせられます'
            words[46].innerText = '有（あ）らせられません'
            words[47].innerText = '有（あ）らせられました'
            words[48].innerText = '有（あ）らせられませんでした'
            words[49].innerText = '有（あ）れ'
        } else {
            let front = word.substring(0, word.length - 1)
            let after = word.substring(word.length - 1)
            words[0].innerText = front + convertKana(after, 'u', 'i')
            words[1].innerText = word
            words[2].innerText = front + convertKana(after, 'u', 'a') + 'ない'
            if (after == 'す') words[3].innerText = front + 'した'
            else if (after == 'く') words[3].innerText = front + 'いた'
            else if (after == 'ぐ') words[3].innerText = front + 'いだ'
            else if (after == 'む' || after == 'ぶ' || after == 'ぬ') words[3].innerText = front + 'んだ'
            else if (after == 'る' || after == 'う' || after == 'つ') words[3].innerText = front + 'っだ'
            words[4].innerText = front + convertKana(after, 'u', 'a') + 'なかった'
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
            words[11].innerText = front + convertKana(after, 'u', 'a') + 'なくて'
            words[12].innerText = words[0].innerText + 'ませんでして'
            words[13].innerText = front + convertKana(after, 'u', 'e') + 'る'
            words[14].innerText = front + convertKana(after, 'u', 'e') + 'ない'
            words[15].innerText = front + convertKana(after, 'u', 'e') + 'た'
            words[16].innerText = front + convertKana(after, 'u', 'e') + 'なかった'
            words[17].innerText = front + convertKana(after, 'u', 'e') + 'ます'
            words[18].innerText = front + convertKana(after, 'u', 'e') + 'ません'
            words[19].innerText = front + convertKana(after, 'u', 'e') + 'ました'
            words[20].innerText = front + convertKana(after, 'u', 'e') + 'ませんでした'
            words[21].innerText = front + convertKana(after, 'u', 'e') + 'ば'
            words[22].innerText = front + convertKana(after, 'u', 'a') + 'なければ'
            words[23].innerText = front + convertKana(after, 'u', 'o') + 'う'
            words[24].innerText = words[0].innerText + 'ましょう'
            words[25].innerText = front + convertKana(after, 'u', 'a') + 'せる'
            words[26].innerText = front + convertKana(after, 'u', 'a') + 'せない'
            words[27].innerText = front + convertKana(after, 'u', 'a') + 'せた'
            words[28].innerText = front + convertKana(after, 'u', 'a') + 'せなかった'
            words[29].innerText = front + convertKana(after, 'u', 'a') + 'せます'
            words[30].innerText = front + convertKana(after, 'u', 'a') + 'せません'
            words[31].innerText = front + convertKana(after, 'u', 'a') + 'せました'
            words[32].innerText = front + convertKana(after, 'u', 'a') + 'せませんでした'
            words[33].innerText = front + convertKana(after, 'u', 'a') + 'れる'
            words[34].innerText = front + convertKana(after, 'u', 'a') + 'れない'
            words[35].innerText = front + convertKana(after, 'u', 'a') + 'れた'
            words[36].innerText = front + convertKana(after, 'u', 'a') + 'れなかった'
            words[37].innerText = front + convertKana(after, 'u', 'a') + 'れます'
            words[38].innerText = front + convertKana(after, 'u', 'a') + 'れません'
            words[39].innerText = front + convertKana(after, 'u', 'a') + 'れました'
            words[40].innerText = front + convertKana(after, 'u', 'a') + 'れませんでした'
            words[41].innerText = front + convertKana(after, 'u', 'a') + 'せられる'
            words[42].innerText = front + convertKana(after, 'u', 'a') + 'せられない'
            words[43].innerText = front + convertKana(after, 'u', 'a') + 'せられた'
            words[44].innerText = front + convertKana(after, 'u', 'a') + 'せられなかった'
            words[45].innerText = front + convertKana(after, 'u', 'a') + 'せられます'
            words[46].innerText = front + convertKana(after, 'u', 'a') + 'せられません'
            words[47].innerText = front + convertKana(after, 'u', 'a') + 'せられました'
            words[48].innerText = front + convertKana(after, 'u', 'a') + 'せられませんでした'
            words[49].innerText = front + convertKana(after, 'u', 'e')
        }
    } else if (estimatedVerbType == 4) {
        if (word == 'くれる') {
            words[0].innerText = 'くれ'
            words[1].innerText = 'くれる'
            words[2].innerText = 'くれない'
            words[3].innerText = 'くれた'
            words[4].innerText = 'くれなかった'
            words[5].innerText = 'くれます'
            words[6].innerText = 'くれません'
            words[7].innerText = 'くれました'
            words[8].innerText = 'くれませんでした'
            words[9].innerText = 'くれて'
            words[10].innerText = 'くれまして'
            words[11].innerText = 'くれなくて'
            words[12].innerText = 'くれませんでして'
            words[13].innerText = 'くれられる'
            words[14].innerText = 'くれられない'
            words[15].innerText = 'くれられた'
            words[16].innerText = 'くれられなかった'
            words[17].innerText = 'くれられます'
            words[18].innerText = 'くれられません'
            words[19].innerText = 'くれられました'
            words[20].innerText = 'くれられませんでした'
            words[21].innerText = 'くれ' + convertKana(word[word.length - 1], 'u', 'e') + 'ば'
            words[22].innerText = 'くれなければ'
            words[23].innerText = 'くれろう'
            words[24].innerText = 'くれましょう'
            words[25].innerText = 'くれさせる'
            words[26].innerText = 'くれさせない'
            words[27].innerText = 'くれさせた'
            words[28].innerText = 'くれさせなかった'
            words[29].innerText = 'くれさせます'
            words[30].innerText = 'くれさせません'
            words[31].innerText = 'くれさせました'
            words[32].innerText = 'くれさせませんでした'
            words[33].innerText = 'くれられる'
            words[34].innerText = 'くれられない'
            words[35].innerText = 'くれられた'
            words[36].innerText = 'くれられなかった'
            words[37].innerText = 'くれられます'
            words[38].innerText = 'くれられません'
            words[39].innerText = 'くれられました'
            words[40].innerText = 'くれられませんでした'
            words[41].innerText = 'くれさせられる'
            words[42].innerText = 'くれさせられない'
            words[43].innerText = 'くれさせられた'
            words[44].innerText = 'くれさせられなかった'
            words[45].innerText = 'くれさせられます'
            words[46].innerText = 'くれさせられません'
            words[47].innerText = 'くれさせられました'
            words[48].innerText = 'くれさせられませんでした'
            words[49].innerText = 'くれ'
        } else {
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
            words[17].innerText = words[0].innerText + 'られます'
            words[18].innerText = words[0].innerText + 'られません'
            words[19].innerText = words[0].innerText + 'られました'
            words[20].innerText = words[0].innerText + 'られませんでした'
            words[21].innerText = words[0].innerText + convertKana(word[word.length - 1], 'u', 'e') + 'ば'
            words[22].innerText = words[0].innerText + 'なければ'
            words[23].innerText = words[0].innerText + 'ろう'
            words[24].innerText = words[0].innerText + 'ましょう'
            words[25].innerText = words[0].innerText + 'させる'
            words[26].innerText = words[0].innerText + 'させない'
            words[27].innerText = words[0].innerText + 'させた'
            words[28].innerText = words[0].innerText + 'させなかった'
            words[29].innerText = words[0].innerText + 'させます'
            words[30].innerText = words[0].innerText + 'させません'
            words[31].innerText = words[0].innerText + 'させました'
            words[32].innerText = words[0].innerText + 'させませんでした'
            words[33].innerText = words[0].innerText + 'られる'
            words[34].innerText = words[0].innerText + 'られない'
            words[35].innerText = words[0].innerText + 'られた'
            words[36].innerText = words[0].innerText + 'られなかった'
            words[37].innerText = words[0].innerText + 'られます'
            words[38].innerText = words[0].innerText + 'られません'
            words[39].innerText = words[0].innerText + 'られました'
            words[40].innerText = words[0].innerText + 'られませんでした'
            words[41].innerText = words[0].innerText + 'させられる'
            words[42].innerText = words[0].innerText + 'させられない'
            words[43].innerText = words[0].innerText + 'させられた'
            words[44].innerText = words[0].innerText + 'させられなかった'
            words[45].innerText = words[0].innerText + 'させられます'
            words[46].innerText = words[0].innerText + 'させられません'
            words[47].innerText = words[0].innerText + 'させられました'
            words[48].innerText = words[0].innerText + 'させられませんでした'
            words[49].innerText = words[0].innerText + 'ろ'
        }
    }
}
let type = 0, verbType = 0, word = '';
let words = document.querySelectorAll('span#words');
let typeBtns = document.querySelectorAll('#type button');
let verbTypeBtns = document.querySelectorAll('#verbType button');
typeBtns[type].style.background = "#111";
verbTypeBtns[verbType].style.background = "#111";
document.querySelector('input').addEventListener('change', function () {
    word = document.querySelector('input').value;
    refresh(verbType)
})
for (let i = 0; i < 3; i++) {
    typeBtns[i].addEventListener('click', function () {
        if (i != 0)
            alert('暂不支持。')
    })
}
for (let i = 0; i < 5; i++) {
    verbTypeBtns[i].addEventListener('click', function () {
        verbTypeBtns[verbType].style.background = "#333";
        verbType = i;
        verbTypeBtns[verbType].style.background = "#111";
        refresh(verbType)
    })
}


