import { NavLink } from "react-router-dom";


let Error = () => {
    return(
        <div>
            <h1>Error page</h1>
            <NavLink to="/" >Back to Home</NavLink>
        </div>
    );
}

export default Error;