// 複合型

{
    // 配列の要素の存在チェック
    const places = ["小岩駅", "小浜市", "小倉駅", "小淵沢"];

    // 旧: indexOfを利用
    if (places.indexOf("小淵沢") !== -1) {
        // 見つかった！
        console.log('indexOf で発見');
    }

    // 新: includesを利用
    if (places.includes("小淵沢")) {
        // 見つかった！
        console.log('includes で発見');
    }
}
