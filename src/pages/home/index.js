import "./style.css"
import MenuHome from "../../imgs/PageHome/MenuHome.svg"

function PageFirst({setHome}) {
    return (
        <div>
            <div className="background">
                <img src={MenuHome} Alt="Menu com home" className="Menu-Home"></img>
                <button onClick={() => setHome(false)} className="Button-Page">Iniciar</button>
            </div>
        </div>
       
    )

}
export default PageFirst