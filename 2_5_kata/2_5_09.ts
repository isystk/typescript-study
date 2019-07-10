// 基本的な型付け


// 型アサーション
// 型の変換（キャスト）
{
    // number から string へのキャストなどの無理やりのキャストはエラーになりますが、 any 型への変換はいつでも可能です
    // any から他の型への変換も自由にできます。
    // 一旦 any を挟むとコンパイラを騙してどんな型にも変換できてしまいますが、コンパイルエラーは抑制できますが、実行時エラーになるだけなので、乱用しないようにしましょう。
    const page: any = { name: "profile page" };
    // any型からはasでどんな型にも変換できる
    const name: string = page as string;
}
