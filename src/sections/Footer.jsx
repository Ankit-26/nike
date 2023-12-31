import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign, shoeLogo } from "../assets/icons";

function Footer() {
  return (
    <footer className="mt-24 bg-black padding-x padding-t pb-8">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <div className="h-[4rem] w-[7rem] ">
              <img
                src={shoeLogo}
                alt="Logo"
                className="h-[4rem] w-[7.5rem] object-cover "
              />
            </div>
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest ShoeShop store.
            Find Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((item, index) => (
              <div
                key={index}
                className="bg-white flex justify-center items-center p-1 rounded-full"
              >
                <img src={item.src} alt={item.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-between flex-1 lg:gap-10 gap-20">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-montserrat text-2xl font-medium leading-normal mb-6">
                {section.title}
              </h4>
              <ul className="list-none">
                {section.links.map((link, index) => (
                  <li
                    key={link.name}
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                  >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex gap-3 justify-start items-center font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            width={20}
            height={20}
            alt="copyright"
            className="rounded-full m-0"
          ></img>
          <p className="font-montserrat cursor-pointer">
            Copyright. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
