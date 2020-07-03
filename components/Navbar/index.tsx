import Link from 'next/link'
import clsx from 'clsx'
import styles from './styles.module.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar--dark">
            <div className="navbar__inner">
                <div className="navbar__items">
                    <Link href="/">
                        <a className={clsx("navbar__brand", styles.navbarHeaderText)}>OSS Center</a>
                    </Link>
                    <Link href="/discover">
                        <a className="navbar__item navbar__link">
                            Discover
                        </a>
                    </Link>
                    <Link href="/browse">
                        <a className="navbar__item navbar__link">
                            Browse
                        </a>
                    </Link>
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