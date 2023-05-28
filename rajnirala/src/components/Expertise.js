import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";

function Expertise(props) {
    const location = useLocation();
    return (
        <>
            <NavBar activeStatus={location.pathname}/>
            This is My Expertise
        </>
    )
}

export default Expertise
