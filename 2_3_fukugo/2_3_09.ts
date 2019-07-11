// 複合型

// オブジェクト
{
    // key と value がセットになったデータの集合
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
