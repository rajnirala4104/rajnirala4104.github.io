import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";

function MoreAboutMe(props) {
    const location = useLocation();
    return (
        <>
            <NavBar activeStatus={location.pathname}/>
            This is more About me
        </>
    )
}

export default MoreAboutMe;