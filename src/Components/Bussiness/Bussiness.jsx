import img1 from "../../imgT-L/Group 22.png"
import "./Style.css"


function Bussiness(){
    return(
        <div>    
            <div className="flex">
                <img className="firstImg" src={img1} alt="backGround" />
                <div className="conteiner">
                    <h2 className="firstH2">Perfect Solution for Your <span className="underLine">Bussiness</span> </h2> 
                    <p className="firstText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    <button className="firstButton">Read More</button>
                </div>
            </div>
        </div> 
    )
}

export default Bussiness;