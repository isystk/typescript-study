// 複合型


// 配列からのデータの取り出し
const smalls = [
    "小動物",
    "小型車",
    "小論文"
];
// 旧: 一個ずつ取り出す
var smallCar = smalls[1];
var smallAnimal = smalls[0];
// 旧: 2番目以降の要素の取り出し
var other = smalls.slice(1);

// 新: まとめて取り出し
const [smallAnimal, smallCar, essay] = smalls;
// 新: 2番目以降の要素の取り出し
const [, ...other] = smalls;

