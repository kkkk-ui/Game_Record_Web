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
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

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

    useEffect(() => {
        let timer: ReturnType<typeof setInterval>;
        if (isPlaying && currentIndex < boardrecords.length - 1) {
            timer = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
            }, 500); 
        } else {
            setIsPlaying(false);
        }
        return () => clearInterval(timer);
    }, [isPlaying, currentIndex]);

    return(
        <div className="min-h-[50dvh]">
            <div className="grid grid-cols-5 gap-2 w-fit border p-5 bg-gray-800 drop-shadow-lg rounded-lg">
                {currentBoard?.map((row, r) =>
                    row.map((cell, c) => (
                    <div
                        key={`${r}-${c}`}
                        className={`
                        w-12 h-12
                        md:w-16 md:h-16
                        flex items-center justify-center
                        border
                        text-white
                        ${(r+c+1)%2 === 0 ? "bg-gray-600/50" : "bg-gray-400"}
                        `}
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
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center gap-4 m-4">
                    <button
                        onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
                        className="px-4 py-1 rounded-md drop-shadow-lg bg-gray-300 transition hover:scale-110 active:scale-95"
                    >
                        戻る
                    </button>

                    <span>
                        手数：{boardrecords[currentIndex]?.board_number}
                    </span>

                    <button
                        onClick={() => setCurrentIndex((i) => Math.min(i + 1, boardrecords.length - 1))}
                        className="px-4 py-1 rounded-md drop-shadow-lg bg-gray-300 transition hover:scale-110 active:scale-95"
                    >
                        進む
                    </button>
                </div>
                <div className="w-full flex items-center justify-center">
                    <input 
                        type="range"
                        min="0"
                        max={boardrecords.length - 1}
                        value={currentIndex}
                        onChange={(e) => setCurrentIndex(Number(e.target.value))}
                        className="flex-grow h-2 bg-gray-200 rounded-lg cursor-pointer accent-blue-500"
                    />
                    <button 
                        onClick={() => setIsPlaying(!isPlaying)} 
                        className="flex-shrink-0 m-2 p-1 bg-red-500 text-white rounded-lg shadow-lg 
                                   shadow-red-500/30 w-10 h-10 flex items-center justify-center transition hover:bg-red-400 hover:scale-105 active:scale-95"
                    >
                        {isPlaying ? "■" : "▶"}
                    </button>
                </div>
            </div>
            
        </div>
    );
};

export default GameRecordView;
