import React, { useState } from "react";
import { navLinks } from "../constants";

function Nav() {
  const [showNavMenu, setShowMenu] = useState(false);
  return (
    <header className="pt-8 absolute z-20 w-full px-8 lg:px-24">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src="src/assets/images/header-logo.svg"
            alt="Logo"
            width={130}
            height={29}
          />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link, index) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="front-montserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="group relative hidden max-lg:block cursor-pointer">
          <img
            src="src/assets/icons/hamburger.svg"
            width={25}
            height={25}
            onClick={() => setShowMenu(!showNavMenu)}
          />
          <ul className="bg-white hidden absolute flex-col rounded-lg list-none shadow-xl p-5 px-7 z-20  gap-1 sm:group-hover:flex right-[0]">
            {navLinks.map((link, index) => (
              <li
                key={link.label}
                className="front-montserrat leading-normal text-lg hover:text-slate-gray whitespace-nowrap"
              >
                <a href={link.href} className="">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {showNavMenu && (
            <ul className="bg-white sm:hidden absolute flex-col rounded-lg list-none shadow-xl p-5 px-7 z-20  gap-1 right-[0]">
              {navLinks.map((link, index) => (
                <li
                  key={link.label}
                  className="front-montserrat leading-normal text-lg hover:text-slate-gray whitespace-nowrap"
                >
                  <a href={link.href} className="">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Nav;
