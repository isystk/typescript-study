// 基本的な型付け

// 型に名前をつける
{
    // type 名前 = という構文を使って、型に名前をつけることができます。

    // 型はUnion Typeで複数列挙できる
    type BirthYear = number | string;

    // 型には値も設定できる
    type FoodMenu = "北極" | "冷やし味噌";

    // 変数や関数の引数で使える
    const birthday: BirthYear = "平成";

    function orderFood(food: FoodMenu) {
    }
}
{
    // 型名の代わりに、すべての箇所に定義を書いていってもエラーチェックの結果は変わりません。 
    // また、TypeScriptは型名ではなく、型の内容で比較してチェックを行うため、別名の型でも、片方は型で書いて、片方は直接書き下したケースでも問題なくチェックされます。

    type FoodMenu = "北極" | "冷やし味噌";
    const myOrder: FoodMenu = "北極";

    function orderFood(food: "北極" | "冷やし味噌") {
        console.log(food);
    }

    orderFood(myOrder);
}
