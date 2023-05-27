import './css/NavBar.css'
function NavBar(params) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo">
                <a className="navbar-brand" href="/">Raj Nirala</a>
            </div>
            <div className=" navMenus" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">WhoAmI</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">MoreAboutMe</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">MyProject</a>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default NavBar;