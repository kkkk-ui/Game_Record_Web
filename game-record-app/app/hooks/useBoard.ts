"use client";
import { useCallback, useEffect, useState } from "react";
import * as Query from "@/app/services/board";

type board = {
    readonly product_id: string;
    readonly board_id: string;
}

export const useBoard = (productId: string) => {
    const [boards, setBoards] = useState<board[]>([]);
    
    useEffect(() => {
        const fetchBoards = async () => {
            if (!productId) return;
            const {data, error} = await Query.fetchBoard(productId);
            if (error) {
                console.error(error);
                setBoards([]);
            }
            else setBoards(data || []);
        };
        fetchBoards();
    }, [productId]);

    return {boards};
}