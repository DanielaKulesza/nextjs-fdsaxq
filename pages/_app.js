import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import '../styles/style.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
