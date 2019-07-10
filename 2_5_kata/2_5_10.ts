// 基本的な型付け


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
