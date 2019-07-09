// 複合型

{
    // 変数に代入。型名を付けるときは配列に入れる要素の型名の後ろに[]を付与する
    // 後ろの型が明確であれば型名は省略可能
    const years: number[] = [2019, 2020, 2021];
    const divs = ['tig', 'sig', 'saig', 'scig'];

    // 配列に要素を追加。複数個も追加可能
    years.push(2022);
    years.push(2023, 2024);

    // 要素から取り出し
    const first = years[0];
}
{
    // TypeScriptでは、配列の要素ごとに型が違う「タプル」というデータ型も定義できます。
    const movie: [string, number] = ['Gozilla', 1954];
    // error TS2322: Type 'number' is not assignable to type 'string'.
    movie[0] = 2019;
}
{
    // 配列からのデータの取り出し
    const smalls = [
        "小動物",
        "小型車",
        "小論文"
    ];
    // 旧: 一個ずつ取り出す
    var smallCar = smalls[1];
    var smallAnimal = smalls[0];
    // 旧: 2番目以降の要素の取り出し
    var other = smalls.slice(1);

    // 新: まとめて取り出し
    const [smallAnimal, smallCar, essay] = smalls;
    // 新: 2番目以降の要素の取り出し
    const [, ...other] = smalls;
}
{
    // 配列の要素の存在チェック
    const places = ["小岩駅", "小浜市", "小倉駅"];

    // 旧: indexOfを利用
    if (places.indexOf("小淵沢") !== -1) {
        // 見つかった！
    }

    // 新: includesを利用
    if (places.includes("小淵沢")) {
        // 見つかった！
    }
}
{
    // データの加工
    const smalls = [
        "小動物",
        "小型車",
        "小論文"
    ];
    const others = [
        "小市民",
        "小田急"
    ];

    // 旧: 3番目の要素を削除して、1つの要素を追加しつつ、他の配列と結合
    smalls.splice(2, 1, "小心者");
    // [ '小動物', '小型車', '小心者' ]
    var newSmalls = smalls.concat(others);
    // [ '小動物', '小型車', '小心者', '小市民', '小田急' ]

    // 新: スプレッド構文で同じ操作をする
    //     先頭要素の削除の場合、分割代入を使えばslice()も消せます
    // smallsの全要素の0番目から2つ、次に"小心者"を追加、その後にothersの全要素を追加
    const newSmalls = [...smalls.slice(0, 2), "小心者", ...others]
    // [ '小動物', '小型車', '小心者', '小市民', '小田急' ]

    // 旧: 配列のコピー
    var copy = Array.from(smalls);

    // 新: スプレッド構文で配列のコピー
    const copy = [...smalls];
}
// ループ
{
    var iterable = ["小金井", "小淵沢", "小矢部"];

    // 旧: C言語由来のループ
    for (var i = 0; i < iterable.length; i++) {
        var value = iterable[i];
        console.log(value);
    }

    // 中: forEach()ループ
    iterable.forEach(value => {
        console.log(value);
    });

    // 新: for ofループで配列のインデックスが欲しい
    for (const [i, value] of iterable.entries()) {
        console.log(i, value);
    }
    // 要素のみ欲しいときは for (const value of iterable)
}
{
    // a.entries() と b は同じ意味。イテレータを利用するとbのような構造になる
    const a = ["a", "b", "c"];
    const b = [[0, "a"], [1, "b"], [2, "c"]];

    // この2つの結果は同じ
    for (const [i, v] of a.entries()) { console.log(i, v); }
    for (const [i, v] of b) { console.log(i, v); }
}
// イテレータから配列に変換したい場合
{
    // こうする
    const names = Array.from(iterable);

    // これもできる
    const names = [...iterable];
}
// オブジェクト
{
    // 配列は要素へのアクセス方法がインデックス（数値）でしたが、オブジェクトの場合は文字列です。
    const key = 'favorite drink';
    const smallAnimal = {
        name: "小動物",
        favorite: "小籠包",
        'home town': "神奈川県警のいるところ",
        [key]: "ストロングゼロ"
    };

    // 参照は `.`+名前、もしくは [名前]
    console.log(smallAnimal.name); // 小動物
    console.log(smallAnimal[key]); // ストロングゼロ
}
// JSON
{
    // JSONはデータ交換用の文字列、Javascriptで扱えるようにオブジェクトにパースする方法

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
// オブジェクトからデータの取り出し
{
    const smallAnimal = {
        name: "小動物",
        favorite: "小籠包"
    };

    // 旧: 一個ずつ取り出す
    var name = smallAnimal.name;
    var favorite = smallAnimal.favorite;
    // 旧: 存在しない場合はデフォルト値を設定
    var age = smallAnimal.age ? smallAnimal.age : 3;

    // 新: まとめて取り出し。デフォルト値も設定可能
    const {name, favorite, age=3} = smallAnimal;
    // 新: name以外の要素の取り出し
    const {name, ...other} = smallAnimal;
}
// オブジェクトの要素の加工
{
    const smallAnimal = {
        name: "小動物"
    };

    const attributes = {
        job: "小説家",
        nearStation: "小岩駅"
    }

    // 最古: オブジェクトをコピー
    var copy = {};
    for (var key1 in smallAnimal) {
        if (smallAnimal.hasOwnProperty(key1)) {
            copy[key1] = smallAnimal[key1];
        }
    }

    // 旧: Object.assign()を使ってコピー
    const copy = Object.assign({}, smallAnimal);

    // 新: スプレッド構文でコピー
    const copy = {...smallAnimal};

    // 最古: オブジェクトをマージ
    var merged = {};
    for (var key1 in smallAnimal) {
        if (smallAnimal.hasOwnProperty(key1)) {
            merged[key1] = smallAnimal[key1];
        }
    }
    for (var key2 in attributes) {
        if (attributes.hasOwnProperty(key2)) {
            merged[key2] = attributes[key2];
        }
    }

    // 旧: Object.assign()を使ってオブジェクトをマージ
    const merged = Object.assign({}, smallAnimal, attributes);

    // 新: スプレッド構文でマージ
    const merged = {...smallAnimal, ...attributes};
}
// オブジェクトは辞書用途としても利用できる
{
    // 旧: オブジェクトを辞書代わりに
    var map = {
        "五反田": "約束の地",
        "戸越銀座": "TGSGNZ"
    };

    for (var key in map) {
        if (map.hasOwnProperty(key)) {
            console.log(key + " : " + map[key]);
        }
    }
    // 利点は、オブジェクトはキーの型に文字列しか入れることができませんが、 Map や Set では number なども扱えます
    // 新: Mapを利用
    // ``<キーの型、 値の型>`` で明示的に型を指定すると
    // ``set()`` 時に型違いのデータを入れようとするとチェックできるし、
    // ループなどで値を取り出しても型情報が維持されます
    const map = new Map<string, string>([
        ["五反田", "約束の地"],
        ["戸越銀座", "TGSGNZ"]
    ]);

    for (const [key, value] of map) {
        console.log(`${key} : ${value}`);
    }
}
