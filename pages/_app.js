import '../styles/globals.css'
import Theme from '../styles/Theme'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

function MyApp({ Component, pageProps }) {
  return <>
    <Theme>
      <Nav/>
        <Component {...pageProps} />
      <Footer/>
    </Theme>
  </>
}

export default MyApp
