import { getAllServiceSlugs, getServicePage } from "../../services"
import { useRouter } from "next/router";
import { Loader } from "../../components";
import HeroSection from "../../components/HeroSection";
import ReactHtmlParser from 'html-react-parser'
import { Wrapper, Grid, GridRowSpace, Container } from "../../components/elements";
import styles from '../../styles/ServicePage.module.css'
import Link from "next/link";

export default function Index({services}) {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />
    }
    return (
        <>
            <HeroSection 
                heading={services.title}
                subHeading={services.excerpt}
            />
            <Wrapper>
                <div >
                    <Grid>
                        <div className="container"
                            className={`${styles.breadcrumbs} col-span-4 md:col-span-8 mb-0 lg:col-span-2 bg-red-100 p-4 text-center font-bold text-white`}
                            
                        >
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </div>
                        <div 
                            className={`${styles.breadcrumbs} col-span-4 md:col-span-8 mb-0 lg:col-span-2 bg-red-100 p-4 text-center font-bold text-white`}
                            
                        >
                            <Link href="/services">
                                <a>Services</a>
                            </Link>
                        </div>
                        <div 
                            className={`${styles.breadcrumbs} col-span-4 md:col-span-8 lg:col-span-2 bg-red-100 p-4 text-center font-bold text-white`}
                            
                        >
                            <Link href={`/services/${services.slug}`}>
                                <a>{services.slug.replace(/[\/-]/g, ' ')}</a>
                            </Link>
                        </div>
                    </Grid>
                </div >
            </Wrapper>
            <Wrapper>
                <div >
                    <Grid>
                        <div className="col-span-4 md:col-span-6 md:col-start-2 lg:col-start-4 flex justify-center md:my-4">
                            <img src={services.featuredImage.url} alt={services.featuredImage.fileName} />
                        </div>
                        <div className={`${styles.content} col-span-4 md:col-span-8 lg:col-span-6 lg:col-start-4 mb-10`}>
                            {ReactHtmlParser(services.content.html)}
                        </div>
                    </Grid>
                </div >
            </Wrapper>
            <Wrapper styles={{'background': "#1971CB", 'color': 'white'}}>
                <Container>
                    <Grid className="py-14 px-4">
                        <h2 className='col-span-4 md:col-span-6 md:col-start-2 lg:col-start-4 text-center text-5xl lg:text-6xl font-bold pb-4'>Related Projects</h2>
                        <p className='col-span-4 md:col-span-6 md:col-start-2 lg:col-start-4 text-center capitalize'>Take a look at our work related to {services.slug.replace(/[\/-]/g, ' ')}</p>
                    </Grid>
                </Container>
            </Wrapper>
            <Wrapper>
                <Container>
                    <Grid>
                        <GridRowSpace spaceNumber="8" />
                            {services.projects.map((project) => {
                                return (
                                    <Link href={`/projects/${project.slug}`} key={project.id} passHref>
                                        <div className={`${styles.blogCard} col-span-4 bg-gray-100 shadow-md relative cursor-pointer h-96 overflow-hidden`}>
                                            <img className="w-full" src={project.projectImages[0].url} alt={project.projectImages[0].fileName}/>
                                            <div 
                                                className={`${styles.blogCardTitle} absolute bottom-0 w-full text-center h-20 flex items-center justify-center font-bold text-xl`}
                                                
                                            >   
                                                <a>{project.title}</a>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                        <GridRowSpace spaceNumber="8" />
                    </Grid>
                </Container>
            </Wrapper>
            <Wrapper styles={{'background': "#1971CB", 'color': 'white'}}>
                <Container>
                    <Grid className="py-14 px-4">
                        <h2 className='col-span-4 md:col-span-6 md:col-start-2 lg:col-start-4 text-center text-5xl lg:text-6xl font-bold pb-4'>Looking For More?</h2>
                        <p className='col-span-4 md:col-span-6 md:col-start-2 lg:col-start-4 text-center capitalize'>Find Related Blogs and Tips About {services.slug.replace(/[\/-]/g, ' ')}</p>
                    </Grid>
                </Container>
            </Wrapper>
            <Wrapper>
                <Container>
                    <Grid>
                        <GridRowSpace spaceNumber="8" />
                            {services.blogs.map((blog) => {
                                return (
                                    <Link href={`/blog/${blog.slug}`} key={blog.id} passHref>
                                        <div className={`${styles.blogCard} col-span-4 bg-gray-100 shadow-md relative cursor-pointer`}>
                                            <img className="w-full" src={blog.featuredImage.url} alt={blog.featuredImage.fileName}/>
                                            <div 
                                                className={`${styles.blogCardTitle} absolute bottom-0 w-full text-center h-20 flex items-center justify-center font-bold text-xl`}
                                                
                                            >   
                                                <a>{blog.title}</a>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                            
                    </Grid>
                </Container>
            </Wrapper>
        </>
    )
}

export async function getStaticProps({params}) {
    const data = await getServicePage(params.slug);
    
    return {
        props: {
            services: data
        }
    }
}

export async function getStaticPaths() {
    const services = await getAllServiceSlugs();
    return {
        paths: services.map(({ slug }) => ({ params: { slug }})),
        fallback: true
    }
}