// 変数

// 変数宣言には const、let、var の3つがある
// const は定数(変わることがない)、let は変数(変わる可能性がある)、var はあいまい
{
    // 変数は全部とりあえずconstで宣言し、再代入がどうしても必要なところだけletにします。
    // 何はともあれconst
    const name = "定数はconstで宣言";

    let name2 = "変数はconstで宣言";

    var name3 = "var は曖昧なので使わない";
}
