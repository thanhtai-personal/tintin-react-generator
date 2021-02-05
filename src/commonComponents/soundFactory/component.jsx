import React, { useCallback, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Typography } from '@material-ui/core'
import Color from 'root/utils/color'
import doremifaSound from './smallSounds/doremifa/doremifa'

const sources = Object.keys(doremifaSound).map((key) => ({
  key: key,
  src: doremifaSound[key],
  type: null,
}))

const useStyles = makeStyles((theme) => ({
  soundInfo: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    float: 'right',
    color: Color.white
  },
  audioContainer: {
    display: 'none'
  },
  doremifa: {
    position: 'absolute',
    top: '15px',
    right: '120px',
    float: 'right',
    color: Color.green,
    border: 'solid 1px',
    textTransform: 'capitalize'
  }
}))

const SoundComponent = (props) => {
  const classes = useStyles()
  const [offSound, setOffSound] = useState(false)
  const [loading, setLoading] = useState(false)
  const [audioMapping, setAudioMapping] = useState(null)
  const [audioList, setAudioList] = useState([])
  const [doremiText, setDoremiText] = useState('')

  const handleclickSound = useCallback(() => {
    setOffSound(!offSound)
    setDoremiText('')
  }, [offSound])

  useEffect(() => {
    setLoading(true)
    let _audioList = []
    let audioMappingObj = {}
    let audioContainer = document.getElementById('audio-container')
    sources.forEach((source, index) => {
      let audioElement = document.createElement('audio')
      audioElement.src = source.src
      audioElement.id = source.key || `audio-${index}`
      audioElement.controls = !(source.controls === false)
      audioElement.type = source.type || 'audio/mpeg'
      // audioElement.autoplay = true
      audioContainer.appendChild(audioElement)
      _audioList.push({
        key: source.key,
        // player: new Audio(source.src),
        player: audioElement
      })
      audioMappingObj[source.key] = {
        player: audioElement,
        name: source.key
      }
    })
    setAudioMapping(audioMappingObj)
    setAudioList(_audioList)
    setLoading(false)
  }, [])

  const handleKeyPress = useCallback((e) => {
    if (!audioMapping || offSound) return
    switch (e.key?.toLowerCase()) {
      case 'q':
        setDoremiText(audioList[0].key)
        audioList[0]?.player.play()
        break;
      case 'w':
        setDoremiText(audioList[2].key)
        audioList[2]?.player.play()
        break;
      case 'e':
        setDoremiText(audioList[4].key)
        audioList[4]?.player.play()
        break;
      case 'r':
        setDoremiText(audioList[6].key)
        audioList[6]?.player.play()
        break;
      case 'u':
        setDoremiText(audioList[8].key)
        audioList[8]?.player.play()
        break;
      case 'i':
        setDoremiText(audioList[10].key)
        audioList[10]?.player.play()
        break;
      case 'o':
        setDoremiText(audioList[12].key)
        audioList[12]?.player.play()
        break;
      case 'p':
        setDoremiText(audioList[14].key)
        audioList[14]?.player.play()
        break;
      case 'a':
        setDoremiText(audioList[0].key)
        audioList[0]?.player.play()
        break;
      case 's':
        setDoremiText(audioList[2].key)
        audioList[2]?.player.play()
        break;
      case 'd':
        setDoremiText(audioList[4].key)
        audioList[4]?.player.play()
        break;
      case 'f':
        setDoremiText(audioList[6].key)
        audioList[6]?.player.play()
        break;
      case 'j':
        setDoremiText(audioList[8].key)
        audioList[8]?.player.play()
        break;
      case 'k':
        setDoremiText(audioList[10].key)
        audioList[10]?.player.play()
        break;
      case 'l':
        setDoremiText(audioList[12].key)
        audioList[12]?.player.play()
        break;
      case ';':
        setDoremiText(audioList[14].key)
        audioList[14]?.player.play()
        break;
      case 'z':
        setDoremiText(audioList[1].key)
        audioList[1]?.player.play()
        break;
      case 'x':
        setDoremiText(audioList[3].key)
        audioList[3]?.player.play()
        break;
      case 'c':
        setDoremiText(audioList[5].key)
        audioList[5]?.player.play()
        break;
      case 'v':
        setDoremiText(audioList[7].key)
        audioList[7]?.player.play()
        break;
      case 'm':
        setDoremiText(audioList[9].key)
        audioList[9]?.player.play()
        break;
      case ',':
        setDoremiText(audioList[11].key)
        audioList[11]?.player.play()
        break;
      case '.':
        setDoremiText(audioList[13].key)
        audioList[13]?.player.play()
        break;
      case '/':
        setDoremiText(audioList[15].key)
        audioList[15]?.player.play()
        break;
      default:
        setDoremiText('')
        break;
    }
  }, [offSound, audioMapping])

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress)
    return () => {
      window.removeEventListener('keypress', handleKeyPress)
    }
  }, [offSound, audioMapping])

  return (
    <>
      <Button className={classes.soundInfo} onClick={handleclickSound}>SOUND: {loading ? 'Loading...' : offSound ? ' Off' : '  On'}</Button>
      <Typography className={classes.doremifa}>{doremiText}</Typography>
      <div id='audio-container' className={classes.audioContainer}></div>
    </>
  )
}

export default SoundComponent