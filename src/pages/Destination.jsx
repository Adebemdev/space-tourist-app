const Destination = () => {
  return (
    <main className="container mx-auto my-28 grid grid-cols-[1fr_1fr_auto] px-32">
      <div className="flex h-full w-2/3 flex-col">
        <h1 className="font-sans-cond text-fs-600 text-colorAccent">
          So, you want to travel to <br />
        </h1>
        <span className="font-bold font-serif text-fs-800 uppercase text-white">
          Space
        </span>
        <p className="font-sans-cond leading-7 tracking-wide text-colorAccent">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="my-14 flex h-full w-full items-center"></div>
    </main>
  );
};

export default Destination;
