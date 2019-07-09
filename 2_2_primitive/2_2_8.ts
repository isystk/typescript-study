// プリミティブ型
// それ以上分解できないシンプルなデータを「プリミティブ型」と呼びます。


let favoriteGame: string; // まだ代入してないのでundefined;
console.log(favoriteGame);

function print(name: string, age?: number) {
    console.log(`name: ${name}, age: ${age || 'empty'}`);
}

