// プリミティブ型

// 数値型
{
    // 値を表示
    console.log(10.5);
    console.log(128);
    console.log(0b11); // 0bから始まると2進数
    console.log(0o777); // 0, 0oから始まると8進数
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
    // それ以上分解できないシンプルなデータを「プリミティブ型」と呼びます。
}
