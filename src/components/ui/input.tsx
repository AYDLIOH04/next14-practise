interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className="placeholder:capitalize text-white rounded-md px-3 py-2 outline-none bg-background border-secondary focus:border-white border-2"
    />
  );
};

export default Input;
