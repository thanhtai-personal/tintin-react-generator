import React, { useState, useEffect } from 'react'
import { isElementInViewport } from 'root/utils'

export const useLazyLoadSection = (WrappedComponent, { elementId, width = '100%', height = '200px' }) => {
    const LazyLoadComponent = (props) => {
        const [isLoaded, setIsLoaded] = useState(false)
        const handleScroll = () => {
            const sectionElement = document.getElementById(elementId)
            if (!isLoaded && sectionElement && isElementInViewport(sectionElement)) {
                setIsLoaded(true)
            }
        }

        useEffect(() => {
            handleScroll()
            window.addEventListener('scroll', handleScroll)
            return () => { window.removeEventListener('scroll', handleScroll) }
        // eslint-disable-next-line
        }, [])
        return isLoaded ? <WrappedComponent {...props}/> 
            : <div id={elementId} style={{
                width, height, backgroundColor: 'white'
            }}></div>
    }
    return LazyLoadComponent
}

export const LazyLoadImage = (props) => {
    const [loaded, setLoaded] = useState(false)
    let imgElm = document.getElementById(props.elementId)

    const handleScroll = () => {
        if (!loaded && isElementInViewport(imgElm)) {
            // Load real image
            const imgLoader = new Image()
            imgLoader.src = props.src
            imgLoader.onload = () => {
                const ratioWH = imgLoader.width / imgLoader.height
                imgElm.setAttribute(
                    `src`,
                    `${props.src}`
                )
                props.keepRatio && this.imgElm.setAttribute(
                    `height`,
                    `${props.width / ratioWH}`
                )
                imgElm.classList.add(`${props.effect}`)
                setLoaded(true)
            }
        }
    }

    useEffect(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', this.handleScroll)
        }
    //eslint-disable-next-line
    }, [])

    return (
        <img
            src={props.placeHolder}
            width={props.width || '100%'}
            height={props.height || '100%'}
            ref={_imgElm => imgElm = _imgElm}
            className='lazy-image'
            alt={props.alt}
        />
    )
}