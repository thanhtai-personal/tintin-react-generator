import {
  Code,
  SportsSoccer,
  SportsEsports,
  MusicNote,
  MonetizationOn,
  Headset
} from '@material-ui/icons'

export const iconKeys = {
  code: 'code',
  soccer: 'soccer',
  game: 'game',
  music: 'music',
  money: 'money',
  headSet: 'headSet'
}

const MaterialUIIcons = {
  [iconKeys.code]: <Code />,
  [iconKeys.soccer]: <SportsSoccer />,
  [iconKeys.game]: <SportsEsports />,
  [iconKeys.music]: <MusicNote />,
  [iconKeys.money]: <MonetizationOn />,
  [iconKeys.headSet]: <Headset />
}

export const getIconByKey = (key) => {
  return MaterialUIIcons[key] || <Code />
}

export default MaterialUIIcons