interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className="rounded-md border-2 border-secondary bg-background px-3 py-2 text-white outline-none placeholder:capitalize focus:border-white"
    />
  );
};

export default Input;
