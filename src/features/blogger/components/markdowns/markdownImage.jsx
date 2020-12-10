import React from 'react'
import images from '../../reducers/data/images/imagesSource'

const MarkdownImage = (props) => {
  const { width, height } = props
  return (
    <picture>
      <img alt={props?.imageKey} src={images[props?.imageKey]} style={{ width, height }}>
      </img>
    </picture>
  )
}

export default MarkdownImage