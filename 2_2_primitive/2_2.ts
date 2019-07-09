// プリミティブ型
// それ以上分解できないシンプルなデータを「プリミティブ型」と呼びます。

// boolean 型
{
    // 値を表示
    console.log(true);
    console.log(false);

    // 変数に代入。変数の型名はboolean
    const flag: boolean = true;

    // 他のデータ型への変換
    console.log(flag.toString()); // 'true' / 'false' になる
    console.log(String(flag));    // こちらでも変換可能
    console.log(Number(flag));    // 1, 0になる

    // 他のデータ型をtrue/falseに変換
    const notEmpty = Boolean("test string"); // 変換ルールは後述
    const flag = flagStr === 'true';         // 'true'の文字をtrueにするなら
    const str = "not empty string";          // true/false反転するが演算子一つで変換可能
    const isEmpty = !str;                    // 反転すると!Boolean()と同じ
    const notEmpty = !!str;                  // もう1つ使うと反転せずにboolean型に
}
// ド・モルガンの法則
{
    !(P || Q) == !P && !Q
    !(P && Q) == !P || !Q
}

// 数値型
{
    // 値を表示
    console.log(10.5);
    console.log(128);
    console.log(0b11); // 0bから始まると2進数
    console.log(0777); // 0, 0oから始まると8進数
    console.log(0xf7); // 0, 0xから始まると16進数

    // 変数に代入。変数の型名はnumber
    const year: number = 2019;

    // 他のデータ型への変換
    console.log(year.toString());  // '2019'になる
    console.log(year.toString(2)); // toStringの引数で2進数-36進数にできる
    console.log(Boolean(year));    // 0以外はtrue

    // 他のデータ型を数値に変換
    console.log(parseInt("010"));     // →10 文字列はparseIntで10進数/16進数変換
    console.log(parseInt("010", 8));  // →8 2つめの数値で何進数として処理するか決められる
    console.log(Number(true));        // boolean型はNumber関数で0/1になる
}
{
    const a = 0.1;
    const b = 0.2;
    console.log(a + b);
    // 0.30000000000000004
}


// string リテラル
{
    // 値を表示
    // シングルクオート、ダブルクオート、バッククオートでくくる
    console.log('hello world');

    // 変数に代入。変数の型名はboolean
    const name: string = "future";

    // 複数行
    // シングルクオート、ダブルクオートだとエラーになる
    // error TS1002: Unterminated string literal.
    const address = '東京都
    品川区';
    // バッククオートならOK。ソースコード上の改行はデータ上も改行となる
    const address = `東京都
    品川区`;

    // 他のデータ型への変換
    console.log(parseInt('0100', 10)); // 100になる
    console.log(Boolean(name));        // 空文字列はfalse、それ以外はtrueになる

    // 他のデータ型をstringに変換
    const year = 2019;
    console.log((2019).toString(2));     // numberはtoStringの引数で2進数-36進数にできる
    console.log((true).toString());      // boolean型を'true'/'false'の文字列に変換
    console.log(Stirng(false));          // こちらでも可
}
{
    // 古いコード
    console.log("[Debug]:" + variable);

    // 文字列テンプレートリテラルを利用するとプレースホルダを利用できる。
    // 新しいコード
    console.log(`[Debug]: ${variable}`);
}
{
    // テンプレートリテラルに関数を指定すると（タグ付きテンプレートリテラル）、文字列を加工する処理を挟めます。
    function i18n(texts, ...placeholders) {
        // texts = ['小動物は', 'が好きです']
        // placeholders = ['小旅行']
        return // 翻訳処理
    }

    const hobby = "小旅行"
    console.log(i18n`小動物は${hobby}が好きです`);
}
{
    let favoriteGame: string; // まだ代入してないのでundefined;
    console.log(favoriteGame);

    function print(name: string, age?: number) {
        console.log(`name: ${name}, age: ${age || 'empty'}`);
    }

}
{
    // stringかnullを入れられるという宣言をしてnullを入れる
    let favaoriteGame: string | null = null;
}
{
    // undefined と null は別のものなので、
    // コンパイラオプションで compilerOptions.strict: true もしくは、 compilerOptions.strictNullChecks: true の場合は、 
    // null 型の変数に undefined を入れようとしたり、その逆をするとエラーになります。
    const a: string | null = undefined;
    // error TS2322: Type 'undefined' is not assignable to type 'string | null'.

    const b: string | undefined = null;
    // error TS2322: Type 'null' is not assignable to type 'string | undefined'.
}

