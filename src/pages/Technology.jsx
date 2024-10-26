import React, { useEffect, useState, useContext } from 'react';
import { Vehicles } from '../constant';

const Technology = () => {
  const [seletectedTech, setSelectedTech] = useState(Vehicles[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(
        window.innerWidth <= 768 ||
          (window.innerWidth > 768 && window.innerWidth <= 1024)
      );
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsMobile]);

  return (
    <div className="my-10 h-3/4 overflow-y-auto overflow-x-hidden lg:h-auto">
      <p className="mx-12 my-1 mb-12 text-center font-barlow-cond text-lg uppercase tracking-wider text-white md:my-10 md:text-left md:text-2xl lg:mx-28">
        <span className="mr-4 text-gray-400">03</span>Space launch 101
      </p>
      <div className="flex flex-col justify-center lg:flex-row-reverse lg:items-center lg:justify-around">
        <img
          src={isMobile ? seletectedTech.imageMobile : seletectedTech.image}
          alt=""
          className="md:w-full lg:w-1/3"
        />
        <div className="flex flex-col lg:flex-row">
          <div className="my-12 mb-12 flex flex-row items-center justify-center gap-4 md:mb-4 lg:my-0 lg:flex-col lg:items-start lg:justify-between">
            {Vehicles.map((vehicle, index) => {
              return (
                <p
                  className={`mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-gray-500 font-bellefair text-xl md:mb-4 lg:h-16 lg:w-16 ${
                    seletectedTech.id === index + 1
                      ? `bg-white text-black`
                      : `bg-black text-white`
                  }`}
                  key={vehicle.name}
                  onClick={() => setSelectedTech(Vehicles[index])}
                >
                  {index + 1}
                </p>
              );
            })}
          </div>
          <div className="mx-16 flex flex-col items-center justify-center lg:items-start">
            <p className="text-md mb-4 font-barlow-cond uppercase text-colorAccent lg:mb-0">
              The terminology...
            </p>
            <p className="mb-10 mt-3 font-bellefair text-3xl uppercase text-colorWhite md:mb-5 lg:mb-4 lg:w-40 lg:text-5xl">
              {seletectedTech.name}
            </p>
            <p className="w-80 font-barlow-cond text-lg leading-7 tracking-wide text-colorAccent">
              {seletectedTech.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
