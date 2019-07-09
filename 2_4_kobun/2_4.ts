// 基本的な構文

// if 文
{
    if (task === "休憩中") {
        console.log("サーフィンに行く");
    } else if (task === "デスマ中") {
        console.log("睡眠時間を確保する");
    } else {
        console.log("出勤する");
    }
}

// switch
{
    switch (task) {
        case "休憩中":
            console.log("サーフィンに行く");
        break;
        case "デスマ中":
            console.log("睡眠時間を確保する");
        break;
        default:
            console.log("出勤する");
    }
}

// for
{
    // 旧 配列のループ
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    // 新 配列のループ
    for (const value of array) {
        console.log(value);
    }

    // 旧 オブジェクトのループ
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key, obj[key]);
        }
    }

    // 新 オプジェクトのループ
    for (const [key, value] of Object.entries(obj)) {
        console.log(key, value);
    }
}
// for await of
{
    // ループごとに非同期の待ち処理を入れます
    for await (const body of response.body) {
        // 非同期処理
        console.log(body);
    }
}
// while、 do .. while
{
    // 条件にあっている限り回り続けるループです。 
    // while はブロックに入る前にチェックが入る方式、 do .. while はブロックの後でチェックをします

    // 無限ループを実現するために while (true) と書くこともありましたが、ESLintでは禁止されている
}
// try .. catch
{
    // Javaと違うのは、JavaScriptは型を使って複数の catch 節を振り分けることができない
    // async 関数は非同期処理の中のエラーを例外として投げるため、再びこの文法の利用価値が高まっています。
    // 例外に関しては後半の章で別途登場します。
    try {
        // 処理
        throw new Error("例外投げる")
    } catch (e) {
        // ここに飛んでくる
        console.log(e);
    } finally {
        // エラーがあってもなくてもここにはくる
    }
}
// 式
{
    // 三項演算子 が利用できる
    const result = (day === "金曜日") ? "明日休みなので鳥貴族に行く" : "大人しく帰る";
}
