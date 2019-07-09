// 複合型


// オブジェクトの要素の加工

const smallAnimal = {
    name: "小動物"
};

const attributes = {
    job: "小説家",
    nearStation: "小岩駅"
}

// 最古: オブジェクトをコピー
var copy = {};
for (var key1 in smallAnimal) {
    if (smallAnimal.hasOwnProperty(key1)) {
        copy[key1] = smallAnimal[key1];
    }
}

// 旧: Object.assign()を使ってコピー
const copy = Object.assign({}, smallAnimal);

// 新: スプレッド構文でコピー
const copy = {...smallAnimal};

// 最古: オブジェクトをマージ
var merged = {};
for (var key1 in smallAnimal) {
    if (smallAnimal.hasOwnProperty(key1)) {
        merged[key1] = smallAnimal[key1];
    }
}
for (var key2 in attributes) {
    if (attributes.hasOwnProperty(key2)) {
        merged[key2] = attributes[key2];
    }
}

// 旧: Object.assign()を使ってオブジェクトをマージ
const merged = Object.assign({}, smallAnimal, attributes);

// 新: スプレッド構文でマージ
const merged = {...smallAnimal, ...attributes};

