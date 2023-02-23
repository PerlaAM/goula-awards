"use client";
import "./globals.css";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

export default function RootLayout({ children }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <html className="h-full" lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */
      }
      <head />
      <body className="h-full">
        <nav className='flex items-center flex-wrap bg-white p-3 z-index fixed w-screen'>
          <Link href='/'>
            logo
          </Link>
          <button
            className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
            onClick={handleClick}
          >
            <FaBars className="mr-4 text-xl text-rose" />
          </button>
          <div
            className={`${active ? '' : 'hidden'
              }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          >
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
              <Link
                href="/"
                className="text-pink font-light hover:text-dark-pink lg:mr-3 mb-6 sm:m-0"
              >
                ¿QUÉ SON?
              </Link>
              <Link
                href="/category"
                className="text-pink font-light hover:text-dark-pink lg:mx-3 mb-6 sm:m-0"
              >
                CATEGORÍAS
              </Link>
              <Link
                href="/judge"
                className="text-pink font-light hover:text-dark-pink lg:mx-3 mb-6 sm:m-0"
              >
                JUECES
              </Link>
              <Link
                href="/login"
                className="lg:ml-3 rounded-lg py-2 px-3 text-center text-sm font-light transition-colors bg-rose text-yellow hover:bg-dark-rose"
              >
                INICIAR SESIÓN
              </Link>
            </div>
          </div>
        </nav>

        {children}</body>
    </html>
  );
}
