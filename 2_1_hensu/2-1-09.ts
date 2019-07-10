// 変数

{
    // 以前は{、}は制御構文のためのブロックでしかなく、var変数は宣言されたfunctionのどこからでもアクセスできました。
    // 古いコード
    for (var i = 0; i < 10; i++) {
        // do something
    }
    console.log(i); // -> 10

    // let、constで宣言した変数のスコープは宣言されたブロック（if、forは条件式部分も含む）の中に限定されます。
    // 新しいコード
    for (let j = 0; j < 10; j++) {
        // do something
    }
    console.log(j);
    // error TS2304: Cannot find name 'j'.
}
