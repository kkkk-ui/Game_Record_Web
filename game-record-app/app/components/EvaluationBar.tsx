import React, { useMemo } from 'react';
import { evaluateBoard, type BoardState } from '../utils/chessEngine';

type Props = {
    board: BoardState;
};

export const EvaluationBar: React.FC<Props> = ({ board }) => {
    // 盤面が変更されたときのみ再計算
    const result = useMemo(() => evaluateBoard(board), [board]);

    return (
        <div className="w-full max-w-md mx-auto mb-6 px-4">
            {/* テキスト情報 */}
            <div className="flex justify-between items-end mb-2 text-slate-700">
                <span className="text-xs md:text-sm font-bold">White (先手)</span>
                <div className="text-center">
                    <span className="text-xs text-slate-500 block">評価値</span>
                    <span className={`font-mono font-bold text-md md:text-lg ${result.advantage === 'Black' ? 'text-slate-900' :
                        result.advantage === 'White' ? 'text-slate-500' : 'text-slate-700'
                        }`}>
                        {result.message} ({result.score > 0 ? '+' : ''}{result.score})
                    </span>
                </div>
                <span className="text-xs md:text-sm font-bold">Black (後手)</span>
            </div>

            {/* 評価値バー (Gauge) */}
            <div className="h-4 bg-slate-300 rounded-full overflow-hidden relative shadow-inner border border-slate-400">
                {/* 中央線 */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-400/50 z-10" />

                {/* 黒の勢力バー (左から伸びるのではなく、黒の割合を示す) */}
                <div
                    className="h-full bg-slate-700 transition-all duration-700 ease-out"
                    style={{ width: `${result.percentage}%` }}
                />
            </div>
        </div>
    );
};