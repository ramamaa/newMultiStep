export const Button = ({ className, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={
        (className =
          "bg-[#121316] border rounded-md border-solid h-11 w-100% py-2.5 px-3 ")
      }>
      <span className="text-white flex gap-1 justify-center items-center  ">
        {children} <img src="chevron_right.png" />
      </span>
    </button>
  );
};
