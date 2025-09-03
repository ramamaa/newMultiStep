export const Input = ({ className, onChange }) => {
  return (
    <input
      placeholder="Placeholder"
      onChange={onChange}
      className={
        (className =
          "border rounded-lg border-solid border-[#CBD5E1] w-[100%] p-3 placeholder:  text-base leading-5 font-normal h-11")
      }
    />
  );
};
