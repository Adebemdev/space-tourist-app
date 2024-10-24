import logoIcon from '../../public/assets/shared/logo.svg';
import { navLinks } from '../constant';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import React, { useState } from 'react';

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="relative flex h-14 max-w-[1240px] items-center justify-between md:h-24 md:min-w-full">
      <img
        src={logoIcon}
        alt="logoIcon"
        className="h-16 w-16 p-4 md:h-20 md:w-20 lg:mx-8"
      />
      <span className="absolute bottom-[1px] left-40 right-[58%] top-1/2 z-50 hidden h-[1px] bg-accent md:hidden lg:block"></span>

      {/* Desktop navigation */}
      <ul className="hidden items-center justify-around gap-8 bg-accent p-8 md:flex md:w-[60%]">
        {navLinks.map((navlink, index) => (
          <li
            className="font-sans-cond cursor-pointer text-fs-400 uppercase md:text-fs-200"
            key={index}
          >
            <Link
              to={`${navlink.route}`}
              className={
                navlink.route === pathname
                  ? 'border-b-4 border-colorWhite py-10 md:py-8'
                  : ''
              }
            >
              <span className="mr-4 text-colorWhite md:hidden">
                {navlink.number}
              </span>
              <span className="text-colorAccent">{navlink.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* MOblie Navigation Icon */}
      <div className="block p-4 md:hidden" onClick={handleNav}>
        {nav ? (
          <AiOutlineClose size={40} color="white" className="h-6 w-6" />
        ) : (
          <AiOutlineMenu size={40} color="white" className="h-6 w-6" />
        )}
      </div>

      <ul
        className={
          nav
            ? 'fixed right-0 top-0 z-20 h-full w-[60%] border-r border-r-gray-900 bg-dark duration-500 ease-in-out md:hidden'
            : '+w-[60%] fixed bottom-0 right-[-100%] top-0 duration-500 ease-in-out'
        }
      >
        <li className="my-10 ml-5">
          <AiOutlineClose
            size={40}
            color="white"
            onClick={handleNav}
            className="h-5 w-6"
          />
        </li>
        {navLinks.map((navlink, index) => (
          <li className="my-10 px-8 font-bellefair text-fs-400" key={index}>
            <NavLink to={`${navlink.route}`}>
              <span className="text-colorWhite">{navlink.number}</span>
              <span className="text-colorAccent">{navlink.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navigation;
