// 複合型

// ループ

var iterable = ["小金井", "小淵沢", "小矢部"];

// 旧: C言語由来のループ
for (var i = 0; i < iterable.length; i++) {
    var value = iterable[i];
    console.log(value);
}

// 中: forEach()ループ
iterable.forEach(value => {
    console.log(value);
});

// 新: for ofループで配列のインデックスが欲しい
for (const [i, value] of iterable.entries()) {
    console.log(i, value);
}
// 要素のみ欲しいときは for (const value of iterable)

