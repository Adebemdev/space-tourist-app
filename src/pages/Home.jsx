const Home = () => {
  return (
    <div
      className="my-8 flex flex-col gap-16 md:my-20 md:gap-20 lg:flex-row"
      data-testid="content-box"
    >
      <div
        className="flex flex-col items-center p-4 lg:w-full lg:items-start lg:px-40"
        data-testid="section-1"
      >
        <h1
          className="mb-4 font-barlow-cond text-base uppercase tracking-widest text-colorAccent md:mb-8 md:text-xl lg:mb-2"
          data-testid="heading-1"
        >
          So, you want to travel to <br />
        </h1>
        <span className="mb-8 font-bellefair text-6xl uppercase tracking-wide text-colorWhite md:mb-8 md:text-9xl lg:mb-4">
          Space
        </span>
        <p
          className="text-wrap text-center font-barlow leading-7 tracking-wide text-colorAccent md:w-1/2 md:leading-7 lg:w-full lg:text-left lg:leading-6"
          data-testid="paragraph-1"
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div
        className="mt-2 flex justify-center md:mt-32 lg:mt-36 lg:w-full"
        data-testid="section-2"
      >
        <p
          className="flex h-40 w-40 items-center justify-center rounded-full bg-colorWhite font-bellefair text-2xl uppercase md:h-60 md:w-60 md:text-4xl"
          data-testid="paragraph-2"
        >
          Explore
        </p>
      </div>
    </div>
  );
};

export default Home;
