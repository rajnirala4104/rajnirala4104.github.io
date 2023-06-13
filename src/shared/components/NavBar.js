import { Link } from 'react-router-dom';
import '../css/NavBar.css'
function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo">
                <Link className="navbar-brand" to="/">Raj Nirala</Link>
            </div>
            <div className=" navMenus" id="navbarSupportedContent">
                <ul className="navbar-nav fluid">
                    <li className={`nav-item ${window.location.pathname}`}>
                        <Link className={`nav-a active`} to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-a ${window.location.pathname === '/whoami' ? 'active' : ""}`} to="/whoami">WhoAmI</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-a ${window.location.pathname === '/moreaboutme' ? 'active' : ""}`} to="/moreaboutme">MoreAboutMe</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-a ${window.location.pathname === '/education' ? 'active' : ""}`} to="/education">Education</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-a ${window.location.pathname === '/expertise' ? 'active' : ""}`} to="/expertise">Expertise</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-a ${window.location.pathname === '/projects' ? 'active' : ""}`} to="/projects">Projects</Link>
                    </li>
                    <li className="nav-item ">
                        <Link className={`nav-a ${window.location.pathname === '/contact' ? 'active' : ""}`} to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default NavBar;