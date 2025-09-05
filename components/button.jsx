export const Button = ({ className, onClick, children, variant }) => {
  let classes = "border rounded-md h-11 w-100% ";

  if (variant === "primary") {
    classes += " bg-[#121316]  text-white ";
  } else if (variant === "secondary") {
    classes += "bg-white  border-[#CBD5E1]  text-black ";
  }
  return (
    <button onClick={onClick} className={classes}>
      <span className="flex gap-1 justify-center items-center py-2.5 px-3 ">
        {children} <img src="chevron_right.png" />
      </span>
    </button>
  );
};
