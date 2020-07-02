import Navbar from '../Navbar';

interface Props {
    children: React.ReactElement
}

const Layout = ({ children }: Props) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout;