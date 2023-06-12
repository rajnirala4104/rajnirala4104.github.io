// import { Link } from 'react-router-dom';
import '../css/NavBar.css'
function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo">
                <a className="navbar-brand" href="/">Raj Nirala</a>
            </div>
            <div className=" navMenus" id="navbarSupportedContent">
                <ul className="navbar-nav fluid">
                    <li className={`nav-item ${props.activeStatus}`}>
                        <a className={`nav-a ${props.activeStatus === '/' ? 'active' : ""}`} href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-a ${props.activeStatus === '/whoami' ? 'active' : ""}`} href="/whoami">WhoAmI</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-a ${props.activeStatus === '/moreaboutme' ? 'active' : ""}`} href="/moreaboutme">MoreAboutMe</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-a ${props.activeStatus === '/education' ? 'active' : ""}`} href="/education">Education</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-a ${props.activeStatus === '/expertise' ? 'active' : ""}`} href="/expertise">Expertise</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-a ${props.activeStatus === '/projects' ? 'active' : ""}`} href="/projects">Projects</a>
                    </li>
                    <li className="nav-item ">
                        <a className={`nav-a ${props.activeStatus === '/contact' ? 'active' : ""}`} href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default NavBar;