const CustomButton = ({ children, onclick, className }) => {
  return (
    <button
      className="after:custom-transition relative left-96 z-10 flex aspect-[2/2] items-center justify-center rounded-full bg-white p-8 font-serif text-3xl uppercase after:absolute after:-z-10 after:flex after:h-full after:w-full after:rounded-full after:bg-accent after:p-20 after:opacity-0 after:hover:-scale-[1.5] after:hover:opacity-100"
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
