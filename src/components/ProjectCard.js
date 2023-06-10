export default function ProjectCard(props) {
    return (
        <>
            <div className="projectCard card shadow">
                <div className="imageSection">
                    <img src={props.projectHintImage} alt="" />
                </div>
                <div className="projectDetails">
                    <h2>{props.projectTitle}</h2>
                    <p>{props.projectDescription}</p>
                </div>
            </div>
        </>
    )
}