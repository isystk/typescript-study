// プリミティブ型

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
//    const address = '東京都
//    品川区';
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
    console.log(String(false));          // こちらでも可
}
