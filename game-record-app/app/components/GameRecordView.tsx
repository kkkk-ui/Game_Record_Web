"use client"
import React from "react";
import { useEffect, useState } from "react";
import * as Query from "@/app/services/boardrecord";
import Image from "next/image";

interface RecordViewProps {
  boardId: string;
}

type BoardRecord = {
    board_number: string;
    board:number[]; 
}

export const GameRecordView: React.FC<RecordViewProps> = ({boardId}) => {
    const [boardrecords, setBoardRecords] = useState<BoardRecord[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const to2D = (board: number[]) => {
        const size = 5;
        return Array.from({ length: size }, (_, r) =>
            board.slice(r * size, (r + 1) * size)
        );
    };

    const currentBoard = boardrecords.length > 0
                         ? to2D(boardrecords[currentIndex].board)
                         : null;

    useEffect(()=>{
        const fetchBoardRecords = async () => {
            if (!boardId) return;
            const {data, error} = await Query.fetchBoardRecord(boardId);
            console.log(data);
            if (error){
                console.error(error);
            }
            else setBoardRecords(data || []);
        };
        fetchBoardRecords();
    },[boardId])

    return(
        <div className="min-h-[50dvh]">
            <div className="grid grid-cols-5 gap-2 w-fit border p-5 bg-gray-800">
                {currentBoard?.map((row, r) =>
                    row.map((cell, c) => (
                    <div
                        key={`${r}-${c}`}
                        className="
                        w-12 h-12
                        md:w-16 md:h-16
                        flex items-center justify-center
                        border
                        text-white
                        bg-gray-600
                        "
                    >
                        {/* {cell !== 0 ? cell : ""} */}
                        {cell !== 0 && (
                            <Image
                                src={cell === 1 ? "/pawn1.svg" :
                                     cell === -1 ? "/pawn2.svg" :
                                     cell === 2 ? "/knight1.svg" :
                                     cell === -2 ? "/knight2.svg" :
                                     cell === 3 ? "king1.svg":"king2.svg"}
                                alt="chess"
                                width={50}
                                height={50}
                            />
                        )}
                        
    
                    </div>
                    ))
                )}
            </div>
            <div className="flex items-center justify-center gap-4 m-4">
                <button
                    onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
                    className="px-4 py-1 rounded bg-gray-300 transition hover:scale-110"
                >
                    前
                </button>

                <span>
                    手数：{boardrecords[currentIndex]?.board_number}
                </span>

                <button
                    onClick={() => setCurrentIndex((i) => Math.min(i + 1, boardrecords.length - 1))}
                    className="px-4 py-1 rounded bg-gray-300 transition hover:scale-110"
                >
                    後
                </button>
            </div>
            
        </div>
    );
};

export default GameRecordView;
