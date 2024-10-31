import { useState } from 'react';
import { Crews } from '../constant';
const Crew = () => {
  const [currentCrew, setCurrentCrew] = useState(Crews[0]);

  return (
    <div className="my-8 lg:max-h-96" data-testid="crew-container">
      <p
        className="mx-12 my-1 font-barlow-cond text-lg uppercase tracking-wider text-white md:my-10 lg:mx-40"
        data-testid="crew-paragraph-one"
      >
        <span className="mr-1 text-gray-400">02</span>Meet your crew
      </p>
      <div
        className="flex flex-col-reverse items-center md:flex-col lg:mx-auto lg:h-96 lg:w-3/4 lg:flex-row lg:justify-between"
        data-testid="outer-div"
      >
        <div
          className="flex flex-col-reverse items-center md:flex-col lg:h-96 lg:w-full lg:items-start"
          data-testid="inner-div"
        >
          <div
            className="flex flex-col items-center lg:items-start"
            data-testid="inner-div-content"
          >
            <p
              className="font-bellefair text-lg uppercase text-gray-500 md:mb-4 md:text-2xl"
              data-testid="para-1"
            >
              {currentCrew.role}
            </p>
            <p
              className="mb-2 font-bellefair text-4xl capitalize text-colorWhite md:mb-4 md:text-6xl"
              data-testid="para-2"
            >
              {currentCrew.name}
            </p>
            <p
              className="text-md w-[85%] text-center font-barlow text-[#D0D6F9] md:mb-4 md:w-[88%] md:text-lg lg:w-80 lg:text-left"
              data-testid="para-3"
            >
              {currentCrew.bio}
            </p>
          </div>
          <div
            className="mb-1 flex items-center gap-4 py-2"
            data-testid="data-content"
          >
            {Crews.map((crew, index) => {
              return (
                <p
                  className={`h-3 w-3 cursor-pointer rounded-full ${currentCrew.id === index ? `bg-white` : `bg-gray-500`}`}
                  key={crew.name}
                  onClick={() => setCurrentCrew(crew)}
                  data-testid={`paragraph-${crew.id}`}
                ></p>
              );
            })}
          </div>
        </div>
        <img
          src={currentCrew.image}
          alt=""
          className="lg:h-1/ mb-4 h-[60%] w-[60%] md:h-1/2 md:w-1/2 lg:h-full lg:w-full"
        />
      </div>
    </div>
  );
};

export default Crew;
