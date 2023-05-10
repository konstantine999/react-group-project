import "../Bussiness/Style.css"
import img4 from "../../imgT-L/Ellipse 25.png"
import img5 from "../../imgT-L/Mask Group (2).png"


function Research(){
    return(
        <div>
            <h2 className="thirdH2">Our Research & Case <span className="underLine">Studies</span> </h2>
            <div className="divForResearch">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            </div>
            <div>
                <div className="divForFlex">
                    <div className="divForConteiner">
                        <h3>Lorem Ipsum is simply</h3>
                        <div id="divForResearch">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
                        </div>
                        <button>Read More</button>
                    </div>
                    <div className="divForImg">
                        <img id="img4" src={img4} alt="" />
                        <img src={img5} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Research;