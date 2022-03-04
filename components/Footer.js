import { ButtonGridGroup, Container, Grid, Wrapper } from '../components/elements'
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <Wrapper styles={{'background': "#1971CB", 'color': 'white'}} className="mt-2">
                <Container>
                <Grid className="py-14 px-4">
                    <p className='col-span-4 md:col-span-6 md:col-start-2 lg:col-start-4 text-center'>LET US WOW YOUR EXPERIENCE TODAY!</p>
                    <h2 className='col-span-4 md:col-span-6 md:col-start-2 lg:col-start-4 text-center text-5xl lg:text-6xl font-bold pb-2'>110% SATISFACTION GUARANTEE</h2>
                    <p className='col-span-4 md:col-span-6 md:col-start-2 lg:col-start-4 text-center pb-10'>SEE HOW WE CAN HELP YOU TODAY BY FILLING OUT OUR QUICK FORM!</p>
                    <ButtonGridGroup alt/>
                </Grid>
                </Container>
            </Wrapper>
            <Wrapper styles={{'background': "#1971CB", 'color': 'white'}} className="py-5">
                <Container>
                <Grid>
                    <div className='col-span-4 lg:col-span-3 p-10 lg:p-0 lg:pt-10'>
                    <h2 className='font-bold'>Contact Us</h2>
                    <ul>
                        <li>
                        <Link href="tel:19013597672">
                            <a>(901) 359-7672</a>
                        </Link>
                        </li>
                        <li>
                        <Link href="emailto:jamesuptownpressurewashing@gmail.com">
                            <a>Email</a>
                        </Link>
                        </li>
                        <li>
                        <Link href="emailto:jamesuptownpressurewashing@gmail.com">
                            <a>Instagram</a>
                        </Link>
                        </li>
                        <li>
                        <Link href="emailto:jamesuptownpressurewashing@gmail.com">
                            <a>Facebook</a>
                        </Link>
                        </li>
                        <li>
                        <Link href="emailto:jamesuptownpressurewashing@gmail.com">
                            <a>Google</a>
                        </Link>
                        </li>
                    </ul>
                    </div>
                    <div className='col-span-4 lg:col-span-3 p-10 lg:p-0 lg:pt-10'>
                    <h2 className='font-bold'>Useful Links</h2>
                    <ul>
                    <li>
                        <Link href="e/about">
                            <a>About Us</a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/get-quote">
                            <a>Get Instant Quote</a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/services">
                            <a>Services</a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/services/commercial-services">
                            <a>Commercial Services</a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/about/projects">
                            <a>Recent Projects</a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/blog">
                            <a>Blog</a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/about/faq">
                            <a>FAQ</a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/privacy-policy">
                            <a>Privacy Policy</a>
                        </Link>
                        </li>
                    </ul>
                    </div>
                    <div className='col-span-4 md:col-span-8 lg:col-span-4 p-10 lg:p-0 lg:pt-10'>
                    <h2 className='font-bold'>Service Areas</h2>
                    <div className='bg-red-100 h-80'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d417627.18689346925!2d-89.970787!3d35.13885!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4e59c5ae8d4a5c26!2sJames%20Uptown%20Pressure%20Washing%20%26%20Roof%20Cleaning!5e0!3m2!1sen!2sus!4v1646117431182!5m2!1sen!2sus" width="100%" height="100%" style={{'border':'0'}} allowFullScreen="" loading="lazy"></iframe>
                    </div>
                    <div className='flex flex-row flex-wrap justify-between'>
                        <div className="p-1 pl-0">
                        <Link href="/locations/memphis-tn">
                            <a>Memphis, Tn</a>
                        </Link>
                        </div>
                        <div className="p-1 pl-0">
                        <Link href="/locations/germantown-tn">
                            <a>Germantown, Tn</a>
                        </Link>
                        </div>
                        <div className="p-1 pl-0">
                        <Link href="/locations/collierville-tn">
                            <a>Collierville, Tn</a>
                        </Link>
                        </div>
                        <div className="p-1 pl-0">
                        <Link href="/locations/bartlett-tn">
                            <a>Bartlett, Tn</a>
                        </Link>
                        </div>
                        <div className="p-1 pl-0">
                        <Link href="/locations/arlingtion-tn">
                            <a>Arlington, Tn</a>
                        </Link>  
                        </div>
                        <div className="p-1 pl-0">
                        <Link href="/locations/lakeland-tn">
                            <a>Lakeland, Tn</a>
                        </Link>
                        </div>
                        <div className="p-1 pl-0">
                        <Link href="/locations/millington-tn">
                            <a>Millington, Tn</a>
                        </Link> 
                        </div>
                        <div className="p-1 pl-0">
                        <Link href="/locations/olive-branch-ms">
                            <a>Olive Branch, Ms</a>
                        </Link>
                        </div>
                        <div className="p-1 pl-0">
                        <Link href="/locations/southaven-ms">
                            <a>Southaven, Ms</a>
                        </Link>
                        </div>
                        <div className="p-1 pl-0">
                        <Link href="/locations/horn-lake-ms">
                            <a>Horn Lake, Ms</a>
                        </Link>
                        </div>
                        <div className="p-1 pl-0">
                        <Link href="/locations/west-memphis-ar">
                            <a>West Memphis, Ar</a>
                        </Link>
                        </div>
                        <div className="p-1 pl-0">
                        <Link href="/locations/marion-ar">
                            <a>Marion, Ar</a>
                        </Link>
                        </div>
                    </div>
                    </div>
                </Grid>
                </Container>
            </Wrapper>
            <Wrapper  styles={{'background': "#FAD61A"}} >
                <Container>
                <div className='font-bold h-10 flex items-center justify-center'>
                    COPYRIGHT @ 2022
                </div>
                </Container>
            </Wrapper>
        </>
    )
}