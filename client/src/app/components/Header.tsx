"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpened, setisMenuOpened] = useState(false);
  return (
    // this is mobile header 
    <div className="fixed top-0 w-full z-20">
      <nav className="flex justify-between items-center px-7.5 py-4 relative bg-neutral-bg sm:hidden">
        <Link href="/">
          <Image
            src="/images/logoM.svg"
            alt="Logo. Go to home page."
            width={107}
            height={42}
          ></Image>
        </Link>
        <div className="flex items-center gap-5">
          <svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.71215 7.70833H32.375L29.2917 18.5H11.3724M30.8333 24.6667H12.3333L9.25 4.625H4.625M13.875 30.8333C13.875 31.6848 13.1848 32.375 12.3333 32.375C11.4819 32.375 10.7917 31.6848 10.7917 30.8333C10.7917 29.9819 11.4819 29.2917 12.3333 29.2917C13.1848 29.2917 13.875 29.9819 13.875 30.8333ZM30.8333 30.8333C30.8333 31.6848 30.1431 32.375 29.2917 32.375C28.4402 32.375 27.75 31.6848 27.75 30.8333C27.75 29.9819 28.4402 29.2917 29.2917 29.2917C30.1431 29.2917 30.8333 29.9819 30.8333 30.8333Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: isMenuOpened ? "block" : "none" }}
            onClick={() => setisMenuOpened((prev) => !prev)}
          >
            <path
              d="M29.2914 7.70833L7.70801 29.2917M7.70805 7.70833L29.2914 29.2917"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: isMenuOpened ? "none" : "block" }}
            onClick={() => setisMenuOpened((prev) => !prev)}
          >
            <path
              d="M34.6875 8.38165H2.3125C1.83381 8.38165 1.44531 8.77015 1.44531 9.24884C1.44531 9.72753 1.83381 10.116 2.3125 10.116H34.6875C35.1662 10.116 35.5547 9.72753 35.5547 9.24884C35.5547 8.77015 35.1662 8.38165 34.6875 8.38165ZM20.8125 17.6328H2.3125C1.83381 17.6328 1.44531 18.0213 1.44531 18.5C1.44531 18.9787 1.83381 19.3672 2.3125 19.3672H20.8125C21.2912 19.3672 21.6797 18.9787 21.6797 18.5C21.6797 18.0213 21.2912 17.6328 20.8125 17.6328ZM9.31128 26.8828H2.3125C1.83381 26.8828 1.44531 27.2713 1.44531 27.75C1.44531 28.2287 1.83381 28.6172 2.3125 28.6172H9.31128C9.78997 28.6172 10.1785 28.2287 10.1785 27.75C10.1785 27.2713 9.78997 26.8828 9.31128 26.8828Z"
              fill="black"
            />
          </svg>
        </div>

        {isMenuOpened && (
          <ul className="absolute border top-full right-7.5 bg-[#30221B] text-white pt-10.5 pb-8 px-6 text-xl space-y-5 w-[276px] font-grotesk-500 tracking-[0.01em] border-none">
            <li>
              <Link href="/">Home Decor</Link>
            </li>
            <li>
              <Link href="/">Souvenirs</Link>
            </li>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Log In</Link>
            </li>

            <div className="pt-5 font-grotesk-400 tracking-[0.02em]">
              <address className="text-base">
                Nubra Souvenir Lamdon Complex, Nubra Diskit
              </address>
              <address className="text-base">Leh Ladakh - 19001</address>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                src="/images/whatsapp.svg"
                alt="Call with Whatsapp"
                width={20}
                height={20}
                style={{ display: "inline" }}
              ></Image>
              <span className="text-base font-grotesk-400 tracking-[0.02em]">
                9419529117
              </span>
            </div>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Header;
