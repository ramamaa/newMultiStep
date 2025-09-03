export const Button = ({ className, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={
        (className =
          "bg-[#121316] border rounded-md h-11 w-100%  flex flex-col items-end ")
      }
    >
      <span className="text-white flex gap-1 justify-center items-center py-2.5 px-3 ">
        {children} <img src="chevron_right.png" />
      </span>
    </button>
  );
};
