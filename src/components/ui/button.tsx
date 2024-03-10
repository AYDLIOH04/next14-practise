import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: "full" | "outline" | "link";
}

export const Button = ({
  children,
  variant = "full",
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        "capitalize",
        {
          "rounded-md bg-accent px-3 py-2 text-white duration-200 hover:bg-opacity-70 disabled:cursor-not-allowed disabled:opacity-50":
            variant === "full",
        },
        {
          "relative text-[20px] font-bold text-accent before:absolute before:-bottom-0.5 before:right-0 before:h-[3px] before:w-0 before:rounded-md before:bg-accent before:duration-500 hover:before:w-full":
            variant === "link",
        },
        {
          "rounded-md border-2 border-accent py-2 text-[20px] font-bold text-accent duration-300 hover:bg-accent hover:text-white":
            variant === "outline",
        },
      )}
      {...props}
    >
      {children}
    </button>
  );
};
