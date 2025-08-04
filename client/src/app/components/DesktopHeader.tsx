import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const DesktopHeader =  () => {
  const { toggleCart } = useCart();
  const path = usePathname(); 
  return (
    <>
      <nav className="max-sm:hidden bg-linear-to-b from-black to-black/55 text-white text-[16.5px] font-grotesk-400 flex items-center justify-between max-w-[1321px] px-5 md:px-10 py-2.5 rounded-[500px] fixed top-5 w-full left-1/2 -translate-x-1/2 z-10">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Logo. Go to home page."
            width={107}
            height={42}
          ></Image>
        </Link>

        {/* first list  */}
        <ul className="flex items-center gap-5 md:gap-10">
          <li>
            <Link
              href="/"
              className="pb-0.5 border-b border-transparent hover:border-white transition-all duration-75 ease-in"
            >
              Home Decor
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="pb-0.5 border-b border-transparent hover:border-white transition-all duration-75 ease-in"
            >
              Souvenirs
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="pb-0.5 border-b border-transparent hover:border-white transition-all duration-75 ease-in"
            >
              About Us
            </Link>
          </li>
        </ul>
        {/* second list  */}
        <ul className="flex items-center gap-3 md:gap-6.5">
          <li>
            <Link
              href="/signup"
              className="pb-0.5 border-b border-transparent hover:border-white transition-all duration-75 ease-in"
            >
              Log In
            </Link>
          </li>
          <li
            className="pb-0.5 border-b border-transparent hover:border-white transition-all duration-75 ease-in"
            style={{display : path === '/checkout' ? 'none' : 'block'}}
            onClick={toggleCart}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.71215 7.70833H32.375L29.2917 18.5H11.3724M30.8333 24.6667H12.3333L9.25 4.625H4.625M13.875 30.8333C13.875 31.6848 13.1848 32.375 12.3333 32.375C11.4819 32.375 10.7917 31.6848 10.7917 30.8333C10.7917 29.9819 11.4819 29.2917 12.3333 29.2917C13.1848 29.2917 13.875 29.9819 13.875 30.8333ZM30.8333 30.8333C30.8333 31.6848 30.1431 32.375 29.2917 32.375C28.4402 32.375 27.75 31.6848 27.75 30.8333C27.75 29.9819 28.4402 29.2917 29.2917 29.2917C30.1431 29.2917 30.8333 29.9819 30.8333 30.8333Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
          <li className="pb-0.5 border-b border-transparent hover:border-white transition-all duration-75 ease-in" onClick={() => signOut()}>
            <Link href="/">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8866 1.86667C14.595 1.86667 14.2916 1.86667 14 1.86667C13.7083 1.86667 13.405 1.86667 13.1133 1.86667C7.27996 2.43834 4.15329 9.03 6.91829 14.1633L13.1016 25.6667C13.1877 25.8304 13.3169 25.9674 13.4752 26.063C13.6336 26.1587 13.815 26.2092 14 26.2092C14.1849 26.2092 14.3664 26.1587 14.5247 26.063C14.683 25.9674 14.8122 25.8304 14.8983 25.6667L21.0816 14.1983C23.8466 9.03 20.685 2.43834 14.8866 1.86667Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="bevel"
                />
                <path
                  d="M16.9168 9.91667C16.9168 8.30584 15.611 7 14.0002 7C12.3893 7 11.0835 8.30584 11.0835 9.91667C11.0835 11.5275 12.3893 12.8333 14.0002 12.8333C15.611 12.8333 16.9168 11.5275 16.9168 9.91667Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="bevel"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default DesktopHeader;
