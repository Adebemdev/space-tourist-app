const CustomButton = ({ children, onclick, className }) => {
  return (
    <button
      className="font-roboto flex h-full w-full items-center justify-center rounded-full bg-white p-8 text-3xl uppercase"
      onclick={onclick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
