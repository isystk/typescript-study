// 変数

{
    // AでもBでも良い、という柔軟な型が定義できる
    let favoriteFood: "北極" | "冷やし味噌";
    favoriteFood = "味噌タンメン"
    // error TS2322: Type '"味噌タンメン"' is not assignable to
    //   type '"北極" | "冷やし味噌"'.

    // 型と値を組み合わせることもできます。値と型のUnion Type
    let birthYear: number | "昭和" | "平成";
    birthYear = "昭和";
}
