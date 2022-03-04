import { ButtonGridGroup, Container, Grid, GridRowSpace, Wrapper } from "../../components/elements";
import HeroSection from "../../components/HeroSection";
import Head from "next/head";
import Link from "next/link";

export default function Index() {
    return (
        <>
            <Head>
                <title>James Uptown Pressure Washing And Roof Cleaning Memphis</title>
            </Head>
            <HeroSection 
                heading="About James Uptown PW"
                subHeading="Discover why we deliver the best exterior cleaning service in memphis"
                bg={{'background': "#1971cb"}}
            />
            <Wrapper>
                <Container>
                    <Grid>
                        <div className="col-span-4 md:col-span-8 lg:col-span-6 lg:col-start-2 flex flex-col p-6 pb-0">
                            <h2 className="py-8 font-bold text-2xl md:text-3xl lg:text-5xl">JAMES UPTOWN PRESSUE WASHING AND ROOF CLEANING</h2>
                            <p className="leading-7">James Uptown Pressure Washing is a family owned and operated business that started right here in Memphis, TN. Starting from humble beginnings, we set out to provide quality pressure washing services for our local community. This drive for proffesional service and quality allows us to maintain an competive price for our market. We pride ourselves on knowledge, proffesionalism, and drive. Without these key factor we wouldn`t be here today. Thank you for taking the time to visit us and seeing what we can offer for you. </p>
                            <div className="grid grid-cols-4 md:grid-cols-8 gap-x-5 text-white my-4 p-4">
                                <button 
                                    className="font-bold shadow-md h-20 col-span-2 border border-4 rounded-xl border-white md:col-start-3 lg:col-start-1"
                                    style={{'background': "#1971cb"}}
                                >
                                    <Link href="/get-quote">
                                        <a>Get Quote</a>
                                    </Link>
                                </button>
                                <button 
                                    className="font-bold shadow-md h-20 col-span-2 border border-4 rounded-xl border-white md:col-start-5 lg:col-start-3"
                                    style={{'background': "#1971cb"}}
                                >
                                    <Link href="tel:19013597672">
                                        <a>Call Today</a>
                                    </Link>
                                </button>
                            </div>
                        </div>
                        <div className='col-span-4 md:col-span-4 flex justify-center md:col-start-3 lg:col-start-8'>
                            <img src="https://ik.imagekit.io/jamesUPW/images/james/James-Owner-of-James-Uptown-Upkeeping.webp" alt="owner of james uptown pressure washing and roof cleaning" />
                        </div>
                        
                    </Grid>
                </Container>
            </Wrapper>
            <Wrapper styles={{'background': "#1971CB", 'color': 'white'}}>
                <Container>
                    <Grid className="py-14 px-4">
                        <h2 className='col-span-4 md:col-span-6 md:col-start-2 lg:col-start-4 text-center text-5xl lg:text-6xl font-bold pb-4'>Looking For More?</h2>
                        <p className='col-span-4 md:col-span-6 md:col-start-2 lg:col-start-4 text-center'>Meet and say hi to the team, Veiw the locations we service, and take a look at our most recent projects!</p>
                    </Grid>
                </Container>
            </Wrapper>
            <Wrapper>
                <Container>
                    <Grid>
                        <GridRowSpace spaceNumber="8" />
                            <div className="col-span-4 md:col-span-2 md:col-start-2 lg:col-span-3 lg:col-start-3 bg-gray-100 shadow-md relative">
                                <img className="w-full" src="https://via.placeholder.com/250"/>
                                <div 
                                    className="absolute bottom-0 w-full text-center h-20 flex items-center justify-center "
                                    style={{"box-shadow": "inset 0 0 2000px rgba(255, 255, 255, .5)"}}
                                >
                                    <Link href="/about/team">
                                        <a>Meet The Team</a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-span-4 md:col-span-2 lg:col-span-3 bg-gray-100 shadow-md relative">
                                <img className="w-full" src="https://via.placeholder.com/250"/>
                                <div 
                                    className="absolute bottom-0 w-full text-center h-20 flex items-center justify-center "
                                    style={{"box-shadow": "inset 0 0 2000px rgba(255, 255, 255, .5)"}}
                                >
                                    <Link href="/locations">
                                        <a>Areas We Service</a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-span-4 md:col-span-2 lg:col-span-3 bg-gray-100 shadow-md relative">
                                <img className="w-full" src="https://via.placeholder.com/250"/>
                                <div 
                                    className="absolute bottom-0 w-full text-center h-20 flex items-center justify-center "
                                    style={{"box-shadow": "inset 0 0 2000px rgba(255, 255, 255, .5)"}}
                                >
                                    <Link href="/projects">
                                        <a>Recent Projects</a>
                                    </Link>
                                </div>
                            </div>
                    </Grid>
                </Container>
            </Wrapper>
        </>
    )
}