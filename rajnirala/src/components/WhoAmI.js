import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import './css/WhoAmI.css'

function WhoAmI(props) {

    const location = useLocation()
    console.log(location.pathname)
    return (
        <>
            <NavBar activeStatus={location.pathname}/>
            <div className="container">
                <div className="WhoAmIContent">
                    <div className="AboutMe">
                        I am a web developer with 3 years of experience and proficiency in multiple programming languages and frameworks, including <strong> HTML, CSS, JavaScript, Node.js, Express.js, React Js, Python, Flask, PHP, MySQL, MongoDB, SQLI, and Java</strong>. I am passionate about problem-solving and enjoy exploring new places through traveling. My long-term goal is to establish a successful tech business. With my expertise in web development and problem-solving skills, <strong> I am confident that I can contribute to the growth and development of any organization.</strong> I am excited to continue learning and improving my skills while working towards achieving my career aspirations.
                    </div>
                    <div className="myImage">
                        <img src={require('./images/rajniralasvg.png')} alt="Oops!!" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhoAmI;