import { useState, useEffect } from "react"
import { Wrapper, Container, Grid } from "./elements"
import styles from '../styles/MainNavbar.module.css'
import Link from "next/link"
import {BsList, BsXLg} from 'react-icons/bs'
import MobileNav from "./MobileNavbar"
import { Slide } from "react-reveal"

export default function MainNavbar() {
    const [menuClick, setMenuClick] = useState(false);

    const handleMenuClick = () => {
        setMenuClick(prev => !prev);
    }

    function disableScrolling(){
        var x=window.scrollX;
        var y=window.scrollY;
        window.onscroll=function(){window.scrollTo(x, y);};
    }
    
    function enableScrolling(){
        window.onscroll=function(){};
    }

    useEffect(() => {
        if(menuClick == false) {
            enableScrolling()
        } else {
            disableScrolling()
        }
    }, [menuClick])

    return (
        <>
        <nav className="">
            <div className="container mx-auto">
                <Grid>
                    <div className="col-start-1 col-span-2 md:col-start-2 flex justify-center md:justify-start">
                        <Link href="/">
                            <a onClick={() => setMenuClick(false)}><img src="/images/logo.svg" alt="logo" className="w-20 h-20"/></a>
                        </Link>
                    </div>
                    <div className="col-start-3 col-span-2 md:col-start-5 col-span-4 lg:col-start-7 col-span-6 flex justify-between items-center hidden md:flex">     
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
                    <div className="col-start-3 col-span-2 flex justify-center items-center md:hidden">
                        {menuClick ?  (<BsXLg onClick={handleMenuClick} style={{'fontSize': '2rem'}}/>) : (<BsList onClick={handleMenuClick} style={{'fontSize': '2rem'}}/>)}
                    </div>
                </Grid>
            </div>
        </nav>
        {menuClick && (
            <div className={`${styles.mobileMenuWrapper}`}>
                <Wrapper>
                    <Grid>
                        <div className="col-span-4 md:col-span-4 flex flex-col justify-between" style={{'height': 'calc(100vh - 80px)'}}>     
                            <div className={`font-bold relative h-full w-full text-center cursor-pointer flex items-center justify-center ${styles.hoverOverTab}`}
                            >
                                <Link href="/about" >
                                    <a onClick={handleMenuClick}>About</a>
                                </Link>
                            </div>
                            <div className={`font-bold relative h-full w-full text-center cursor-pointer flex items-center justify-center  ${styles.hoverOverTab}`}>
                                <Link href="/services">
                                    <a onClick={handleMenuClick}>Services</a>
                                </Link>
                            </div>
                            <div className="w-full h-full flex justify-center items-center">
                                <button 
                                    className='font-bold shadow-md p-2 col-span-2 mb-4 md:mb-0 text-lg col-start-2 md:col-start-3 lg:col-start-5 lg:text-xl border border-4 rounded-xl border-white text-white'
                                    style={{'background': "#1971cb"}}
                                >
                                    <Link href="/get-quote">
                                        <a onClick={handleMenuClick}>Get Quote</a>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </Grid>
                </Wrapper>  
            </div>
        )}
        </>
    )
}