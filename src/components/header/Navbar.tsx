"use client";
import React from "react";
import Link from "next/link";
import { navLinks } from "./menu";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/stores";

export default function NavbarComponent() {
  const count = useSelector((state:RootState)=>state.cart.itemsCount)
  const pathname = usePathname();

  return (
    <nav className="bg-gradient-to-r from-teal-500 to-blue-600 py-3 shadow-lg rounded-b-lg">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-6 mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="https://i.pinimg.com/736x/ae/fb/32/aefb32e7f7812102cf2e5756169b13db.jpg"
            className="h-7 mr-3 sm:h-10"
            alt="TechFlow Logo"
            width={40}
            height={40}
            unoptimized
          />
          <span className="self-center text-xl font-extrabold whitespace-nowrap text-white">
            Mareta
          </span>
        </Link>
        <div className="flex items-center lg:order-2">
          <Link
            href="https://tanstack.com/"
            className="text-white bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 focus:ring-4 focus:ring-orange-300 font-semibold rounded-full text-sm px-6 py-2.5 sm:mr-2 lg:mr-0 focus:outline-none transition-all duration-200"
          >
            Get Started
          </Link>
          <Link
            href="/cart"
            className="relative flex items-center text-white bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 focus:ring-4 focus:ring-orange-300 font-semibold rounded-full text-sm px-6 py-2.5 sm:mr-2 lg:mr-0 focus:outline-none transition-all duration-200 mx-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0l1.7 6.374a2.25 2.25 0 002.183 1.704h7.299a2.25 2.25 0 002.183-1.704l1.7-6.374m-15.352 0h15.352" />
              <circle cx="9" cy="20" r="1.25" />
              <circle cx="17" cy="20" r="1.25" />
            </svg>
            <span className="ml-1">Cart</span>
            {count > 0 && (
              <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center border-2 border-white">{count}</span>
            )}
          </Link>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-2 text-sm text-white rounded-lg lg:hidden hover:bg-orange-500/30 focus:outline-none focus:ring-2 focus:ring-orange-400"
            aria-controls="mobile-menu-2"
            aria-expanded="true"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-10 lg:mt-0">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.path;

              return (
                <Link
                  key={index}
                  href={link.path}
                  className={`block py-2 pl-3 pr-4 rounded-md text-white hover:bg-orange-500/20 lg:hover:bg-transparent lg:hover:text-orange-300 lg:p-0 transition-colors duration-200
                  ${
                    isActive
                      ? "bg-orange-500/30 font-bold"
                      : "hover:text-orange-300"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
