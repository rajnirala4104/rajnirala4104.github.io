export default function ProjectCard(props) {
    return (
        <>
            <div className="projectCard card shadow">
                <div className="imageSection">
                    <img src={props.projectHintImage} alt={props.projectTitle} />
                </div>
                <div className="projectDetails">
                    <h2>{props.projectTitle}</h2>
                    <p>{props.projectDescription}</p>
                </div>
                <div className="projectCardBtns">
                    <button className="btn btn-secondary">I want to see</button>
                </div>
            </div>
        </>
    )
}