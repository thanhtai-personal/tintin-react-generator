import React from 'react'
import singleSounds from './singleSounds'
import SoundComponent from '../../singleSound'

const sources = Object.keys(singleSounds).map((key) => ({
  key: key,
  src: singleSounds[key],
  type: null
}))

const DoremifaSoundComponent = (props) => {
  return <SoundComponent {...props} sources={sources} style={{ display: 'none' }}/>
}

export default DoremifaSoundComponent