import clsx from 'clsx';
import styles from './styles.module.css';

const Footer = () => {
    return (
        <footer className={clsx("footer footer--dark", styles.footerCenter)}>
            <div className="container container--fluid">
                <div className="footer__links">
                    <a className={clsx("footer__link-item", styles.footerLink)} href="https://github.com/taylorallen0913/oss-center" target="_blank">
                        Source Code
                    </a>
                    <span className="footer__link-separator">·</span>
                    <a className={clsx("footer__link-item", styles.footerLink)} href="https://github.com/taylorallen0913/" target="_blank">
                        GitHub
                    </a>
                </div>
                <div>Copyright © 2020 Taylor Allen</div>
            </div>
        </footer>
    );
};

export default Footer;