// 複合型

// オブジェクトは辞書用途としても利用できる

// 旧: オブジェクトを辞書代わりに
var map = {
    "五反田": "約束の地",
    "戸越銀座": "TGSGNZ"
};

for (var key in map) {
    if (map.hasOwnProperty(key)) {
        console.log(key + " : " + map[key]);
    }
}
// 利点は、オブジェクトはキーの型に文字列しか入れることができませんが、 Map や Set では number なども扱えます
// 新: Mapを利用
// ``<キーの型、 値の型>`` で明示的に型を指定すると
// ``set()`` 時に型違いのデータを入れようとするとチェックできるし、
// ループなどで値を取り出しても型情報が維持されます
const map = new Map<string, string>([
    ["五反田", "約束の地"],
    ["戸越銀座", "TGSGNZ"]
]);

for (const [key, value] of map) {
    console.log(`${key} : ${value}`);
}

