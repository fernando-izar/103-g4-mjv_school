import {Containerbutton} from "./style"
import { Link } from "react-router-dom"


export function Button ({ label, className, BackgroundColor,linkTo }){
    
    return(
        <Containerbutton style={{ background: BackgroundColor}} className={className} id={label} > 
            <Link to={linkTo} className="Containerbutton">  
                {label}
            </Link>
        </Containerbutton>
        )
}
