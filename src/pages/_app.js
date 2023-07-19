import Navbar from '../components/commom/Navbar';
import Footer from '../components/commom/Footer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
