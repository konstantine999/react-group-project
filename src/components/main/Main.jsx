import "./main.css";
import background from "../../Images/firsPageBackground.png";
import peope from "../../Images/firsPageImg.png";
import questionmarks from "../../Images/questionmarks.png";
import questionmarkimg from "../../Images/questionmarkimg.png";
import arrowLeft from "../../Images/arrowLeft.png";
import arrowRight from "../../Images/arrowRight.png";
import windowsLogo from "../../Images/windows.png";
import googleLogo from "../../Images/google.png";
import fireboxLogo from "../../Images/firefox.png";
import safariLogo from "../../Images/safari.png";

function Main() {
  return (
    <div className="sectionDiv">
      <section>
        <img src={background} alt="background" className="background" />
        <img src={peope} alt="people in office" className="people" />
        <div className="container">
          <div className="mainText">
            <h1 className="darckTitle">
              Get Bussiness Solutions with TheFirm.
            </h1>
            <p className="lightText">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
            <button className="yellowButton">Get in Touch</button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="partners">
            <h3 className="darckTitle">Our Partner</h3>
            <div className="partnerBoxes">
              <button className="ellipse">
                <img src={arrowLeft} alt="arrow" className="arrowLeft" />
              </button>
              <div className="shadowBox">
                <a href="https://blogs.windows.com/">
                  <img
                    src={windowsLogo}
                    alt="windowsLOgo"
                    className="windowsLogo"
                  />
                </a>
              </div>
              <div className="shadowBox">
                <a href="https://about.google/">
                  <img src={googleLogo} alt="googleLogo" />
                </a>
              </div>
              <div className="shadowBox">
                <a href="#">
                  <img src={fireboxLogo} alt="fireboxLogo" />
                </a>
              </div>
              <div className="shadowBox">
                <a href="https://www.apple.com/ge/safari/">
                  <img src={safariLogo} alt="safariLogo" />
                </a>
              </div>
              <button className="ellipse">
                <img src={arrowRight} alt="arrow" className="arrowRight" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="FrustrationOfClient">
        <div className="container">
          <div className="FrustrationOfClientDivs">
            <div className="leftFrustrationText">
              <h3 className="darckTitle">Frustration of Clients</h3>
              <p className="lightText">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <div className="questionsDiv">
                <div className="questions">
                  <img
                    src={questionmarks}
                    alt="questionmark"
                    className="yellowQuestionMarks"
                  />
                  <p className="lightText">
                    Loren rasion gravida auem is bibenua tase
                  </p>
                </div>
                <div className="questions">
                  <img
                    src={questionmarks}
                    alt="questionmark"
                    className="yellowQuestionMarks"
                  />
                  <p className="lightText">
                    Lorem Ipsum is simply dummy text of the.
                  </p>
                </div>
                <div className="questions">
                  <img
                    src={questionmarks}
                    alt="questionmark"
                    className="yellowQuestionMarks"
                  />
                  <p className="lightText">
                    Printing and typesetting industry. Lorem Ipsum
                  </p>
                </div>
                <div className="questions">
                  <img
                    src={questionmarks}
                    alt="questionmark"
                    className="yellowQuestionMarks"
                  />
                  <p className="lightText">
                    When an unknown printer took a galley of type and scrambled
                    it
                  </p>
                </div>
              </div>
            </div>
            <img src={questionmarkimg} alt="#" className="questionmarkimg" />
          </div>
        </div>
      </section>
    </div>
  );
}
export default Main;
