// 基本的な型付け

// パラメータの値によって必要な属性が変わる柔軟な型定義を行う
{
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

    // 両方の型を取り得るUnion Typeを定義
    type Column = CheckColumn | NumberColumn;

    // columnTypeが 'check'の場合は、styleが CheckStyle でなければならず
    // columnTypeが 'number'の場合は、styleが NumberStyle  でなければならない
    // 無事、エラーを出さずに過不足なく型付けできた
    const header: Column[] = [
        {field: 'number', caption: 'number', columnType: 'number',
            style: {color: 'red'}},
            {field: 'check', caption: 'check', columnType: 'check',
                style: {
                    uncheckBgColor: '#FDD',
                    checkBgColor: 'rgb(255, 73, 72)'
                }}
    ];
}
