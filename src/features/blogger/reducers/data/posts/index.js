
import images, { imageKeys } from '../images/imagesSource'
import introducingHooks from './reactjs/introducingHooks.md'

export const postKeys = {
  introducingHooks: 'introducingHooks'
}

export const postGroupKeys = {
  reactJs: 'reactjs',
  htmlCss: 'htmlcss',
  games: 'games',
  travel: 'travel',
  novals: 'novals',
  films: 'films'
}

export const postGroups = [
  { title: 'ReactJS', url: `/blogger?query=${postGroupKeys.reactJs}`, key: postGroupKeys.reactJs },
  { title: 'HTML/CSS', url: `/blogger?query=${postGroupKeys.htmlCss}`, key: postGroupKeys.htmlCss },
  { title: 'Games', url: `/blogger?query=${postGroupKeys.games}`, key: postGroupKeys.games },
  { title: 'Travel', url: `/blogger?query=${postGroupKeys.travel}`, key: postGroupKeys.travel },
  { title: 'Novals', url: `/blogger?query=${postGroupKeys.novals}`, key: postGroupKeys.novals },
  { title: 'Films', url: `/blogger?query=${postGroupKeys.films}`, key: postGroupKeys.films },
]

const posts = {
  [postGroupKeys.reactJs]: [{
    key: postKeys.introducingHooks,
    content: introducingHooks,
    title: 'Introducing hook',
    image: images[imageKeys.reactHook],
    date: '10/12/2020',
    description: 'Hook được đưa lên từ phiên bản React 16.8 để giúp bạn quản lý state và các tính năng khác mà không sữ dụng class',
    mediaImage: images[imageKeys.reactHookMedia],
    imageTitle: 'hook media image',
    linkText: 'Đọc tiếp...'
  }],
  [postGroupKeys.htmlCss]: [],
  [postGroupKeys.games]: [],
  [postGroupKeys.travel]: [],
  [postGroupKeys.novals]: [],
  [postGroupKeys.films]: []
}

export default posts