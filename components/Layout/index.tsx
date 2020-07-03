import Navbar from '../Navbar';
import Footer from '../Footer';

import styles from './styles.module.css'

interface Props {
    children: React.ReactElement;
};

const Layout = ({ children }: Props) => {
    return (
        <div>
            <Navbar />
            <div className={styles.dark}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;