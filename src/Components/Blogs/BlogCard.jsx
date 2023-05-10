import Button from "../Button/Buttons";

function BlogCard(props) {
  return (
    <div className="card-wrapper">
      <img className="blog-card-cover" src={props.img} alt="blog-cover" />
      <div className="blog-card-item">
        <h4 className="nunito">{props.title}</h4>
        <p className="card-info lora">{props.info}</p>
        <div className="flex card-middle-content">
          <div className="flex card-avatar-wrapper">
            <img src={props.avatar} alt="user-avatar" />
            <p className="nunito">
              Alex<span>Liones</span>
            </p>
          </div>
          <p className="nunito card-date">28,Aug 2020, 09:48:00</p>
        </div>
        <div className="flex read-more-button">
          <Button text="Read More" />
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
