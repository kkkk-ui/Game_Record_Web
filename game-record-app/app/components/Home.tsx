"use client"
import React from "react";
import { useEffect, useState } from "react";


export const Home = () => {
    return(
        <div>
            <div className="relative">
                <img
                    src="background.png"
                    alt="Top Image"
                    className="absolute min-h-screen -z-100 opacity-40"
                />
            </div>
            <div
                className="absolute top-35 right-60 text-black"
                style={{
                    writingMode: "vertical-rl",
                    fontFamily: "serif",
                    letterSpacing: "0.15em",     // 文字間隔
                    lineHeight: "7em",           // 行間
                    textOrientation: "upright"   // 横倒しにならない
                }}
            >
                <span className="text-3xl font-bold tracking-widest">
                    現実の対局をリアルタイム記録
                </span>
                <br />
                <span className="text-lg font-light opacity-80">
                    熱い一戦を、最高のAI分析で振り返り、次の一手を導く
                </span>
                <br />
                <span className="text-lg font-light opacity-80">
                    あなたの隣に新しい将棋を
                </span>
            </div>
        </div>

        
    );
}

export default Home;
