import { Container, Wrapper, Grid, ButtonGridGroup } from './elements'

export default function HeroSection({mainPage, heading, subHeading, videoSrc}) {

    const classes = {
        mainPage: {
            wrapper: "py-40 relative text-white",
            h1: "text-center col-span-4 text-4xl font-bold lg:text-left md:col-span-6 md:col-start-2 lg:col-start-4 lg:text-6xl lg:pb-6",
            p: "text-center col-span-4 text-lg pb-14 md:col-span-6 lg:text-left md:col-start-2 md:pb-20 lg:col-start-4 lg:text-4xl lg:pb-28"
        },
        subPage: {
            wrapper: "py-36 text-white",
            h1: "text-center col-span-4 text-4xl font-bold md:text-left md:col-span-6 md:col-start-2 lg:col-start-4 lg:text-6xl lg:pb-6",
            p: "text-center col-span-4 text-lg md:col-span-6 md:text-left md:col-start-2 md:pb-20 lg:col-start-4 lg:text-4xl lg:pb-14"
        },
    }

    function VideoBG({videoSrc}) {
        return (
            <video 
                autoPlay 
                muted 
                loop 
                src={videoSrc} 
                type="video/mp4" 
                style={{
                    "objectFit": "cover",
                    "height": "100%",
                    "width": "100%",
                    "position": "absolute",
                    "top": "0",
                    "left": "0",
                    "zIndex": "-999"
                }}
            />
        )
    }

    function VideoOverlay() {
        return (
            <div style={{
                "position": "absolute",
                "top": "0",
                "left": "0",
                "right": "0",
                "bottom": "0",
                "background": "#002d5b",
                "opacity": "0.9",
                "zIndex": "-990"
            }}/>
        )
    }
    return (
        <>
        <Wrapper className={mainPage ? classes.mainPage.wrapper : classes.subPage.wrapper}
            styles={!mainPage ? {'background': "#1971cb"} : null}
        >
            <Container>
            <Grid>
                <h1 className={mainPage ? classes.mainPage.h1 : classes.subPage.h1}>{heading}</h1>
                <p className={mainPage ? classes.mainPage.p : classes.subPage.p}>{subHeading}</p>
                {mainPage ? <ButtonGridGroup /> : null}
            </Grid>
            </Container>
            {videoSrc ? <VideoBG videoSrc={videoSrc} /> : null}
            {videoSrc ? <VideoOverlay /> : null}
        </Wrapper>
        </>
    )
}