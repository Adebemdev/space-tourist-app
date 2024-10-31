import { useState } from 'react';
import { planets } from '../constant';
const Destination = () => {
  const [{ name, description, image, distance, travel }, setDestination] =
    useState(planets.Moon);

  return (
    <div data-testid="destination-box">
      <p
        className="my-2 flex items-center justify-center font-bellefair text-xl uppercase text-colorWhite md:mx-12 md:justify-start lg:mx-28 lg:mb-16 lg:mt-4 lg:text-lg"
        data-testid="paragraph-1"
      >
        <span className="mr-4 text-colorAccent">01</span>
        Pick your destination
      </p>
      <div
        className="mx-8 flex flex-col items-center lg:mx-auto lg:max-h-96 lg:w-3/4 lg:flex-row lg:gap-16 lg:p-4"
        data-testid="image-text-container"
      >
        <img
          data-testid="image"
          src={image}
          alt=""
          className="mb-4 h-1/3 w-1/3 md:my-20 lg:h-1/3 lg:w-1/3"
        />
        <div
          className="flex w-full flex-col items-center gap-4 lg:w-1/2 lg:justify-center"
          data-testid="content-container"
        >
          <div className="flex gap-4" data-testid="data-container">
            {Object.keys(planets).map((planet) => {
              return (
                <p
                  className={`cursor-pointer font-barlow-cond text-lg uppercase tracking-tighter text-colorWhite lg:text-xl ${planet === name ? 'border-b-2 border-white pb-1' : ''}`}
                  key={planet}
                  onClick={() => setDestination(planets[planet])}
                  data-testid={`content-section-${planet}`}
                >
                  {planet}
                </p>
              );
            })}
          </div>
          <p className="font-bellefair text-4xl uppercase text-colorWhite md:text-9xl lg:text-8xl">
            {name}
          </p>
          <p
            className="mb-4 w-full text-center font-barlow text-base leading-6 tracking-normal text-colorAccent md:w-1/2 lg:mb-4 lg:w-full"
            data-testid="description"
          >
            {description}
          </p>
          <div
            className="flex flex-col gap-8 md:flex-row"
            data-testid="outer-box"
          >
            <div
              className="flex flex-col items-center uppercase"
              data-testid="inner-box"
            >
              <p
                className="font-barlow-cond text-sm text-colorAccent"
                data-testid="para-1"
              >
                Avg.Distance
              </p>
              <p
                className="font-bellefair text-xl tracking-wide text-colorWhite"
                data-testid="para-2"
              >
                {distance}
              </p>
            </div>

            <div
              className="flex flex-col items-center uppercase tracking-tighter"
              data-testid="box-3"
            >
              <p
                className="font-barlow-cond text-sm text-colorAccent"
                data-testid="para-3"
              >
                Est.Travel Time
              </p>
              <p
                className="font-bellefair text-xl text-colorWhite"
                data-testid="para-4"
              >
                {travel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
