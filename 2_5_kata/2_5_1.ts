// 基本的な型付け

{
    // 型はUnion Typeで複数列挙できる
    let birthYear: number | string;

    // 型には値も設定できる
    let favoriteFood: "北極" | "冷やし味噌";
}
// 一番手抜きな型付け: any
{
    function someFunction(opts: any) {
      console.log(opts.debug); // debugがあるかどうかチェックしないのでエラーにならない
    }
}
// 未知の型: unknown
{
    var one: any = 1;
    var two: unknown = 2;

    one.indexOf("1"); // 実行時エラー (>_<)
    two.indexOf("2"); // コンパイルエラー \(^o^)/

    // 型アサーションを付けると利用できる
    if (typeof two === "string") {
      two.indexOf("2");  // これはOK \(^o^)/
    }
}
// 型に名前をつける
{
    // type 名前 = という構文を使って、型に名前をつけることができます。

    // 型はUnion Typeで複数列挙できる
    type BirthYear = number | string;

    // 型には値も設定できる
    type FoodMenu = "北極" | "冷やし味噌";

    // 変数や関数の引数で使える
    const birthday: BirthYear = "平成";

    function orderFood(food: FoodMenu) {
    }
}
// 型名の代わりに、すべての箇所に定義を書いていってもエラーチェックの結果は変わりません。 
// また、TypeScriptは型名ではなく、型の内容で比較してチェックを行うため、別名の型でも、片方は型で書いて、片方は直接書き下したケースでも問題なくチェックされます。
{
    type FoodMenu = "北極" | "冷やし味噌";
    const myOrder: FoodMenu = "北極";

    function orderFood(food: "北極" | "冷やし味噌") {
      console.log(food);
    }

    orderFood(myOrder);
}
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
}
{
    // 関数の引数がPerson型の場合
    registerPerson({
      name: "Yoichi",
      favoriteBank: "Mizuho",
      favoriteGyudon: "Matsuya"
    });

    // レスポンスがPerson型の場合
    const { name, favoriteBank } = getPerson();
}
{
    // もし、必須項目の favoriteBank がなければ代入する場所でエラーが発生します。 また、リテラルで書く場合には、不要な項目があってもエラーになります。
    const person: Person = {
      name: "Yoichi"
    };
    // error TS2741: Property 'favoriteBank' is missing in
    //   type '{ name: string; }' but required in type 'Person'.
}
// 属性名が可変のオブジェクトを扱う
{
    //  { [key: キーの型]: 値の型} と書くことで、辞書のように扱われるオブジェクトの宣言ができます。 
    const postalCodes: { [key: string]: string } = {
      "602-0000": "京都市上京区",
      "602-0827": "京都市上京区相生町",
      "602-0828": "京都市上京区愛染寺町",
      "602-0054": "京都市上京区飛鳥井町",
    };
}
// AかつBでなければならない
{
    type Twitter = {
      twitterId: string;
    }

    type Instagram = {
      instagramId: string;
    }

    // 「AかつB」という型定義では & の記号を使います。
    const shibukawa: Twitter & Instagram = {
      twitterId: "@shibu_jp",
      instagramId: "shibukawa"
    }

    // 合成した型に名前をつけることもできます。
    type PartyPeople = Twitter & Instagram;
}
// パラメータの値によって必要な属性が変わる柔軟な型定義を行う
{
    // 高速な表描画ライブラリのCheetahGrid1では、カラムの定義をJSONで行うことができます。
    const grid = new cheetahGrid.ListGrid({
      parentElement: document.querySelector('#sample2'),
      header: [
        {field: 'number', caption: 'number', columnType: 'number',
          style: {color: 'red'}},
        {field: 'check', caption: 'check', columnType: 'check',
          style: {
            uncheckBgColor: '#FDD',
            checkBgColor: 'rgb(255, 73, 72)'
          }}
      ],
    });

    // チェックボックスのカラム用の設定
    type CheckStyle = {
      uncheckBgColor: string;
      checkBgColor: string;
    }
    type CheckColumn = {
      columnType: 'check';
      caption: string;
      field: string;
      style: CheckStyle;
    }

    // 数値用のカラム用の設定¶
    type NumberStyle = {
      color: string;
    }
    type NumberColumn = {
      columnType: 'number';
      caption: string;
      field: string;
      style: NumberStyle;
    }

    type NumberStyle = {
      color: string;
    }
    type NumberColumn = {
      columnType: 'number';
      caption: string;
      field: string;
      style: NumberStyle;
    }
}
// 型ガード
{
    // TypeScriptでは、今まで見て来た通り、少し柔軟な型を許容しています。
    // 数値型かnull、数字型か文字列 など
    // この複数の型を持つ変数を扱うときに、「2通りの選択肢があるうちの、こっちのパターンの場合のみのロジック」を記述したいときに使うのが型ガードです。

    // 組み込みで使えるのは typeof や instanceof 、 in や比較です。

    // userNameOrIdは文字列か数値
    let userNameOrId: string|number = getUser();

    // typeof 変数 は変数の型名を文字列で返します。プリミティブな組込型のいくつかでしか対応できません。
    if (typeof userNameOrId === "string") {
        // このif文の中では、userNameOrIdは文字列型として扱われる
        this.setState({
            userName: userNameOrId.toUpperCase()
        });
    } else {
        // このif文の中では、userNameOrIdは数値型として扱われる
        const user = this.repository.findUserByID(userNameOrId);
        this.setState({
            userName: user.getName()
        });
    }

    // 変数 instanceof クラス名 は自作のクラスなどで使えるものになります。


    // "キー" in オブジェクト で、オブジェクトに特定の属性が含まれているかどうかの判定ができます。

    // type で型付けを行なったオブジェクトの複合型の場合、属性の有無や特定の属性の値がどうなっているかで判断できます。
    // 例えば、前述のカラム型の場合、field属性に文字列が入っていて型の判別ができました。
    type Column = CheckColumn | NumberColumn;
    function getValue(column: Column): string {
      if (column.field === 'number') {
        // ここではcolumnはNumberColumn型
      } else {
        // ここではcolumnはCheckColumn型
      }
    }
}
// ユーザー定義の型ガード
{
    // ユーザー定義の型ガード関数を作成すると、if文の中で特定の型とみなすようにTypeScriptコンパイラに教えることができます。
    function isArray(arg: any): arg is Array {
      return Array.isArray(arg);
    }
    // 名前は is型名 だとわかりやすい
    // 引数は arg: any
    // 返り値の型は arg is Array
    // 関数の返り値は、型ガードの条件が満たされる実行文
}
// 型アサーション
{
    // number から string へのキャストなどの無理やりのキャストはエラーになりますが、 any 型への変換はいつでも可能です
    // any から他の型への変換も自由にできます。
    // 一旦 any を挟むとコンパイラを騙してどんな型にも変換できてしまいますが、コンパイルエラーは抑制できますが、実行時エラーになるだけなので、乱用しないようにしましょう。
    const page: any = { name: "profile page" };
    // any型からはasでどんな型にも変換できる
    const name: string = page as string;
}
// インタフェースを使った型定義
{
    // オブジェクトの型をつける方法には、 type を使う方法以外に、インタフェース定義を使った方法もあります。
    interface Person {
      name: string;
      favoriteBank: string;
      favoriteGyudon?: string;
    }
    // 前述の型を合成する方法についても、二つのインタフェースの継承でも表現できますが、あまり見かけたことはありません。
    interface PartyPeople extends Twitter, Instagram {
    }
    const shibukawa: PartyPeople = {
      twitterId: "@shibu_jp",
      instagramId: "shibukawa"
    }
}


