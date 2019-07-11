// 基本的な構文


// while、 do .. while
{
    // 条件にあっている限り回り続けるループです。
    // while はブロックに入る前にチェックが入る方式、 do .. while はブロックの後でチェックをします
    let i = 0;
    while (i < 3) {
        console.log(i);
        i++;
    }

    do {
        console.log(i);
        i--;
    } while (0 < i);

    // 無限ループを実現するために while (true) と書くこともありましたが、ESLintでは禁止されている
    while(true) {
        if (3 < i) {
            break;
        }
        console.log(i);
        i++;
    }

}
