// 複合型


// オブジェクトからデータの取り出し
{
    const smallAnimal = {
        name: "小動物",
        favorite: "小籠包"
    };
    // 旧: 一個ずつ取り出す
    var name1 = smallAnimal.name;
    var favorite = smallAnimal.favorite;
    // 旧: 存在しない場合はデフォルト値を設定
    var age = smallAnimal.age ? smallAnimal.age : 3;
}
{
    const smallAnimal = {
        name: "小動物",
        favorite: "小籠包"
    };
    // 新: まとめて取り出し。デフォルト値も設定可能
    const {name, favorite, age=3} = smallAnimal;
}
{
    const smallAnimal = {
        name: "小動物",
        favorite: "小籠包"
    };
    // 新: name以外の要素の取り出し
    const {name, ...other} = smallAnimal;

    console.log(other);
}
