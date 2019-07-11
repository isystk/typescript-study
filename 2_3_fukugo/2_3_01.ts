// 複合型

// 配列
{
    // 変数に代入。型名を付けるときは配列に入れる要素の型名の後ろに[]を付与する
    const years: number[] = [2019, 2020, 2021];

    // 後ろの型が明確であれば型名は省略可能
    const divs = ['tig', 'sig', 'saig', 'scig'];

    // 配列に要素を追加。複数個も追加可能
    years.push(2022);
    years.push(2023, 2024);

    // 要素から取り出し
    const first = years[0];
}
