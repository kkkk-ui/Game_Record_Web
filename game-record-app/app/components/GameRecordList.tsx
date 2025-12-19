"use client"
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useBoard } from "../hooks/useBoard";

interface RecordProps {
  productId: string;
}

export const GameRecordList:React.FC<RecordProps> = ({productId}) => {
    const {boards} = useBoard(productId);
    const router = useRouter();

    const handleView = (board_id:string) => {
        router.push(`/boards/?board_id=${board_id}`);
    }

    return(
        <div className="p-5 drop-shadow-lg rounded-2xl bg-white">
            <div className="items-center grid grid-cols-[1fr_1fr_auto] p-5 text-sm md:text-lg font-semibold border-b">
                <div>製品番号</div>
                <div className="pl-2">棋譜番号</div>
                <button 
                    className="
                    px-3 py-1 text-md rounded-md
                    bg-white text-black
                    "
                >
                    選択
                </button>
            </div>

            <div className="max-h-64 overflow-y-auto">
                {boards.map((board) => (
                    <div
                        key={board.board_id}
                        className="grid grid-cols-[1fr_1fr_auto] items-center p-5 text-sm md:text-lg border-b last:border-none"
                    >
                        <div>{board.product_id}</div>
                        <div className="pl-2">{board.board_id}</div>

                        <button
                            onClick={() => handleView(board.board_id)}
                            className="
                            px-4 py-1 text-sm rounded-md
                            bg-blue-500 text-white
                            shadow-lg shadow-blue-500/30
                            transition
                            hover:bg-blue-400 hover:scale-110
                            active:scale-95
                            "
                        >
                            閲覧
                        </button>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default GameRecordList