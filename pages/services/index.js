import Link from "next/link";
import { Wrapper, Container, Grid } from "../../components/elements";
import { getServices } from "../../services"

export default function Index({services}) {
    return (
        <>
            <Wrapper>
                <Container>
                    {services.map((service) => {
                        return (
                            <div 
                                key={service.id} 
                                className="p-4"
                            >
                                <Grid>
                                    <div className="col-span-2 col-start-2 max-h-60 overflow-hidden">
                                        <img src={service.featuredImage.url} alt={service.featuredImage.fileName} className=""/>
                                    </div>
                                    <div className="col-span-4 text-center md:text-left md:col-span-4 flex flex-col">
                                        <Link href={`/services/${service.slug}`}>
                                            <a>{service.title}</a>
                                        </Link>
                                        <p>{service.excerpt}</p>
                                        <button 
                                            className=' text-white text-l '
                                            style={{'background': "#1971cb"}}    
                                        >
                                            <Link href={`/services/${service.slug}`}>
                                                <a>Learn More About {service.title}</a>
                                            </Link>
                                        </button>
                                    </div>
                                    
                                </Grid>
                            </div>
                        )
                    })}
                </Container>
            </Wrapper>
        </>
    )
}

export async function getStaticProps() {
    const data = await getServices();
    
    // console.log(data)
    return {
        props: {
            services: data
        }
    }
}