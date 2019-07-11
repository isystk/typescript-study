// 複合型

{
    // a.entries() で取得したイテレータはbのような構造になる
    const a = ["a", "b", "c"];
    const b = [[0, "a"], [1, "b"], [2, "c"]];

    // この2つの結果は同じ
    for (const [i, v] of a.entries()) { console.log(i, v); }
    for (const [i, v] of b) { console.log(i, v); }
}
