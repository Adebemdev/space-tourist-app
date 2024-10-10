const CustomButton = ({ children, onclick, className }) => {
  return (
    <button
      className="after:custom-transition relative flex aspect-[2/2] items-center justify-center rounded-full bg-white p-8 font-serif text-2xl uppercase md:left-96 md:text-3xl md:after:absolute md:after:-z-10 md:after:flex md:after:h-full md:after:w-full md:after:rounded-full md:after:bg-accent md:after:p-20 md:after:opacity-0 md:after:hover:-scale-[1.5] md:after:hover:opacity-100"
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
