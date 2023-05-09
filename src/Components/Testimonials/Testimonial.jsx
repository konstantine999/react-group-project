import "./testimonial.css";
import { TestimonialArray } from "./TestimonialArray";
import TestimonialCard from "./TestimonialCard";
import Bullet from "../../Images/Bullet.png";

function Testimonial() {
  return (
    <section>
      <div className="testimonial-wrapper">
        <h3 className="nunito testimonial-title">
          Our <span>Testimonials</span>
        </h3>
        <div className="testimonial-cards-wrapper">
          {TestimonialArray.map((testimonial) => {
            return <TestimonialCard src={testimonial.img} />;
          })}
        </div>
        <p className="testimonial-info lora">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took type scrambled it to
          make a type specimen book. It has survived not only five centuries,
        </p>
        <p className="testimonial-active nunito">
          Jenny Wilson | <span>Digital Agency</span>
        </p>
        <img className="bullets" src={Bullet} />
      </div>
    </section>
  );
}

export default Testimonial;
