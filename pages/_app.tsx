import withApollo from "../lib/withApollo";
import { AppProps } from "next/app";
import Layout from '../components/Layout';

import 'infima/dist/css/default/default.css';
import './App.css';

const AppWrapper = ({ Component, pageProps }: AppProps) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default withApollo(AppWrapper); 