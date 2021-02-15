import '../styles/globals.css'
import Theme from '../styles/Theme'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(true)

  function changeTheme(){
    setTheme(!theme)
  }

  return <>
    <Theme settedTheme={theme}>
      <Nav changeTheme={changeTheme} theme={theme}/>
        <Component {...pageProps} />
      <Footer/>
    </Theme>
  </>
}

export default MyApp
