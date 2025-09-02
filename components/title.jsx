export const Title = ({ children, className }) => {
  return (
    <p
      className={(className = "text-sm text-[#334155] font-semibold leading-4")}
    >
      {children}
      <span className="text-[#E14942]"> *</span>
    </p>
  );
};
