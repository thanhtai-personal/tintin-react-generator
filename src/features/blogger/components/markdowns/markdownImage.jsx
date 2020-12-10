import React from 'react'
import images from './imagesSource'

const MarkdownImage = (props) => {
  const { width, height } = props
  return (
    <picture>
      <img src={images[props?.imageKey]} style={{ width, height }}>
      </img>
    </picture>
  )
}

export default MarkdownImage