import React, { useRef, useContext, useState, useCallback } from 'react'
import Image from 'next/image'
import { ScrollContext } from '../utils/scrollObserver'

const Masthead: React.FC = () => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const refContainer = useRef<HTMLDivElement>(null)
    const { scrollY } = useContext(ScrollContext)

    let progress = 0
    const {current: elContainer} = refContainer
    if (elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight)
    }

    const handleImageLoad = useCallback(() => {
        setImageLoaded(true)
    }, [])

    return (
        <div ref={refContainer} style={{transform: `translateY(-${progress * 20}vh)`}} className='min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10'>
            <video autoPlay loop muted playsInline className='absolute w-full h-full object-cover'>
                <source src='/assets/video/paralaxio.mp4' type='video/mp4' />
            </video>
            <div className={`flex-grov-0 pt-10 transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <Image 
                    src='/assets/icons/logo.svg' 
                    width={128 / 3} 
                    height={114 / 3} 
                    alt='logo'
                    onLoad={handleImageLoad} 
                />
            </div>
            <div className='p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex flex-col flex-1 items-center justify-center'>
                <h1 className='mb-6 text-4xl xl:text-5xl'>Paralaxio</h1>
                <h2 className='mb-2 text-2xl xl:text-3xl tracking-tight'>
                    <span>Great effects,<span>{' '}</span>on your page.</span>
                </h2>
            </div>
            <div className={`flex-grow-0 pb-20 md:pb-10 transition-all duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
                <Image 
                    src='/assets/icons/arrow-down.png' 
                    width={180 / 3} 
                    height={180 / 3} 
                    alt='scroll down' 
                    onLoad={handleImageLoad}
                />
            </div>

        </div>
    )
}

export default Masthead