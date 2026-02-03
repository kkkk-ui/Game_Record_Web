// 盤面の型定義 (文字列のIDが入った2次元配列)
export type BoardState = string[][];

export interface EvaluationResult {
    score: number;        // 生のスコア (正:黒有利, 負:白有利)
    percentage: number;   // ゲージ表示用 (0~100)
    message: string;      // 表示テキスト
    advantage: 'Black' | 'White' | 'Even';
}

// 駒IDと価値のマッピング
const PIECE_VALUES: Record<string, number> = {
    // 黒駒 (正の値)
    "1": 30, "2": 50, "3": 50, "4": 90, "5": 1000,
    // 白駒 (負の値)
    "-1": -30, "-2": -50, "-3": -50, "-4": -90, "-5": -1000,
    // 空
    "0": 0
};

// 中央支配のボーナス (5x5用)
const POSITION_BONUS = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 3, 1, 0], // 中央(2,2)を高く評価
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0]
];

export const evaluateBoard = (board: BoardState): EvaluationResult => {
    let totalScore = 0;

    board.forEach((row, rowIndex) => {
        row.forEach((pieceId, colIndex) => {
            if (pieceId === "0") return;

            // 1. 駒の価値を加算
            const value = PIECE_VALUES[pieceId] || 0;
            totalScore += value;

            // 2. ポジションボーナス
            // IDが正(黒)ならプラス、負(白)ならマイナス
            const bonus = POSITION_BONUS[rowIndex]?.[colIndex] || 0;
            if (parseInt(pieceId) > 0) {
                totalScore += bonus;
            } else {
                totalScore -= bonus;
            }
        });
    });

    // ゲージ用のパーセンテージ計算 (シグモイド関数風に -20~+20 を 0~100% に正規化)
    // 50が互角。黒有利で100に近づき、白有利で0に近づく
    const clampedScore = Math.max(-20, Math.min(20, totalScore));
    const percentage = 50 + (clampedScore * 2.5);

    return {
        score: totalScore,
        percentage,
        advantage: totalScore > 5 ? 'Black' : totalScore < -5 ? 'White' : 'Even',
        message: getStatusMessage(totalScore)
    };
};

const getStatusMessage = (score: number): string => {
    if (Math.abs(score) <= 5) return "互角";
    if (score > 20) return "黒 勝勢";
    if (score < -20) return "白 勝勢";
    return score > 0 ? "黒 優勢" : "白 優勢";
};