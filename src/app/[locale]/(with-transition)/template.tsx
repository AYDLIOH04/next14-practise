import Transition from "@/components/animation/transition";

const TranstionTemplate = ({ children }: { children: React.ReactNode }) => {
  return <Transition>{children}</Transition>;
};

export default TranstionTemplate;
