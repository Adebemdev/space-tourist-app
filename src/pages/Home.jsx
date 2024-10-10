import CustomButton from '../ui/CustomButton';
const Home = () => {
  return (
    <main className="flex max-h-screen flex-col items-center gap-24 md:mx-auto md:flex-row">
      <div className="flex w-3/4 flex-col items-center justify-center bg-green-600 md:mx-32 md:my-10 md:w-2/3 md:place-items-start">
        <h1 className="font-sans-cond text-fs-400 text-[#D0D6F9] md:mb-0 md:text-fs-600">
          So, you want to travel to <br />
        </h1>
        <span className="md:m-0md:tracking-normal mb-4 px-8 text-center font-serif text-fs-700 uppercase tracking-widest text-colorWhite md:p-0 md:text-fs-800">
          Space
        </span>
        <p className="font-sans-cond leading-6 tracking-wider text-[#D0D6F9] md:leading-7 md:tracking-wide">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="flex bg-red-500 md:my-20 md:w-full">
        <CustomButton>Explore</CustomButton>
      </div>
    </main>
  );
};

export default Home;
