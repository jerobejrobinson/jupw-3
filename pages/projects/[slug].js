import { getProjectPage, getAllProjectSlugs } from "../../services";
import { Wrapper, Container, Grid, GridRowSpace } from '../../components/elements'
import HeroSection  from '../../components/HeroSection'
import { useRouter } from "next/router";
import { Loader } from "../../components";
import styles from '../../styles/ServicePage.module.css'
import Link from "next/link";
import ReactHtmlParser from 'html-react-parser'
import ImageGallery from 'react-image-gallery';

export default function Index({project, projects}) {
    const images = project.projectImages.map(image => {
        return { original: image.url }
        
    })

    const locationData = project.connections[1]
    
    console.log(locationData)
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />
    }

    return (
        <>
            <HeroSection 
                heading={project.title}
            />
            <Wrapper>
                <div >
                    <Grid>
                        <div className="container"
                            className={`${styles.breadcrumbs} col-span-4 md:col-span-8 mb-0 lg:col-span-1 bg-red-100 p-4 text-center font-bold text-white`}
                            style={{'background': "1971cb"}}
                        >
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </div>
                        <div 
                            className={`${styles.breadcrumbs} col-span-4 md:col-span-8 mb-0 lg:col-span-1 bg-red-100 p-4 text-center font-bold text-white`}
                            style={{'background': "1971cb"}}
                        >
                            <Link href="/projects">
                                <a>Projects</a>
                            </Link>
                        </div>
                        <div 
                            className={`${styles.breadcrumbs} col-span-4 md:col-span-8 lg:col-span-3 bg-red-100 p-4 text-center font-bold text-white`}
                            style={{'background': "1971cb"}}
                        >
                            <Link href={`/services/${project.slug}`}>
                                <a>{project.slug.replace(/[\/-]/g, ' ')}</a>
                            </Link>
                        </div>
                    </Grid>
                </div >
            </Wrapper>
            <Wrapper>
                <Container>
                    <Grid>
                        <div className={`col-span-4 md:col-span-8 lg:col-span-6 lg:col-start-2 p-4 ${styles.content}`}>
                            <h2>What we did</h2>
                            {ReactHtmlParser(project.content.html)}
                            <h3>Job Price</h3>
                            <p>{project.price}</p>
                        </div>
                        <div className={`col-span-4 md:col-span-8 lg:col-span-4 ${styles.content}`}>
                            <h2 className="p-6">Project Gallery</h2>
                            <ImageGallery items={images} />
                        </div>
                    </Grid>
                    
                </Container>
                <Grid>
                        <div className={`col-span-4 md:col-span-8 lg:col-span-12 mt-20 mb-16 h-96 ${styles.content}`}
                        >
                            <h2>{locationData.title}</h2>
                            <Link href={`/locations/${locationData.slug}`}>
                                <a className={`p-2`}>Find out more about how we service {locationData.title}</a>
                            </Link>
                            {ReactHtmlParser(locationData.googleMapUrl)}
                        </div>
                    </Grid>
            </Wrapper>
            <Wrapper styles={{'background': "#1971CB", 'color': 'white'}}>
                <Container>
                    <Grid className="py-14 px-4">
                        <h2 className='col-span-4 md:col-span-6 md:col-start-2 lg:col-start-4 text-center text-5xl lg:text-6xl font-bold pb-4'>Recent Projects</h2>
                        <p className='col-span-4 md:col-span-6 md:col-start-2 lg:col-start-4 text-center capitalize'>Take a look at our most recent work</p>
                    </Grid>
                </Container>
            </Wrapper>
            <Wrapper>
                <Container>
                    <Grid>
                        <GridRowSpace spaceNumber="8" />
                            {projects.map((project) => {
                                return (
                                    <Link href={`/projects/${project.slug}`} key={project.id} passHref>
                                        <div className={`${styles.blogCard} col-span-4 bg-gray-100 shadow-md relative cursor-pointer h-96 overflow-hidden`}>
                                            <img width='250' height="250" className="w-full h-full" src={project.projectImages[0].url} alt={project.projectImages[0].fileName}/>
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
        </>
    )
}

export async function getStaticProps({params}) {
    const data = await getProjectPage(params.slug);
    // console.log(data)
    return {
        props: {
            project: data[0],
            projects: data[1]
        }
    }
}

export async function getStaticPaths() {
    const projects = await getAllProjectSlugs();
    
    return {
        paths: projects.map(({ slug }) => ({ params: { slug }})),
        fallback: true
    }
}