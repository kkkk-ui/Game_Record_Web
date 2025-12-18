"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import GameRecordView from "../components/GameRecordView";

export const BoardsPage = () => {
  const searchParams = useSearchParams();
  const boardId = searchParams.get("board_id");

  if (!boardId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>棋譜が選択されていません</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-teal-50 to-cyan-50 " style={{fontFamily: "serif"}}>
      <div className="p-8 pt-40 flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold">棋譜表示</h1>
        <p>棋譜ID：{boardId}</p>
        <GameRecordView boardId={boardId} />
      </div>
    </div>
    
  );
}

export default BoardsPage;