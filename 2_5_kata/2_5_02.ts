// 基本的な型付け

// 未知の型: unknown
{
    var one: any = 1;
    var two: unknown = 2;

    one.indexOf("1"); // 実行時エラー (>_<)
    two.indexOf("2"); // コンパイルエラー \(^o^)/

    // 型アサーションを付けると利用できる
    if (typeof two === "string") {
      two.indexOf("2");  // これはOK \(^o^)/
    }
}
