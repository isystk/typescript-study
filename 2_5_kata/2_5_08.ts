// 基本的な型付け

// 型ガード
{
    // TypeScriptでは、Union Typeを利用して複数の型を許容して柔軟性をもたせている。
	// 例：let birthYear: number | string;
    // この複数の型を持つ変数を扱うときに、こっちのパターンの場合のみのロジックを記述したいときに使うのが型ガードです。
    // 組み込みで使えるのは typeof、instanceof、in を利用した比較です。

    // userNameOrIdは文字列か数値
    let userNameOrId: string | number = getUser();

    // typeof 変数 は変数の型名を文字列で返します。
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

	// プリミティブな組込型のいくつかでしか対応できません。
	// 対応している型
	// undefined: "undefined"
	// bool型: "boolean"
	// 数値: "number"
	// 文字列: "string"
	// シンボル: "symbol"
	// 関数: "function"

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

    // ユーザー定義の型ガード関数を作成することもできます。
	// 以下は、配列かどうかを判別する型ガード
    function isArray(arg: any): arg is Array {
      return Array.isArray(arg);
    }
    // 名前は is型名 だとわかりやすい
    // 引数は arg: any
    // 返り値の型は arg is Array
    // 関数の返り値は、型ガードの条件が満たされる実行文
}