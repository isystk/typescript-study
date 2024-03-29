// 複合型

// データの加工
{
    // データの編集とマージ
    const smalls = [ "小動物", "小型車", "小論文"];
    const others = [ "小市民","小田急"];
    // 旧: 3番目の要素を削除して、1つの要素を追加しつつ、他の配列と結合
    smalls.splice(2, 1, "小心者");
    // [ '小動物', '小型車', '小心者' ]
    var newSmalls = smalls.concat(others);
    // [ '小動物', '小型車', '小心者', '小市民', '小田急' ]

    // 新: スプレッド構文で同じ操作をする
    //     先頭要素の削除の場合、分割代入を使えばslice()も消せます
    // smallsの全要素の0番目から2つ、次に"小心者"を追加、その後にothersの全要素を追加
    const newSmalls2 = [...smalls.slice(0, 2), "小心者", ...others]
    // [ '小動物', '小型車', '小心者', '小市民', '小田急' ]
}
{
    // データのコピー
    const smalls = [ "小動物", "小型車", "小論文"];
    // 旧: 配列のコピー
    var copy = Array.from(smalls);

    // 新: スプレッド構文で配列のコピー
    const copy2 = [...smalls];
}
