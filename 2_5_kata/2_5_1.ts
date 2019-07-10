// 基本的な型付け

{
    // 型はUnion Typeで複数列挙できる
    let birthYear: number | string;

    // 型には値も設定できる
    let favoriteFood: "北極" | "冷やし味噌";

    // 一番手抜きな型付け: any
    function someFunction(opts: any) {
      console.log(opts.debug); // debugがあるかどうかチェックしないのでエラーにならない
    }
}
