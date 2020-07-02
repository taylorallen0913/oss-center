require('infima/dist/css/default/default.css');
import withApollo from "../lib/withApollo";
import { AppProps } from "next/app";
import Layout from '../components/Layout';

const AppWrapper = ({ Component, pageProps }: AppProps) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default withApollo(AppWrapper);