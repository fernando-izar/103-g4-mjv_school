import {Containerbutton} from "./style"

export function Button ({ label, className, BackgroundColor }){
    return(
        <Containerbutton style={{ background: BackgroundColor }} className={className} id={label}> {label} </Containerbutton>
    )
}
