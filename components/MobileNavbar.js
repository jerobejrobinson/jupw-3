import { useState } from 'react';
import styles from '../styles/MainNavbar.module.css'
import { Slide } from "react-reveal";
import { Grid, Wrapper, Container } from "./elements"
import Link from "next/link"

const MobileNav = () => {
    
    return (
            <div className={`${styles.mobileMenuWrapper}`}>
                <Wrapper>
                    <Container>
                        <Grid>
                            <div className="col-span-4 md:col-span-4 flex flex-col justify-between" style={{'height': 'calc(100vh - 80px)'}}>     
                                <div className={`font-bold relative h-full w-full text-center cursor-pointer flex items-center justify-center ${styles.hoverOverTab}`}
                                >
                                    <Link href="/about">
                                        <a>About</a>
                                    </Link>
                                </div>
                                <div className={`font-bold relative h-full w-full text-center cursor-pointer flex items-center justify-center  ${styles.hoverOverTab}`}>
                                    <Link href="/services">
                                        <a>Services</a>
                                    </Link>
                                </div>
                                <div className="w-full h-full flex justify-center items-center">
                                    <button 
                                        className='font-bold shadow-md p-2 col-span-2 mb-4 md:mb-0 text-lg col-start-2 md:col-start-3 lg:col-start-5 lg:text-xl border border-4 rounded-xl border-white text-white'
                                        style={{'background': "#1971cb"}}
                                    >
                                        <Link href="/get-quote">
                                            <a>Get Quote</a>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </Grid>
                    </Container>
                </Wrapper>  
            </div>
    )
}

export default MobileNav 