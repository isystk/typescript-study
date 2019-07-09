// プリミティブ型
// それ以上分解できないシンプルなデータを「プリミティブ型」と呼びます。

{
    // undefined と null は別のものなので、
    // コンパイラオプションで compilerOptions.strict: true もしくは、 compilerOptions.strictNullChecks: true の場合は、 
    // null 型の変数に undefined を入れようとしたり、その逆をするとエラーになります。
    const a: string | null = undefined;
    // error TS2322: Type 'undefined' is not assignable to type 'string | null'.

    const b: string | undefined = null;
    // error TS2322: Type 'null' is not assignable to type 'string | undefined'.
}

