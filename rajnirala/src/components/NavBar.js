import { Link } from 'react-router-dom';
import './css/NavBar.css'
function NavBar(params) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo">
                <Link className="navbar-brand" to="/">Raj Nirala</Link>
            </div>
            <div className=" navMenus" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/whoami">WhoAmI</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/moreaboutme">MoreAboutMe</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/education">Education</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/expertise">Expertise</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/projects">Projects</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default NavBar;