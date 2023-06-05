import { Link } from 'react-router-dom'
import './css/FirstImpression.css'


export default function FirstImpression(props) {
    return (
        <>
            <div className="firstImpressionContainer">
                <div className="firstImpressionLeftSectionContent">
                    <div className="liBitAboutMe">
                        <span className='hi'>Hii<hr /></span>
                        <span className='me'>I'm<span> Raj Nirala</span></span>
                        <span className='developer'>A Fullstack Developer</span>
                    </div>
                    <div className="firstImpressionLeftSectionBtns">
                        <Link type="button" to='/contact' className="btn btn-secondary ">Let's Work</Link>
                        <Link type="button" className="btn btn-outline-secondary ">Download CV</Link>
                    </div>
                </div>
                <div className="firstImpressionRightSectionContent">
                    <img src={require('./images/rajnirala.png')} alt="raj nirala" /> 
                </div>
            </div>
        </>
    )
}
