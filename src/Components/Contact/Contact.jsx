import "./contact.css";
import Input from "../Input/Input";
import Button from "../Button/Buttons";

function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-item">
        <h4 className="nunito">
          Get in <span>Touch</span>
        </h4>
        <div className="inputs-wrapper">
          <div className="left-inputs">
            <Input label="Name" placeholder="Lorem Ipusum" />
            <Input label="Phone" placeholder="+0 968 856 1524" />
          </div>
          <div className="right-inputs">
            <Input label="Email" placeholder="LoremIpusum@mail.com" />
            <Input label="Subject" placeholder="Choose your subject" />
          </div>
        </div>
        <div className="submit-button">
          <Button color="#FACA10" text="Submit" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
