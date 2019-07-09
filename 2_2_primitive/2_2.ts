// プリミティブ型
// それ以上分解できないシンプルなデータを「プリミティブ型」と呼びます。

// boolean 型

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

