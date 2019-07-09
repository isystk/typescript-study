// 複合型


// TypeScriptでは、配列の要素ごとに型が違う「タプル」というデータ型も定義できます。
const movie: [string, number] = ['Gozilla', 1954];
// error TS2322: Type 'number' is not assignable to type 'string'.
movie[0] = 2019;

