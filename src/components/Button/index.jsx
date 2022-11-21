import {Containerbutton} from "./style"


export function Button ({ label, className, BackgroundColor,linkTo }){
    
    return(
        <> 
            <Containerbutton style={{ background: BackgroundColor}} className={className} id={label}  to={linkTo}>  
                {label}
            </Containerbutton>
        </>
        )
}
