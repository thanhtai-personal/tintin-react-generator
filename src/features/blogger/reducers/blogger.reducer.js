
import Utils from 'root/utils'
import { UPDATE_DETAIL_BLOG } from '../actions/types'
import introduceHooks from './data/posts/reactjs/introducingHooks.md'
import { GitHub, LinkedIn, Person } from '@material-ui/icons'
import reactHookImage from 'root/assert/images/hook.png'

const posts = [ {
  key: 'gtReactHook',
  content: introduceHooks
} ]


const initalState = {
  sections: [
    { title: 'ReactJS', url: '/blogger?query=reactjs', key: 'reactjs' },
    { title: 'HTML/CSS', url: '/blogger?query=htmlcss', key: 'htmlcss' },
    { title: 'Games', url: '/blogger?query=game', key: 'game' },
    { title: 'Travel', url: '/blogger?query=travel', key: 'travel' },
    { title: 'Novals', url: '/blogger?query=novals', key: 'novals' },
    { title: 'Films', url: '/blogger?query=films', key: 'films' },
  ],
  mainFeaturedPost: {
    title: 'Giới thiệu về react Hooks',
    description:
      `Hook được đưa lên từ phiên bản React 16.8 để giúp bạn quản lý state và các tính năng khác mà không sữ dụng class.`,
    image: reactHookImage,
    imgText: 'react hook image',
    linkText: 'Đọc tiếp',
    key: 'gtReactHook'
  },
  featuredPosts: [
    {
      title: 'Featured post',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      title: 'Post title',
      date: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
  ],
  sidebar: {
    title: 'About',
    description:
      'A simple blogger page to show some content',
    archives: [],
    social: [
      { name: 'GitHub', icon: GitHub, url: 'https://github.com/thanhtai-personal' },
      { name: 'Linkedin', icon: LinkedIn, url: 'https://www.linkedin.com/in/tran-thanh-tai-539250129/' },
      { name: 'Personal Site', icon: Person, url: 'https://tttgalaxy.co.uk'},
    ],
  },
  detail: {
    content: introduceHooks,
    key: 'gtReactHook'
  }
}

const bloggerReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case UPDATE_DETAIL_BLOG:
      return {
        ...state,
        ...payload
      }
    case Utils.makeSagasActionType(UPDATE_DETAIL_BLOG).SUCCESS:
      return {
        ...state,
        detail: posts.find((post) => (post.key === payload)) || {}
      }
    case Utils.makeSagasActionType(UPDATE_DETAIL_BLOG).FAILED:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}

export default bloggerReducer