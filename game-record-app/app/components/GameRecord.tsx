"use client"
import React from "react";
import { useEffect, useState } from "react";
import GameRecordList from "./GameRecordList";

export const GameRecord = () => {
    const [openRecord, setOpenRecord] = useState<boolean>(false); 
    const [text, setText] = useState<string>(""); 
    const [productId, setProductId] = useState<string>(""); 

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setProductId(text);
        setOpenRecord(true);
    };

    return(
        <div className="relative">
            <div className="absolute top-20 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <p className="p-3 text-2xl md:text-3xl">
                    棋譜検索
                </p>
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="製品番号を入力してください"
                        className="p-2 text-sm shadow-lg rounded-2xl bg-gray-300 focus:outline-none min-w-[60dvw] md:text-xl md:min-w-[30dvw] md:max-w-[40dvw]"
                    />
                </form>
                {openRecord &&(
                    <div className="m-10 min-w-[70dvw] min-h-[60dvh]">
                        <GameRecordList productId={productId}/>
                    </div>
                )}
                
            </div>
        </div>
        
    );
}

export default GameRecord
