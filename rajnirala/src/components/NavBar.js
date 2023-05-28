import { Link } from 'react-router-dom';
import './css/NavBar.css'
function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo">
                <Link className="navbar-brand" to="/">R<span className='logoDesign'>aj</span> N<span className='logoDesign'>irala</span></Link>
            </div>
            <div className=" navMenus" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className={`nav-item ${props.activeStatus}`}>
                        <Link className={`nav-link ${props.activeStatus === '/' ? 'active' : ""}`} to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${props.activeStatus === '/whoami' ? 'active' : ""}`} to="/whoami">WhoAmI</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${props.activeStatus === '/moreaboutme' ? 'active' : ""}`} to="/moreaboutme">MoreAboutMe</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${props.activeStatus === '/education' ? 'active' : ""}`} to="/education">Education</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${props.activeStatus === '/expertise' ? 'active' : ""}`} to="/expertise">Expertise</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${props.activeStatus === '/projects' ? 'active' : ""}`} to="/projects">Projects</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default NavBar;