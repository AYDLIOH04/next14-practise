import { ListItem } from "@/components/list-item";

const Contact = () => {
  return (
    <section>
      <div className="container">
        <div className="w-[600px]">
          <h2 className="page-title">
            Contact <span className="text-accent">page.</span>
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
};

export default Contact;
