// 基本的な構文

// for
{
    var array = [1,2,3];

    // 旧 配列のループ
    for (let i = 0; i < 3; i++) {
        console.log(array[i]);
    }

    // 新 配列のループ
    for (const value of array) {
        console.log(value);
    }
}
{
    var obj = {
        'a' : 1,
        'b' : 2,
        'c' : 3
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
