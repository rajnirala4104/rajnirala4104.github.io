import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";

export default function Contact(props) {
    const location = useLocation()
    return (
        <>
            <NavBar activeStatus={location.pathname}/>
            This is My Contact page
        </>
    )
}