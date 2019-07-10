// 基本的な型付け

// 関数のレスポンスや引数で使うオブジェクトの定義
{
    // type はオブジェクトが持つべき属性の定義にも使えます。
    // 属性には型をつけることができます。
    // また名前の後ろに ? をつけることで、省略可能な属性であることを示すことができます。
    type Person = {
        name: string;
        favoriteBank: string;
        favoriteGyudon?: string;
    }

    // 変数定義時にインタフェースを指定
    const person: Person = {
        name: "Yoichi",
        favoriteBank: "Mizuho",
        favoriteGyudon: "Matsuya"
    };

    // 関数の引数がPerson型の場合は、オブジェクト定義に一致しないと引数に設定できない
    function registerPerson(person : Person) {
    }
    registerPerson({
        name: "Yoichi",
        favoriteBank: "Mizuho",
        favoriteGyudon: "Matsuya"
    });

    // レスポンスがPerson型の場合
    function getPerson() : Person{
        return {
            name: "Yoichi",
            favoriteBank: "Mizuho",
            favoriteGyudon: "Matsuya"
        };
    }
    const { name, favoriteBank } = getPerson();

    // もし、必須項目の favoriteBank がなければ代入する場所でエラーが発生します。 また、リテラルで書く場合には、不要な項目があってもエラーになります。
    const person2: Person = {
        name: "Yoichi"
    };
    // error TS2741: Property 'favoriteBank' is missing in
    //   type '{ name: string; }' but required in type 'Person'.
}
