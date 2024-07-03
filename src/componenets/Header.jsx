import React from "react";
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  return (
    <>
      <div>
        <header className="flex p-6 items-center justify-around">

          <a href="#"><h1 className="text-3xl font-bold md:text-5xl lg:text-4xl">LOGO</h1></a>

          <button className="bg-gradient-to-r from-red-300 to-orange-400 p-2 rounded-full md:text-2xl md:p-4 lg:text-sm text-white">
            Host Is Hiring 
          </button>

          <div>
            <ul className="lg:flex lg:gap-7 md:hidden min-[320px]:hidden">
              <li><a href="#">Home</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>

          <div className="lg:flex lg:items-center lg:gap-5 md:hidden min-[320px]:hidden">
          <button className>Sing in</button>
          <button className="bg-blue-500 p-2 text-white rounded-md">Join Waitlist</button>
          </div>

          <div className="text-2xl font-bold md:text-4xl lg:hidden">
            <RiMenu3Fill />
          </div>

        </header>
      </div>
    </>
  );
};

export default Header;
