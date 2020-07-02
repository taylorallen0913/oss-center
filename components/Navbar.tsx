const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__inner">
                <div className="navbar__items">
                    <a className="navbar__brand">OSS Center</a>
                    <a className="navbar__item navbar__link" href="#url">
                        Docs
                    </a>
                    <a className="navbar__item navbar__link" href="#url">
                        Browse
                    </a>
                    <div className="navbar__item dropdown dropdown--hoverable">
                        <a className="navbar__link" href="#url">
                            v2.0
                        </a>
                        <ul className="dropdown__menu">
                            <li>
                                <a className="dropdown__link" href="#url">
                                    v1.8.0
                                </a>
                            </li>
                            <li>
                                <a className="dropdown__link" href="#url">
                                    v1.7.0
                                </a>
                            </li>
                            <li>
                                <a className="dropdown__link" href="#url">
                                    v1.6.0
                                </a>
                            </li>
                            <li>
                                <a className="dropdown__link" href="#url">
                                    All Versions
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar__items navbar__items--right">
                    <form>
                        <div className="navbar__search">
                            <input className="navbar__search-input" placeholder="Search" />
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;