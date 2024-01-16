export const ListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="relative before:w-[16px] before:h-[16px] before:border-accent before:border-[3px] before:rounded-full before:bg-background before:absolute before:-left-8 before:top-[calc(50%-8px)]">
      {children}
    </li>
  );
};
