import { MainNavbar, Footer } from '../components'
import '../styles/globals.css'
import {useRouter} from 'next/router'
import Script from "next/script"
import Head from 'next/head'
import FbChat from '../components/FbChat'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const {asPath} = router;

  if(asPath === '/get-quote') {
    return (
      <>
        <Head>
          <script id="hotjar">
            {`
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:2792997,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `}
          </script>
        </Head>
        <Script strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=G-1N0EXPKSD6`} async id='googleAnalytics'></Script>
        <Script strategy='lazyOnload' id='googleAnalyticsCode'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-1N0EXPKSD6');
          `}
        </Script>
        <Component {...pageProps} />
      </>
    )
  } else {
    return (
      <>
        <Head>
          <script id="hotjar">
            {`
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:2792997,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `}
          </script>
        </Head>
        <Script strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=G-1N0EXPKSD6`} async id='googleAnalytics'></Script>
        <Script strategy='lazyOnload' id='googleAnalyticsCode'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-1N0EXPKSD6');
          `}
        </Script>
        <MainNavbar/>
        <FbChat />
        <Component {...pageProps} />
        <Footer />
      </>
    )
  }
}

export default MyApp
