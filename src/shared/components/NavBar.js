import { Link } from 'react-router-dom';
import '../css/NavBar.css'
function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo">
                <Link className="navbar-brand" to="/">Raj Nirala</Link>
            </div>
            <div className=" navMenus" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className= {`nav-a ${props.pathname === '/' ? "isActive":""}`} to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-a ${props.pathname === '/whoami' ? 'isActive' : ""}`} to="/whoami">WhoAmI</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-a ${props.pathname === '/moreaboutme' ? 'isActive' : ""}`} to="/moreaboutme">MoreAboutMe</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-a ${props.pathname === '/education' ? 'isActive' : ""}`} to="/education">Education</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-a ${props.pathname === '/expertise' ? 'isActive' : ""}`} to="/expertise">Expertise</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-a ${props.pathname === '/projects' ? 'isActive' : ""}`} to="/projects">Projects</Link>
                    </li>
                    <li className="nav-item ">
                        <Link className={`nav-a ${props.pathname === '/contact' ? 'isActive' : ""}`} to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default NavBar;