import { AnimateElement } from "@/components/animation";
import { fadeIn } from "@/varitants";

const Photos = () => {
  return (
    <section>
      <div className="container">
        <AnimateElement variants={fadeIn("left", 0.1)}>
          <h2 className="page-title">Photos</h2>
        </AnimateElement>
        <AnimateElement variants={fadeIn("up", 0.3)}>
          <div>
            <p>1 123123123123123</p>
          </div>
        </AnimateElement>
      </div>
    </section>
  );
};

export default Photos;
