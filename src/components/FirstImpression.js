import { Link } from 'react-router-dom'
import '../pages/css/FirstImpression.css'
import React from 'react';
import Typed from 'typed.js';


export default function FirstImpression(props) {


    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['<i>Javascript</i> Enthusiast', "<i>Python</i> Enthusiast", " <i>Great</i> Learner" , "<i>Backend</i> Developer", 'FullStack Developer'],
            typeSpeed: 55,
        });

        return () => {
            typed.destroy();
        };
    }, []);


    return (
        <>
            <div className="firstImpressionContainer">
                <div className="firstImpressionLeftSectionContent">
                    <div className="liBitAboutMe">
                        <span className='hi'>Hii<hr /></span>
                        <span className='me'>I'm<span> Raj Nirala</span></span>
                        <span className='developer'><span ref={el}></span></span>
                    </div>
                    <div className="fristImpressionSocialIcons">
                        <a href="https://www.linkedin.com/in/raj-nirala/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://www.github.com/rajnirala4104/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.instagram.com/_raj_nirala_/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://wa.me/917827424823/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>
                    <div className="firstImpressionLeftSectionBtns">
                        <Link type="button" to='/contact' className="btn bg-dark border-dark letsWorkBtn">Let's Work</Link>
                        <a type="button" href={require('../Asserts/extrenalFiles/_MyResume(2).pdf')} className="btn cvBtn bg-outline-dark border-dark ">Download CV</a>
                    </div>
                </div>
                <div className="firstImpressionRightSectionContent">
                    <img src={require('../Asserts/images/rajnirala.png')} alt="raj nirala" />
                </div>
            </div>
        </>
    )
}
