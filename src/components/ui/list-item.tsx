export const ListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="relative before:absolute before:-left-8 before:top-[calc(50%-8px)] before:h-[16px] before:w-[16px] before:rounded-full before:border-[3px] before:border-accent before:bg-background">
      {children}
    </li>
  );
};
