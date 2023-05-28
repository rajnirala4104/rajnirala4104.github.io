import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";

function Education(props) {
    const location = useLocation();
    return(
        <>
            <NavBar activeStatus={location.pathname}/>
            My Education 
        </>
    )
}

export default Education;