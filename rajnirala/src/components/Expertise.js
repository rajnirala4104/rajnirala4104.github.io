import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";
import './css/Expertise.css'
import SkillRange from "./SkillRange";

function Expertise(props) {
    const location = useLocation();
    return (
        <>
            <NavBar activeStatus={location.pathname} />
            <div className="container ExpertiesContainer">
                <div className="MySkillsContainer">
                    <SkillRange rangeValue={80} howMuchRotate={"rotate80"}/>
                    <SkillRange rangeValue={30} howMuchRotate={"rotate30"}/>
                    <SkillRange rangeValue={50} howMuchRotate={"rotate50"}/>
                    <SkillRange rangeValue={10} howMuchRotate={"rotate10"}/>
                </div>
            </div>
        </>
    )
}

export default Expertise
