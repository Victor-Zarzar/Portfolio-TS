import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import clsx from 'clsx';

interface NavbarProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {

  const TextColor = clsx("text-lg md:text-lg lg:text-xl hover:text-gray-600 focus:outline-none pl-6 md:pl-2 lg:pl-20", {
    'text-gray-300': theme === 'light',
    'text-gray-500': theme === 'dark',
  })

  const Text = clsx("text-lg md:text-lg lg:text-xl hover:text-gray-600 focus:outline-none duration-500", {
    'text-gray-300': theme === 'light',
    'text-gray-500': theme === 'dark',
  })

  const Links = [
    { name: "Home", link: "/" },
    { name: "About me", link: "about" },
    { name: "Contact", link: "contact" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-[95rem]">
      <div className="md:flex items-center justify-between py-5 md:px-10 px-6">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <span className={TextColor}>Victor Zarzar</span>
          <Image
            src="/webdeveloper.gif"
            alt="webdeveloper"
            width={25}
            height={20}
            priority
            className="h-8 w-7 md:w-8 md:h-8 lg:w-8 lg:h-8 ml-1"
          />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-gray-400">
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 sm:bg-transparent transition-all duration-500 ease-in ${open ? "top-12" : "top-[-490px]"}`}>
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-2 font-semibold" key={link.name}>
              <Link href={`/${link.link}`} passHref>
                <div className={Text}>
                  {link.name}
                </div>
              </Link>
            </li>
          ))}
          <li className="md:ml-3 md:my-0 my-1">
            <button
              className="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => {
                setTheme((prevTheme: string) => (prevTheme === "light" ? "dark" : "light"));
              }}>
              <svg
                className={`fill-violet-700 block ${theme === "light" ? "hidden" : ""}`}
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              <svg
                className={`fill-yellow-100 block ${theme === "dark" ? "hidden" : ""}`}
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd" clipRule="evenodd">
                </path>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
