import Layout from '../components/layout/Layout';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} /> {/*this will be the content of our pages*/}
    </Layout>
  );
}

export default MyApp
