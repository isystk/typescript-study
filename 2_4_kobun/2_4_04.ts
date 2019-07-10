// 基本的な構文


// for await of

// ループごとに非同期の待ち処理を入れます
for await (const body of response.body) {
    // 非同期処理
    console.log(body);
}

