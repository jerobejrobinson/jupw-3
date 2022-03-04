import Head from 'next/head'
import { ButtonGridGroup, Container, Grid, GridRowSpace, Wrapper } from '../components/elements'
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import HeroSection from '../components/HeroSection'
import VideoSection from '../components/VideoSection'
import ReviewCard from '../components/ReviewCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>James Uptown Pressure Washing And Roof Cleaning Memphis</title>
      </Head>
      <HeroSection 
        mainPage
        heading="Pressure Washing Memphis, Tn"
        subHeading="Soft washing services that will bring the beauty back to your home"
        videoSrc="https://ik.imagekit.io/jamesUPW/video/Pressure-washing-memphis-tn.mp4"
      />
      <VideoSection
        mainPage
        h2="MEET MEMPHIS TN&apos;S BEST PRESSURE WASHING COMPANY"
        p="James uptown pressure washing is a soft washing, low-pressure washing and exterior cleaning company. We can clean your house from roof to the ground you stand on, cleaning your driveway, walkways, siding, windows, gutters, roof and more! There&apos;s a reason we are the highest rated and reviewed exterior cleaning company in Memphis, TN. Watch this quick video to our team in ACTION."
        videoLink={`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/0eS5YySnNmM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`}
      />
      <Wrapper>
        <Container>
          <Grid>
            <h2 className='py-8 font-bold text-2xl text-center col-span-4 md:p-0 md:pb-24 md:text-3xl md:col-start-3 lg:col-start-4 lg:col-span-6 lg:text-5xl'>SEE FOR YOURSELF WANT PRESSURE WASHING CAN DO FOR YOU</h2>
            <ButtonGridGroup />
            <GridRowSpace spaceNumber="20" />
            <ul className='py-8 col-span-4 md:order-last text-lg lg:text-2xl flex justify-around flex-col text-center md:text-left h-96 md:h-auto list-disc'>
              <li>The best exterior cleaning service in Memphis</li>
              <li>Licensed, Bonded and Fully Insured</li>
              <li>Our One Hour Warranty guarantees that we&apos;ll be on time within one hour or the job is completely free.</li>
              <li>We provide Top of the Line Value for your moneys worth.</li>
              <li>No wait no worry service, we are ready when you are</li>
            </ul>
            <div className='col-span-4 md:col-span-3 lg:col-start-4 flex justify-center m:pt-40'>
              <img src="https://ik.imagekit.io/jamesUPW/images/james/James-Owner-of-James-Uptown-Upkeeping.webp" alt="" />
            </div>
          </Grid>
        </Container>
      </Wrapper>
      <Wrapper styles={{'background': "#1971CB", 'color': 'white'}}>
        <Container>
          <Grid className="py-14 px-4">
            <h2 className='col-span-4 md:col-span-6 md:col-start-2 lg:col-start-4 text-center text-5xl lg:text-6xl font-bold pb-4'>Our Top Rated Services</h2>
            <p className='col-span-4 md:col-span-6 md:col-start-2 lg:col-start-4 text-center'>Below you&apos;ll find out how we can keep your property in it&apos;s best looking condition</p>
          </Grid>
        </Container>
      </Wrapper>
      <Wrapper className="bg-gray-100 py-8 pt-20">
        <Container>
          <Grid>
            <div className='col-span-4 lg:col-span-4 bg-black h-64 lg:h-72 lg:col-start-3 overflow-hidden flex items-center justify-center'>
              <ReactCompareSlider 
                itemOne={
                  <ReactCompareSliderImage 
                    src="https://ik.imagekit.io/jamesUPW/images/slider/4/house-wash-before.webp" 
                    srcSet="https://ik.imagekit.io/jamesUPW/images/slider/4/house-wash-before.webp?tr=w-320 320w, https://ik.imagekit.io/jamesUPW/images/slider/4/house-wash-before.webp?tr=w-640 640w, https://ik.imagekit.io/jamesUPW/images/slider/4/house-wash-before.webp?tr=w-760 760w, https://ik.imagekit.io/jamesUPW/images/slider/4/house-wash-before.webp?tr=w-980 980w, https://ik.imagekit.io/jamesUPW/images/slider/4/house-wash-before.webp?tr=w-1280 1280w, https://ik.imagekit.io/jamesUPW/images/slider/4/house-wash-before.webp?tr=w-1920 1920w" 
                    alt="Pressure Washing Before - Memphis Tn"
                  />}
                itemTwo={
                  <ReactCompareSliderImage 
                    src="https://ik.imagekit.io/jamesUPW/images/slider/4/house-wash-after.webp" 
                    srcSet="https://ik.imagekit.io/jamesUPW/images/slider/4/house-wash-after.webp?tr=w-320 320w, https://ik.imagekit.io/jamesUPW/images/slider/4/house-wash-after.webp?tr=w-640 640w, https://ik.imagekit.io/jamesUPW/images/slider/4/house-wash-after.webp?tr=w-760 760w, https://ik.imagekit.io/jamesUPW/images/slider/4/house-wash-after.webp?tr=w-980 980w, https://ik.imagekit.io/jamesUPW/images/slider/4/house-wash-after.webp?tr=w-1280 1280w, https://ik.imagekit.io/jamesUPW/images/slider/4/house-wash-after.webp?tr=w-1920 1920w"
                    alt="Pressure Washing After - Memphis Tn"
                  />
                }
                changePositionOnHover
              />
            </div>
            <div className="grid gap-x-5 grid-cols-4 col-span-4 lg:col-start-7">
              <h2 className='col-span-4 font-bold text-4xl flex items-center justify-center md:justify-start'>Pressure Washing</h2>
              <p className='col-span-4 text-lg text-center md:text-left'>We use a special blend of cleaning detergents to fight hard against dirt, algae and mold. Because we use top of the line cleaning solutions we don`&apos;`t have to rely on brute force pressure washing which may damage your home.</p>
            </div>
          </Grid>
        </Container>
      </Wrapper>
      <Wrapper className="bg-gray-100 py-8">
        <Container>
          <Grid>
            <div className='col-span-4 lg:col-span-4 bg-black h-64 lg:h-72 lg:col-start-7 overflow-hidden flex items-center justify-center'>
              <ReactCompareSlider 
                itemOne={
                  <ReactCompareSliderImage 
                    src="https://ik.imagekit.io/jamesUPW/images/slider/1/roof-cleaning-before.webp" 
                    srcSet="https://ik.imagekit.io/jamesUPW/images/slider/1/roof-cleaning-before.webp?tr=w-320 320w, https://ik.imagekit.io/jamesUPW/images/slider/1/roof-cleaning-before.webp?tr=w-640 640w, https://ik.imagekit.io/jamesUPW/images/slider/1/roof-cleaning-before.webp?tr=w-760 760w, https://ik.imagekit.io/jamesUPW/images/slider/1/roof-cleaning-before.webp?tr=w-980 980w, https://ik.imagekit.io/jamesUPW/images/slider/1/roof-cleaning-before.webp?tr=w-1280 1280w, https://ik.imagekit.io/jamesUPW/images/slider/1/roof-cleaning-before.webp?tr=w-1920 1920w" 
                    alt="Roof Cleaning Before - Memphis Tn"
                  />}
                itemTwo={
                  <ReactCompareSliderImage 
                    src="https://ik.imagekit.io/jamesUPW/images/slider/1/roof-cleaning-after.webp" 
                    srcSet="https://ik.imagekit.io/jamesUPW/images/slider/1/roof-cleaning-after.webp?tr=w-320 320w, https://ik.imagekit.io/jamesUPW/images/slider/1/roof-cleaning-after.webp?tr=w-640 640w, https://ik.imagekit.io/jamesUPW/images/slider/1/roof-cleaning-after.webp?tr=w-760 760w, https://ik.imagekit.io/jamesUPW/images/slider/1/roof-cleaning-after.webp?tr=w-980 980w, https://ik.imagekit.io/jamesUPW/images/slider/1/roof-cleaning-after.webp?tr=w-1280 1280w, https://ik.imagekit.io/jamesUPW/images/slider/1/roof-cleaning-after.webp?tr=w-1920 1920w"
                    alt="Roof Cleaning After - Memphis Tn"
                  />
                }
                changePositionOnHover
              />
            </div>
            <div className="grid gap-x-5 grid-cols-4 col-span-4 lg:col-start-3 md:order-first">
              <h2 className='col-span-4 font-bold text-4xl flex items-center justify-center md:justify-start'>Roof Cleaning</h2>
              <p className='col-span-4 text-lg text-center md:text-left'>Similar to house washing, we avoid using high pressure washing, in order to ensure a gentle clean. We combine a safe mix of  detergents and sodium hydrochlorite. This allows us to safely remove any algae from your roof without using any pressure.</p>
            </div>
          </Grid>
        </Container>
      </Wrapper>
      <Wrapper className="bg-gray-100 py-8">
        <Container>
          <Grid>
            <div className='col-span-4 lg:col-span-4 bg-black h-64 lg:h-72 lg:col-start-3 overflow-hidden flex items-center justify-center'>
              <ReactCompareSlider 
                itemOne={
                  <ReactCompareSliderImage 
                    src="https://ik.imagekit.io/jamesUPW/images/slider/2/driveway-cleaning-before.webp" 
                    srcSet="https://ik.imagekit.io/jamesUPW/images/slider/2/driveway-cleaning-before.webp?tr=w-320 320w, https://ik.imagekit.io/jamesUPW/images/slider/2/driveway-cleaning-before.webp?tr=w-640 640w, https://ik.imagekit.io/jamesUPW/images/slider/2/driveway-cleaning-before.webp?tr=w-760 760w, https://ik.imagekit.io/jamesUPW/images/slider/2/driveway-cleaning-before.webp?tr=w-980 980w, https://ik.imagekit.io/jamesUPW/images/slider/2/driveway-cleaning-before.webp?tr=w-1280 1280w, https://ik.imagekit.io/jamesUPW/images/slider/2/driveway-cleaning-before.webp?tr=w-1920 1920w" 
                    alt="Driveway Cleaning Before - Memphis Tn"
                  />}
                itemTwo={
                  <ReactCompareSliderImage 
                    src="https://ik.imagekit.io/jamesUPW/images/slider/2/driveway-cleaning-after.webp" 
                    srcSet="https://ik.imagekit.io/jamesUPW/images/slider/2/driveway-cleaning-after.webp?tr=w-320 320w, https://ik.imagekit.io/jamesUPW/images/slider/2/driveway-cleaning-after.webp?tr=w-640 640w, https://ik.imagekit.io/jamesUPW/images/slider/2/driveway-cleaning-after.webp?tr=w-760 760w, https://ik.imagekit.io/jamesUPW/images/slider/2/driveway-cleaning-after.webp?tr=w-980 980w, https://ik.imagekit.io/jamesUPW/images/slider/2/driveway-cleaning-after.webp?tr=w-1280 1280w, https://ik.imagekit.io/jamesUPW/images/slider/2/driveway-cleaning-after.webp?tr=w-1920 1920w"
                    alt="Driveway Cleaning After- Memphis Tn"
                  />
                }
                changePositionOnHover
              />
            </div>
            <div className="grid gap-x-5 grid-cols-4 col-span-4 lg:col-start-7">
              <h2 className='col-span-4 font-bold text-4xl flex items-center justify-center md:justify-start'>Driveway Cleaning</h2>
              <p className='col-span-4 text-lg text-center md:text-left'>The easiest and most affordable way to spruce up any property is to utilize a thorough soft low pressure wash service. We can clean your walkways, patios, driveways, decks, fencing and more! If there is dirt or grime to be found we can soft wash it!</p>
            </div>
          </Grid>
        </Container>
      </Wrapper>
      <Wrapper className="bg-gray-100 py-8 pb-20">
        <Container>
          <Grid>
            <div className='col-span-4 lg:col-span-4 bg-black h-64 lg:h-72 lg:col-start-7 overflow-hidden flex items-center justify-center'>
              <ReactCompareSlider 
                itemOne={
                  <ReactCompareSliderImage 
                    src="https://ik.imagekit.io/jamesUPW/images/slider/3/concrete-cleaning-before.webp" 
                    srcSet="https://ik.imagekit.io/jamesUPW/images/slider/3/concrete-cleaning-before.webp?tr=w-320 320w, https://ik.imagekit.io/jamesUPW/images/slider/3/concrete-cleaning-before.webp?tr=w-640 640w, https://ik.imagekit.io/jamesUPW/images/slider/3/concrete-cleaning-before.webp?tr=w-760 760w, https://ik.imagekit.io/jamesUPW/images/slider/3/concrete-cleaning-before.webp?tr=w-980 980w, https://ik.imagekit.io/jamesUPW/images/slider/3/concrete-cleaning-before.webp?tr=w-1280 1280w, https://ik.imagekit.io/jamesUPW/images/slider/3/concrete-cleaning-before.webp?tr=w-1920 1920w" 
                    alt="Concrete Cleaning Before - Memphis Tn"
                  />}
                itemTwo={
                  <ReactCompareSliderImage 
                    src="https://ik.imagekit.io/jamesUPW/images/slider/3/concrete-cleaning-after.webp" 
                    srcSet="https://ik.imagekit.io/jamesUPW/images/slider/3/concrete-cleaning-after.webp?tr=w-320 320w, https://ik.imagekit.io/jamesUPW/images/slider/3/concrete-cleaning-after.webp?tr=w-640 640w, https://ik.imagekit.io/jamesUPW/images/slider/3/concrete-cleaning-after.webp?tr=w-760 760w, https://ik.imagekit.io/jamesUPW/images/slider/3/concrete-cleaning-after.webp?tr=w-980 980w, https://ik.imagekit.io/jamesUPW/images/slider/3/concrete-cleaning-after.webp?tr=w-1280 1280w, https://ik.imagekit.io/jamesUPW/images/slider/3/concrete-cleaning-after.webp?tr=w-1920 1920w"
                    alt="Concrete Cleaning After - Memphis Tn"
                  />
                }
                changePositionOnHover
              />
            </div>
            <div className="grid gap-x-5 grid-cols-4 col-span-4 lg:col-start-3 md:order-first">
              <h2 className='col-span-4 font-bold text-4xl flex items-center justify-center md:justify-start'>Concrete Cleaning</h2>
              <p className='col-span-4 text-lg text-center md:text-left'>Unlike softwashing, we use high pressure, in order to ensure a great clean. We combine a safe mix of  detergents and sodium hydrochlorite!</p>
            </div>
          </Grid>
        </Container>
      </Wrapper>
      <Wrapper styles={{'background': "#1971CB", 'color': 'white'}}>
        <Container>
          <Grid className="py-14 px-4">
            <p className='col-span-4 md:col-span-6 md:col-start-2 lg:col-start-4 text-center'>Let Us Do The Hard Part For You</p>
            <h2 className='col-span-4 md:col-span-6 md:col-start-2 lg:col-start-4 text-center text-5xl lg:text-6xl font-bold pb-2'>Our Top Rated Services</h2>
            <p className='col-span-4 md:col-span-6 md:col-start-2 lg:col-start-4 text-center pb-10'>Just By Filling Out Our Quick Form You&apos;ll Recieve A Quote Today!</p>
            <ButtonGridGroup alt/>
          </Grid>
        </Container>
      </Wrapper>
      <Wrapper 
        styles={{'background': "#1971CB", 'color': 'white', '::after': {'content': "", "position": "absolute", "bottom": "-100px", "left": "0", "borderRight": "49vw solid transparent", "borderLeft": "50vw solid transparent", "borderTop": "100px solid #1971CB"}}}
        className="relative" 
      >
        <Container>
          <Grid className="py-14 px-4">
            <div className='col-span-4 md:col-start-3 lg:col-start-5 flex justify-center'>
              <img src="/images/stars.svg" alt="5 gold stars" />
            </div>
            <h2 className='col-span-4 md:col-span-6 md:col-start-2 lg:col-start-4 text-center text-5xl lg:text-6xl font-bold pb-4'>HEAR WHAT YOUR NEIGHBORS ARE SAYING ABOUT US!</h2>
          </Grid>
        </Container>
        <Wrapper
        styles={{"position": "absolute", "bottom": "-100px", "left": "0", "borderRight": "49vw solid transparent", "borderLeft": "50vw solid transparent", "borderTop": "100px solid #1971CB"}}
      />
      </Wrapper>
      <Wrapper className="mt-52">
        <Container>
          <Grid>
            <h2 className='col-span-4 md:col-span-6 md:col-start-2 lg:col-span-10 lg:col-start-2 text-center text-5xl lg:text-6xl font-bold mb-10'>BEST <br />PRESSURE WASHING IN MEMPHIS</h2>
            <ReviewCard 
              text="James Uptown Pressure Washing delivers a professional, quality product: cleanliness! The owner is involved in the entire process from start to finish. He and his team take pride in their work. I am looking forward to doing business with James Uptown again. If you are needing some pressure washing at your home or company, give James a call. You will not regret it!"
              user="LACEY ROBINSON"
            />
            <ReviewCard 
              text="James did an excellent job on my house getting it all cleaned up in order to sell it. I appreciate all their hard work."
              user="ROBERT COX"
              alt
            />
            <ReviewCard 
              text="Had Mr. James pressure wash my house for me down here in Harbor Town. From start to finish and incredible job quality wise and customer service wise. Highly recommend. Thanks!"
              user="GAYLON ROBINSON"
            />
            <ReviewCard 
              text="Absolutely an amazing refreshed look of my house, driveway and curb!!!! I am so estatic about the outcome and the new curb appeal. James and his partner has my pressure washing needs for life. They were professional, courteous and timely. He did such an amazing job, my neighbor requested and received immediate service. I highly recommend his services to anyone looking for competitive pricing for 5 star service."
              user="Classydiva Middleton"
              alt
            />
          </Grid>
        </Container>
      </Wrapper>
    </>
  )
}
