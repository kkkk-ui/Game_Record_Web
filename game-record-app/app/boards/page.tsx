"use client";

import { Suspense } from "react";
import BoardsPage from "../components/BoardsPage";

export default function Page() {
  return (
    <Suspense fallback={<div>読み込み中...</div>}>
      <BoardsPage />
    </Suspense>
  );
}



