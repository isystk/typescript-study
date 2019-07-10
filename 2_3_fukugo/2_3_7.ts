// 複合型

{
    // a.entries() と b は同じ意味。イテレータを利用するとbのような構造になる
    const a = ["a", "b", "c"];
    const b = [[0, "a"], [1, "b"], [2, "c"]];

    // この2つの結果は同じ
    for (const [i, v] of a.entries()) { console.log(i, v); }
    for (const [i, v] of b) { console.log(i, v); }
}
