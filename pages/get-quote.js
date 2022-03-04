import Head from 'next/head'
import { Quote } from '../components/Quote'

 
export default function GetQuote() {
  return (
    <div >
      <Head>
        <title>Get Quote - James Uptown Pressure Washing</title>
        <meta name="description" content="Get a quote today just by flling out our easy and fast form! Best Pressure washing service in Memphis Tn" />
        <link rel="icon" href="/iconLogo.ico" type="image/x-icon" />
      </Head>
      <Quote />
    </div>
  )
}
