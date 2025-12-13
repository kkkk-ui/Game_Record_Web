import { supabase } from "@/app/lib/supabase/client";

export const fetchBoardRecord = async (boardId: string) => {
  return supabase
    .from("boardrecords")
    .select(`
      board_number,
      board
    `)
    .eq("board_id", boardId);
};
