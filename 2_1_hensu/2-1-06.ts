// 変数

{
    // AでもBでも良い、という柔軟な型が定義できる
    // 生まれの年は数字か文字列
    let birthYear: number | string;

    // 正常
    birthYear = 1980;
    // これも正常
    birthYear = '昭和';
    // 答えたくないのでnull・・・はエラー
    birthYear = null;
    // error TS2322: Type 'null' is not assignable to type 'string | number'.
}
