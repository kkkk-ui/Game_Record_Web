"use client"
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

type NavItem = {
  href: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { href: "/search", label: "棋譜検索"},
  { href: "/mypage", label: "マイページ"},
  { href: "/mypage", label: "ログイン"},
  { href: "/mypage", label: "新規登録"}
]

const NAV_style = "mx-5 text-xl text-center border-b-2 border-transparent hover:border-indigo-500 transition duration-300 ease-in-out"

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <header className="absolute top-0 left-0 w-full z-50 min-h-[60px] bg-white shadow px-4 py-2 flex items-center justify-between" style={{fontFamily: "serif"}}>
        <div className="mx-2 md:mx-6">
            <a href="/" className="text-4xl">♘</a>
        </div>
        <nav className="hidden mx-6 md:flex">
            {NAV_ITEMS.map((item)=>(
              <Link key={item.href} href={item.href} className={NAV_style}>
                {item.label}
              </Link>
            ))}
        </nav>
         <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
          aria-label="menu"
        >
          ☰
        </button>
        <div
          className={`
            absolute top-full right-0 w-48 bg-white shadow-lg
            transform transition-all duration-300
            ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
          `}
        >
          <nav className="flex flex-col p-4 gap-4">
            {NAV_ITEMS.map((item)=>(
              <Link key={item.href} href={item.href} className={NAV_style} onClick={() => setOpen(!open)}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
    </header>
  );
};

export default Header;
