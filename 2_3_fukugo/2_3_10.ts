// 複合型

// JSON
{
    // JSONはデータ交換用の文字列、Javascriptで扱えるようにオブジェクトにパースする方法
    const key = 'favorite drink';
    const smallAnimal = {
        name: "小動物",
        favorite: "小籠包",
        'home town': "神奈川県警のいるところ",
        [key]: "ストロングゼロ"
    };

     // オブジェクトからJSONに変換
    // 最初の引数にオブジェクトや配列、文字列などを入れる
    // 2つめの引数はデータ変換をしたいときの変換関数（ログ出力からパスワードをマスクしたいなど）省略可能。通常はnull
    // 3つめは配列やオブジェクトでインデントするときのインデント幅 省略可能。省略すると改行なしの1行で出力される
    const json = JSON.stringify(smallAnimal, null, 2);
    console.log(json);

    // JSONからオブジェクトに変換
    // これは複製されて出てくるので、元のsmallAnimalとは別物
    const smallAnimal2 = JSON.parse(json);
    console.log(smallAnimal2);
}
