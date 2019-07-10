// 基本的な型付け

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