import "../Bussiness/Style.css"
import Button from "./Button"
import img2 from "../../imgT-L/Group 33.png"
import img3 from "../../imgT-L/Group 53.png"


function WhyUs(){
    return(
        <div className="backgroundColor">
            <h2 className="secondH2">Reason to Choose <span className="underLine">Us</span></h2>
            <div id="conteinerForText"> 
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            </div> 
            <div className="divForButtons">
                <Button id="firstButton" text="Market Research" />
                <Button text="Branding"/>
                <Button text="Reporting"/>
                <Button text="Data Analysis"/>
            </div>
            <div className="conteinerForBrending">
                <img className="img2" src={img2} alt="" />
                <img className="img3" src={img3} alt="" />
                <div className="divForBrendingText">
                    <h2><span className="underLine">Branding</span></h2>
                    <div><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p></div>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default WhyUs;