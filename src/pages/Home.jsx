import React from 'react';
import { navLinks } from '../constant/index';
import logoIcon from '../../public/assets/shared/logo.svg';
import CustomButton from '../ui/CustomButton';

const Home = () => {
  return (
    <div className="relative h-screen">
      <header className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between bg-opacity-50 py-4">
        <img src={logoIcon} alt="logoIcon" className="px-8" />
        <div className="relative w-1/2">
          <div className="absolute bottom-[1px] left-0 right-0 z-50 h-[1px] bg-gray-600"></div>
        </div>
        <div className="relative z-10 flex w-[70%] items-center justify-center gap-20 bg-gray-600 p-8 text-base uppercase opacity-50">
          {navLinks.map((navlink, index) => (
            <ul className="flex">
              <li key={index}>
                <a className="font-roboto flex cursor-pointer text-white">
                  {navlink.label}
                </a>
              </li>
            </ul>
          ))}
        </div>
      </header>
      <div className="absolute top-80 flex h-80 items-center justify-between gap-10 px-32">
        <div className="flex h-full w-1/3 flex-col gap-4">
          <span className="font-roboto text-2xl text-white">
            So, you want to travel to{' '}
          </span>
          <span className="font-roboto mb-4 text-8xl font-bold uppercase text-white">
            Space
          </span>
          <p className="font-roboto leading-relaxed tracking-wide text-white">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="mr-20 flex h-44 w-44 items-center">
          <CustomButton>Explore</CustomButton>
        </div>
      </div>
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/assets/home/background-home-desktop.jpg"
        />
        <source
          media="(min-width: 768px) and (max-width: 1024px)"
          srcSet="/assets/home/background-home-tablet.jpg"
        />
        <source
          media="(max-width: 768px)"
          srcSet="/assets/home/background-home-mobile.jpg"
        />
        <img
          src="/assets/home/background-home-mobile.jpg"
          alt="Background"
          className="h-full w-full object-cover"
        />
      </picture>
    </div>
  );
};

export default Home;
