import { ListItem } from "@/components/ui/list-item";

export default function Home() {
  return (
    <section>
      <div className="container">
        <div className="mb-12">
          <h1 className="text-center text-3xl">
            Luck<span className="text-accent">ify</span>
          </h1>
        </div>
        <div className="w-[600px]">
          <h2 className="page-title">
            Why <span className="text-accent">we?</span>
          </h2>
          <ul className="flex flex-col gap-6 pl-12">
            <ListItem>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error,
              consectetur!
            </ListItem>
            <ListItem>Lorem ipsum dolor sit amet consectetur.</ListItem>
            <ListItem>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum?
            </ListItem>
          </ul>
        </div>
      </div>
    </section>
  );
}
