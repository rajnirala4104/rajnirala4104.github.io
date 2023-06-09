
export default function ProjectCard(props) {
    return (
        <>
            <div className="projectCard card shadow bg-light">
                <div className="imageSection">
                    <img loading="lazy" src={props.projectHintImage} alt={props.projectTitle} />
                    <hr className="MyHrBorder" />
                </div>
                <div className="projectCardOtherContentContainer p-2">
                    <div className="projectDetails">
                        <h4>{props.projectTitle}</h4>
                        <p>{props.projectDescription}</p>
                    </div>
                    <div className="projectCardBtns">
                        <a className="btn btn-secondary" target="_blank" rel="noreferrer" href={props.projectGitHubLink}>I want to see</a>
                    </div>
                </div>
            </div>
        </>
    )
}