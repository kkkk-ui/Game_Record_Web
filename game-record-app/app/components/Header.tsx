"use client"
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

type NavItem = {
  href: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { href: "/Record", label: "棋譜検索"},
  { href: "/mypage", label: "マイページ"},
  { href: "/auth/login", label: "ログイン"},
  { href: "/auth/signup", label: "新規登録"}
]

const NAV_style = "mx-5 text-xl text-center border-b-2 border-transparent hover:border-indigo-500 transition duration-300 ease-in-out"

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full min-h-[56px] bg-white shadow px-4 py-2 flex items-center justify-between">
        <div className="mx-5">
            <a href="/" className="text-xl">☗</a>
        </div>
        <nav className="mx-5">
            {NAV_ITEMS.map((item)=>(
              <Link href={item.href} className={NAV_style}>
                {item.label}
              </Link>
            ))}
        </nav>
    </header>
  );
};

export default Header;
