// プリミティブ型

// number は2進数で表した数値表現なので、 0.2 + 0.1などのようなきれいに2進数で表現できない数値は誤差が出てしまいます。
// 金額計算など、多少遅くても正確な計算が必要な場合はdecimal.js 3 などの外部ライブラリを使います。
{
    const a = 0.1;
    const b = 0.2;
    console.log(a + b);
    // 0.30000000000000004
}
