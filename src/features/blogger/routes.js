import BloggerContainer from './containers/blogger'
import BlogDetailContainer from './containers/blogDetail'
import { hocKeys } from 'root/utils'
import setUpFeature from './setup'

const defaultRoutes = [
  {
    key: 'blogger',
    path: '/blogger',
    isExact: true,
    component: BloggerContainer,
    hocs: [hocKeys.multiTheme],
    setUpStore: setUpFeature
  },
  {
    key: 'blogger',
    path: '/blogger/:key',
    isExact: true,
    component: BlogDetailContainer,
    hocs: [hocKeys.multiTheme],
    setUpStore: setUpFeature
  },
]

export default defaultRoutes