// 複合型


// イテレータから配列に変換したい場合
{
    // こうする
    const iterable = ["a", "b", "c"].entries();
    const names = Array.from(iterable);
    console.log(names);
}
{
    // これもできる
    const iterable = ["a", "b", "c"].entries();
    const names = [...iterable];
    console.log(names);
}
