import { Outlet } from "react-router-dom";
import Nav from "./Nav";

let ShareLayout = () => {
    return(
        <div>
            <Nav/>
            <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Outlet/>
            </div>
            
           
        </div>
    );
}

export default ShareLayout;