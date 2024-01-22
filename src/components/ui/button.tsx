import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: "full" | "outline" | "link";
}

const Button = ({ children, variant = "full", ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        "capitalize",
        {
          "rounded-md bg-accent hover:bg-opacity-70 duration-200 py-2 px-3 text-white disabled:cursor-not-allowed disabled:opacity-50":
            variant === "full",
        },
        {
          "font-bold text-accent text-[20px] before:duration-500 relative before:absolute hover:before:w-full before:w-0 before:rounded-md before:h-[3px] before:bg-accent before:-bottom-0.5 before:right-0":
            variant === "link",
        },
        {
          "font-bold text-accent border-accent border-2 text-[20px] rounded-md py-2 hover:bg-accent hover:text-white duration-300":
            variant === "outline",
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
