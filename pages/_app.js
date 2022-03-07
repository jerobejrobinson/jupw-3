import { MainNavbar, Footer } from '../components'
import '../styles/globals.css'
import {useRouter} from 'next/router'
import Script from "next/script"
import FbChat from '../components/FbChat'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const {asPath} = router;

  if(asPath === '/get-quote') {
    return (
      <>
        <Component {...pageProps} />
      </>
    )
  } else {
    return (
      <>
        <MainNavbar/>
        <FbChat />
        <Component {...pageProps} />
        <Footer />
      </>
    )
  }
}

export default MyApp
