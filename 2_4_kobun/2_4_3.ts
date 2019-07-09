// 基本的な構文

// for

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
