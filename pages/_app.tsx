require('infima/dist/css/default/default.css');
import withApollo from "../lib/withApollo";

const AppWrapper = ({ Component, pageProps }: any) => {
    return (
        <Component {...pageProps} />
    );
}

export default withApollo(AppWrapper);