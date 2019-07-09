// 変数

{
    // 変数宣言には const、let、var の3つがある
    // const は定数(変わることがない)、let は変数(変わる可能性がある)、var はあいまい

    // 変数は全部とりあえずconstで宣言し、再代入がどうしても必要なところだけletにします。
    // 何はともあれconst
    const name = "小動物";
}
{
    // 変更がある変数はlet
    let mode = 'slack';
    let name;
    if (mode === "slack") {
        name = "小型犬";
    } else if (mode === "twitter") {
        name = "小動物";
    }
}
{
    // JavaScriptと異なり、未定義の変数に代入すると、エラーなります。
    undefinedVar = 10;
}
{
    // TypeScriptは変数に型があります。TypeScriptは変数名の後ろに後置で型を書きます。
    // nameは文字列型
    let name: string;

    // 違う型のデータを入れるとエラー
    // error TS2322: Type '123' is not assignable to type 'string'
    name = 123;
}
{
    // 代入時に代入元のデータから型が類推できる場合は自動設定される
    // 右辺から文字列とわかるので文字列型
    let title = "小説家";
    // ↑なるべく明示的に型を指定するべき

    // 代入もせず、型定義もないと、なんでも入る（推論ができない）any型になります。
    let address;
    // 明示的に any を指定することもできる
    let address: any;
}
{
    // AでもBでも良い、という柔軟な型が定義できる
    // 生まれの年は数字か文字列
    let birthYear: number | string;

    // 正常
    birthYear = 1980;
    // これも正常
    birthYear = '昭和';
    // 答えたくないのでnull・・・はエラー
    birthYear = null;
    // error TS2322: Type 'null' is not assignable to type 'string | number'.
}
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
{
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
}
{
    // 以前は{、}は制御構文のためのブロックでしかなく、var変数は宣言されたfunctionのどこからでもアクセスできました。
    // 古いコード
    for (var i = 0; i < 10; i++) {
        // do something
    }
    console.log(i); // -> 10

    // let、constで宣言した変数のスコープは宣言されたブロック（if、forは条件式部分も含む）の中に限定されます。
    // 新しいコード
    for (let i = 0; i < 10; i++) {
        // do something
    }
    console.log(i);
    // error TS2304: Cannot find name 'i'.
}
{
    function code() {
        // スコープはかならずしも制御構文である必要はなく、{、}だけを使うこともできます。
        {
            //この変数はこの中でのみ有効
            const store = "小売店";
        }
    }
}


