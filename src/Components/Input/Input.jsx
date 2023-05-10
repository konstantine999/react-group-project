import "./input.css";

function Input(props) {
  return (
    <div className="input-wrapper">
      <label className="nunito" htmlFor="input">
        {props.label}
      </label>
      <input name="input" placeholder={props.placeholder}></input>
    </div>
  );
}

export default Input;
