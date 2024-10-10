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
    <header className="relative flex items-center justify-between py-2 md:py-8">
      <img src={logoIcon} alt="logoIcon" className="p-4 md:px-8" />
      <span className="absolute bottom-[1px] left-36 right-[65%] top-1/2 z-50 hidden h-[1px] bg-accent md:block"></span>

      {/* Desktop navigation */}
      <ul className="hidden w-2/3 items-center justify-around bg-accent px-44 py-10 md:flex">
        {navLinks.map((navlink, index) => (
          <li
            className="cursor-pointer font-sans-cond text-fs-400 uppercase"
            key={index}
          >
            <Link
              to={`${navlink.route}`}
              className={
                navlink.route === pathname &&
                'border-b-4 border-colorWhite py-10'
              }
            >
              <span className="mr-4 text-colorWhite">{navlink.number}</span>
              <span className="text-colorAccent">{navlink.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* MOblie Navigation Icon */}
      <div className="block p-4 md:hidden" onClick={handleNav}>
        {nav ? (
          <AiOutlineClose size={40} color="white" />
        ) : (
          <AiOutlineMenu size={40} color="white" />
        )}
      </div>

      <ul
        className={
          nav
            ? 'fixed right-0 top-0 z-20 h-full w-[60%] border-r border-r-gray-900 bg-dark duration-500 ease-in-out md:hidden'
            : 'fixed bottom-0 right-[-100%] top-0 w-[60%] duration-500 ease-in-out'
        }
      >
        <li className="my-10 ml-5">
          <AiOutlineClose size={40} color="white" onClick={handleNav} />
        </li>
        {navLinks.map((navlink, index) => (
          <li className="my-10 ml-5 px-8 text-fs-400" key={index}>
            <NavLink to={`${navlink.route}`}>
              <span className="mr-4 text-colorWhite">{navlink.number}</span>
              <span className="text-colorAccent">{navlink.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navigation;
