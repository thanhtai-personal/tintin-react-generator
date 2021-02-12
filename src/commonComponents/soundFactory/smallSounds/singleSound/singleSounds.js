import superMario from 'root/assert/sounds/supermario.mp3'
import gloryGlory from 'root/assert/sounds/gloryglory.mp3'
import beat from 'root/assert/sounds/zapsplat.mp3'

export const singleSoundKeys = {
  superMario: 'superMario',
  gloryGlory: 'gloryGlory',
  beat: 'beat'
}

const singleSounds = {
  [singleSoundKeys.superMario]: superMario,
  [singleSoundKeys.gloryGlory]: gloryGlory,
  [singleSoundKeys.beat]: beat,
}

export default singleSounds