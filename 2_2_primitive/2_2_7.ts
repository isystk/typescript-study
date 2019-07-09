// プリミティブ型
// それ以上分解できないシンプルなデータを「プリミティブ型」と呼びます。


// テンプレートリテラルに関数を指定すると（タグ付きテンプレートリテラル）、文字列を加工する処理を挟めます。
function i18n(texts, ...placeholders) {
    // texts = ['小動物は', 'が好きです']
    // placeholders = ['小旅行']
    return // 翻訳処理
}

const hobby = "小旅行"
console.log(i18n`小動物は${hobby}が好きです`);
