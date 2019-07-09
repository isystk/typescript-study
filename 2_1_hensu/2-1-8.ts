// 変数


// var、const、let では変数の巻き上げの挙動が多少異なります。
// var はスコープ内で宣言文の前では、変数はあるが初期化はされてない（ undefined ）になりますが、他の2つはコンパイルエラーになります。
// 旧: varはundefinedになる
function oldFunction() {
    console.log(`巻き上げのテスト ${v}`);
    var v = "小公女";
    // undefinedが入っている変数がある扱いになり、エラーならず
}
oldFunction();

// 新: let/const
function letFunction() {
    console.log(`巻き上げのテスト ${v}`);
    let v = "小公女";
    // 宣言より前ではエラー
    // error TS2448: Block-scoped variable 'v' used before its declaration.
}
letFunction();
