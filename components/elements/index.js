import Link from "next/link"

export function Wrapper({children, className, styles}) {
    return (
        <section className={className} style={styles}>
            {children}
        </section>
    )
}

export function Container({children, className}) {
    return (
        <div className={`container mx-auto ${className}`}>
            {children}
        </div>
    )
}

export function Grid({children, className}) {
    return (
        <div className={`grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-5 ${className}`}>
            {children}
        </div>
    )
}

export function ButtonGridGroup({alt}) {
    const styles = {
        main: "border border-4 rounded-xl border-white text-white",
        alt: "border border-4 rounded-xl border-gray-300 text-black"
    }
    return (
      <>
        <button 
            className={`font-bold shadow-md h-20 col-span-2 mb-4 md:mb-0 text-lg col-start-2 md:col-start-3 lg:col-start-5 lg:text-2xl ${alt ? styles.alt : styles.main}`}
            style={{'background': alt ? "white" : "#1971cb"}}
        >
            <Link href="/get-quote">
                <a>Get Quote</a>
            </Link>
        </button>
        <button 
            className={`font-bold shadow-md h-20 col-span-2 text-lg col-start-2 md:col-start-5 lg:col-start-7 lg:text-2xl ${alt ? styles.alt : styles.main}`}
            style={{'background': alt ? "white" : "#1971cb"}}
        >
            <Link href="tel:19013597672">
                <a>Call Today</a>
            </Link>
        </button>
      </>
    )
}

export function GridRowSpace({spaceNumber}) {
    return (
        <div className={`hidden md:block md:col-span-8 lg:col-span-12 h-${spaceNumber}`}/>
    )
}