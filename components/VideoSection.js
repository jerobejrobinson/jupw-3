import { Container, Grid} from './elements'
import ReactHtmlParser from 'html-react-parser'
import Link from 'next/link'

export default function VideoSection({mainPage, h2, p, videoLink}) {
    return (
        <Container className={`shadow-md bg-white p-8 relative top-0 border-4 border-gray-100 ${mainPage ? "md:-top-24" : null}`}
            
        >
            <Grid>
                <div className='hidden md:block md:col-span-8 lg:col-span-6 bg-gray-100 h-80'>
                    {ReactHtmlParser(videoLink)}
                
                </div>
                <div className='col-span-4 md:col-span-8 lg:col-span-6 grid gap-x-5 grid-cols-4 lg:grid-cols-6 md:pt-10 lg:p-0'>
                    <h2 className='col-span-4 font-bold lg:col-span-6 text-2xl lg:text-4xl'>{h2}</h2>
                    <p className='col-span-4 lg:col-span-6 text-xl'>{p}</p>
                    {
                    mainPage ? 
                    <button 
                        className='border border-4 rounded-xl border-white text-white h-20 text-l lg:text-2xl font-bold col-span-2 col-start-2 lg:col-start-1 bg-gray-100'
                        style={{'background': "#1971cb"}}    
                    >
                        <Link href="/about">
                            <a>More About Us</a>
                        </Link>
                    </button> : null}
                </div>
            </Grid>
      </Container>
    )
}