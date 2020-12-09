import BloggerContainer from './containers/blogger'
import { hocKeys } from 'root/utils'

const defaultRoutes = [
  {
    key: 'blogger',
    path: '/blogger',
    isExact: true,
    component: BloggerContainer,
    hocs: [ hocKeys.multiTheme ]
  },
]

export default defaultRoutes