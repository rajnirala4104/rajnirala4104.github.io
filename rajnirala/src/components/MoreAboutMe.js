import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";
import './css/MoreAboutMe.css'

function MoreAboutMe(props) {
    const location = useLocation();
    return (
        <>
            <NavBar activeStatus={location.pathname} />
            <div className="container moreAboutMeContainer">
                <div className="moreAboutMeContent container">
                    <div className="moreAboutMeCard">
                        <img src={require('./images/music3.jpg')} alt="Oops!!" />
                        <div className="cardRightContent">
                            <div className="text">
                                <h3>Music Enthusiast</h3>
                               <p>
                               As a music enthusiast, I value its ability to amplify my emotional and introspective awareness by resonating with my deepest feelings. It serves as a powerful catalyst for self-reflection and connection with my innermost emotions.
                               </p>
                            </div>
                        </div>
                    </div>
                    <div className="moreAboutMeCard">
                        <div className="cardRightContent">
                            <img src={require('./images/travelerRaj2.jpg')} alt="Oops!!" />
                            <div className="text">
                                <h3>Hodophile</h3>
                               <p>
                               When feeling stuck or as if life has lost its luster, it can be helpful to step outside and observe the world. This provides an opportunity to witness how others may be wasting their time and energy, and how they may be allowing their lives to become mundane.
                               </p>
                            </div>
                        </div>
                    </div>
                    <div className="moreAboutMeCard">
                        <img src={require('./images/friendlyNature.jpg')} alt="Oops!!" />
                        <div className="cardRightContent">
                            <div className="text">

                                <h3>Friendly Nature</h3>
                               <p>
                               My interest in making friends stems from my desire to gain diverse perspectives on the world. I believe that every individual has a unique way of viewing the world, and I am eager to learn from and appreciate these different perspectives.
                               </p>
                            </div>
                        </div>
                    </div>
                    <div className="moreAboutMeCard">
                        <img src={require('./images/friendlyNature.jpg')} alt="Oops!!" />
                        <div className="cardRightContent">
                            <div className="text">

                                <h3>Friendly Nature</h3>
                               <p>
                               My interest in making friends stems from my desire to gain diverse perspectives on the world. I believe that every individual has a unique way of viewing the world, and I am eager to learn from and appreciate these different perspectives.
                               </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoreAboutMe;