"use client"
import React from "react";
import { useEffect, useState } from "react";

export const Home = () => {
    return(
        <div>
            <div className="relative">
                <img
                    src="background5.png"
                    alt="Top Image"
                    className="fixed inset-0 w-screen h-screen object-cover z-0"
                />
            </div>
            <div
                className="absolute text-white top-30 right-5 md:top-40 md:right-60"
                style={{
                    writingMode: "vertical-rl",
                    fontFamily: "serif",
                    letterSpacing: "0.15em",                    // 文字間隔
                    lineHeight: "clamp(3em, 5vw, 6em)",         // 行間
                    textOrientation: "upright"                  // 横倒しにならない
                }}
            >
                <span className="text-xl md:text-3xl font-bold tracking-widest">
                    現実の対局をリアルタイム記録
                </span>
                <br/>
                <span className="text-sm md:text-lg font-light opacity-80">
                    熱い一戦を、最高のAI分析で振り返り、次の道筋を導く
                </span>
                <br/>
                <span className="text-sm md:text-lg font-light opacity-80">
                    あなたの隣に新しい戦略を
                </span>
            </div>
        </div>

        
    );
}

export default Home;
