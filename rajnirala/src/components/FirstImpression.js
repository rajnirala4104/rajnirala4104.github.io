import './css/FirstImpression.css'

function FirstImpression(props) {
    return (
        <>
            <div className="firstImpressionContainer">
                <div className="firstImpressionLeftSectionContent">
                    <div className="liBitAboutMe">
                        <span>Hey, Hii..</span>
                        <span>I'm a Fullstack Developer</span>
                    </div>
                    <div className="firstImpressionLeftSectionBtns">
                    <button type="button" class="btn btn-secondary btn-sm">Let's Work</button>
                    <button type="button" class="btn btn-outline-secondary btn-sm">Download CV</button>
                    </div>
                </div>
                <div className="firstImpressionRightSectionContent">
                    <div className="myImage"></div>
                </div>
            </div>
        </>
    )
}

export default FirstImpression;