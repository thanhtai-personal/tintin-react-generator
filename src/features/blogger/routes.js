import BloggerContainer from './containers/blogger'

const defaultRoutes = [
  {
    key: 'blogger',
    path: '/blogger',
    isExact: true,
    component: BloggerContainer,
    hocs: []
  },
]

export default defaultRoutes