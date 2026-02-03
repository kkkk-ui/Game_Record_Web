export const rule = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-teal-50 to-cyan-50">
            <div className="p-8 pt-40 flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold p-1">5x5チェスの遊び方</h1>
                <p>通常のチェスを5×5のコンパクトな盤面に凝縮したミニチェスです。短時間で決着がつくスピーディーな展開と、狭い盤面ならではの密度の高い駆け引きが楽しめます。</p>
            </div>

            <div className="p-8 pt-20 flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold p-1">盤面と駒</h2>
                <p>5×5の盤面で行います。キング、クイーン、ルーク、ビショップ、ナイトの計5種類、各軍5個ずつの駒を使います。駒の配置は以下の通りです。</p>
                <img src="board.png" alt="board" />
            </div>

            <div className="p-8 pt-20 flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold p-1">勝利条件</h2>
                <p>私たちの目的は相手の「キング」を追い詰めることです。</p>
                <p>相手のキングが次にどこに逃げても取られてしまう状態（チェックメイト）にした方が勝ちとなります。</p>
            </div>

            <div className="p-8 pt-20 flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold p-1">駒の動きとルール</h2>
                <p>各駒の動ける方向や範囲は、通常のチェスと同じです。</p>
                <p>盤面が狭いため、以下の特殊ルールは適用されません。シンプルに駒の動きだけで戦います。</p>
                <ul>
                    <li>・キャスリング（キングとルークの特別な移動）</li>
                    <li>・アンパッサン（ポーンの特殊な取り方）</li>
                    <li>・プロモーション（ポーンが敵陣の奥深くまで進んだときの昇格）</li>
                </ul>
                <div className="min-w-[50dvw]">
                    <h3 className="text-xl font-bold p-1">ナイト</h3>
                    <div className="flex flex-row">
                        <img src="knight.jpg" alt="knight" width={300} height={300} />
                        <span className="p-4">
                            <p>「L字型」に動くのが特徴です。</p>
                            <p>縦に2マス進んでから横に1マス、または横に2マス進んでから縦に1マス動けます。</p>
                            <p>他の駒を飛び越えて移動できる唯一の駒です。</p>
                        </span>
                    </div>
                </div>
                <div className="min-w-[50dvw]">
                    <h3 className="text-xl font-bold p-1">ビショップ</h3>
                    <div className="flex flex-row">
                        <img src="bishop.jpg" alt="bishop" width={300} height={300} />
                        <span className="p-4">
                            <p>斜めに動くのが特徴です。</p>
                            <p>移動できるマスの数は、盤面上の障害物（他の駒）がない限り、どこまでも進めます。</p>
                        </span>
                    </div>
                </div>
                <div className="min-w-[50dvw]">
                    <h3 className="text-xl font-bold p-1">ルーク</h3>
                    <div className="flex flex-row">
                        <img src="rook.jpg" alt="rook" width={300} height={300} />
                        <span className="p-4">
                            <p>縦横に動くのが特徴です。</p>
                            <p>移動できるマスの数は、盤面上の障害物（他の駒）がない限り、どこまでも進めます。</p>
                        </span>
                    </div>
                </div>
                <div className="min-w-[50dvw]">
                    <h3 className="text-xl font-bold p-1">クイーン</h3>
                    <div className="flex flex-row">
                        <img src="queen.jpg" alt="queen" width={300} height={300} />
                        <span className="p-4">
                            <p>縦横斜めに動くのが特徴です。</p>
                            <p>八方にどこまでも進めます。</p>
                        </span>
                    </div>
                </div>
                <div className="min-w-[50dvw]">
                    <h3 className="text-xl font-bold p-1">キング</h3>
                    <div className="flex flex-row">
                        <img src="king.jpg" alt="king" width={300} height={300} />
                        <span className="p-4">
                            <p>縦横斜めに1マスずつ動くのが特徴です。</p>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default rule;