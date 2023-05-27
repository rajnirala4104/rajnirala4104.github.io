import './css/FirstImpression.css'

function FirstImpression(props) {
    return (
        <>
            <div className="firstImpressionContainer">
                <div className="firstImpressionLeftSectionContent">
                    <div className="liBitAboutMe">
                        <span className='hi'>Hey, Hii..</span>
                        <span className='me'>I'm<span> Raj Nirala</span></span>
                        <span className='developer'>A Fullstack Developer</span>
                    </div>
                    <div className="firstImpressionLeftSectionBtns">
                        <button type="button" class="btn btn-secondary ">Let's Work</button>
                        <button type="button" class="btn btn-outline-secondary ">Download CV</button>
                    </div>
                </div>
                <div className="firstImpressionRightSectionContent">
                    <img src={require('./images/rajnirala.png')} alt="" />
                </div>
            </div>
        </>
    )
}

export default FirstImpression;