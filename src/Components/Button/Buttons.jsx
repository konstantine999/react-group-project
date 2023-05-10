import "./button.css";

function Button(props) {
  return (
    <button className="nunito" style={{ backgroundColor: props.color }}>
      {props.text}
    </button>
  );
}

export default Button;
