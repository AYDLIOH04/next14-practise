import { ImCross, ImMenu } from "react-icons/im";

type HeaderBurgerProps = {
  open: boolean;
  setOpen: any;
};

const HeaderBurger = ({ open, setOpen }: HeaderBurgerProps) => {
  const onBurgerToggle = () => {
    setOpen((current: boolean) => !current);
  };

  return (
    <button className="flex lg:hidden text-3xl rounded-full p-2 bg-white text-main z-[100] fixed right-4 top-2" onClick={onBurgerToggle}>
      {open ? <ImCross /> : <ImMenu />}
    </button>
  );
};

export default HeaderBurger;
