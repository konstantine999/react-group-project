import Blogcard from "./BlogCard";
import "./blog.css";
import { blogCardArray } from "./CardArray";
import Button from "../Button/Buttons";

function Blog() {
  return (
    <section className="blog-section">
      <h3 className="nunito blog-title">
        Our <span>Blogs</span>
      </h3>
      <div className="flex blog-wrapper">
        {blogCardArray.map((Card) => {
          return (
            <Blogcard
              key={Card.id}
              title={Card.title}
              info={Card.info}
              id={Card.id}
              img={Card.img}
              name={Card.name}
              avatar={Card.avatar}
            />
          );
        })}
      </div>
      <div className="view-more-button">
        <Button class="view-more-button" text="View More" color="#FACA10" />
      </div>
    </section>
  );
}

export default Blog;
