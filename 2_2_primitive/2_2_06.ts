// プリミティブ型

// テンプレートリテラルに関数を指定すると（タグ付きテンプレートリテラル）、文字列を加工する処理を挟めます。
{
    function i18n(texts, ...placeholders) {
        // texts = ['小動物は', 'が好きです']
        // placeholders = ['小旅行']
        const map = {
            '小旅行' : 'Cheep Trip'
        };
        return texts[0] + map[placeholders[0]] + texts[1];
    }

    const hobby = "小旅行"
    console.log(i18n`小動物は${hobby}が好きです`);
}
