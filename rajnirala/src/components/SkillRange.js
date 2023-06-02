export default function SkillRange(props) {
    return (
        <div className="skillRange">
            <div className="skill">
                <div className="outer">
                    <div className="inner">
                        <div id="number">
                            <span className="skillKaNaam">
                                {props.skillName}
                            </span>
                            <br />
                            <span className="skillPercentage">
                                {props.rangeValue}%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                </defs>
                <circle style={{
                    fill: "none",
                    stroke: "rgb(88, 88, 88)",
                    strokeWidth: "15",
                    strokeDasharray: "472",
                    strokeDashoffset: "472",
                    animation: `${props.howMuchRotate} 2s linear forwards`
                }} cx="80" cy="80" r="60" stroke-linecap="round" />
            </svg>
        </div>
    )
}