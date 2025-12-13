import { supabase } from "@/app/lib/supabase/client";

export const fetchBoard = async (productId: string) => {
  return supabase
    .from("boards")
    .select(`
      product_id,
      board_id
    `)
    .eq("product_id", productId);
};
