"use client"
import React from "react";
import { useEffect, useState } from "react";
import GameRecord from "../components/GameRecord";

export const gameRecord = () => {
    return(
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-teal-50 to-cyan-50">
            <GameRecord/>
        </div>
    );
}

export default gameRecord;
