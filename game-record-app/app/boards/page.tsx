"use client";
import { useSearchParams } from "next/navigation";
import GameRecordView from "../components/GameRecordView";

export default function BoardsPage() {
  const searchParams = useSearchParams();
  const boardId = searchParams.get("board_id");

  if (!boardId) {
    return (
      <div className="p-8">
        <h1 className="text-xl font-bold">棋譜一覧</h1>
        {/* 一覧表示 */}
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">棋譜表示</h1>
      <p>棋譜ID：{boardId}</p>
      <GameRecordView /* board={...} */ />
    </div>
  );
}