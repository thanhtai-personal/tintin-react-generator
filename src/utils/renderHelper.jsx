import React, { useState, useEffect } from 'react'
import { isElementInViewport } from 'root/utils'
import { Zoom } from '@material-ui/core'
import { useCallback } from 'react'


export const useLazyLoadSection = (WrappedComponent, { elementId, width = '100%', height = '200px' }) => {
    const LazyLoadComponent = (props) => {
        const [isLoaded, setIsLoaded] = useState(false)
        const handleScroll = useCallback(() => {
            const sectionElement = document.getElementById(elementId)
            if (!isLoaded && sectionElement && isElementInViewport(sectionElement)) {
                setTimeout(() => {
                    setIsLoaded(true)
                }, 200)
            }
        }, [ isLoaded ])

        useEffect(() => {
            handleScroll()
            window.addEventListener('scroll', handleScroll)
            return () => { window.removeEventListener('scroll', handleScroll) }
        // for componentDidMount
        // eslint-disable-next-line
        }, [])
        return isLoaded ? <Zoom in={isLoaded} timeout={{ enter: 200, appear: 500 }}>
                <WrappedComponent {...props}/>
            </Zoom> 
            : <div id={elementId} style={{
                width, height, backgroundColor: 'white'
            }}></div>
    }
    return LazyLoadComponent
}

export const useLazyLoadImage = (WrappedComponent, elementId) => {
  const LazyLoadImage = (props) => {
    const [loaded, setLoaded] = useState(false)
    let imgElm = document.getElementById(elementId)

    const handleScroll = useCallback(() => {
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
    }, [props.src, props.keepRatio, props.effect, imgElm, props.width, loaded])

    useEffect(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', this.handleScroll)
        }
    // for componentDidMount
    //eslint-disable-next-line
    }, [])
    const { id, ...nestedProps } = props
    return (
      <WrappedComponent id={elementId} {...nestedProps} />
    )
  }

  return LazyLoadImage
}