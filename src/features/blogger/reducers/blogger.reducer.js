
import {
  UPDATE_DETAIL_BLOG
  , UPDATE_ACTIVE_TAB
} from '../actions/types'
import { GitHub, LinkedIn, Person } from '@material-ui/icons'
import images, { imageKeys } from './data/images/imagesSource'
import posts, { postKeys, postGroupKeys, postGroups } from './data/posts'

const initalState = {
  sections: postGroups,
  mainFeaturedPost: {
    [postGroupKeys.reactJs]: {
      title: 'Giới thiệu về react Hooks',
      description:
        `Hook được đưa lên từ phiên bản React 16.8 để giúp bạn quản lý state và các tính năng khác mà không sữ dụng class.`,
      image: images[imageKeys.reactHook],
      mediaImage: images[imageKeys.reactHookMedia],
      imgText: 'react hook image',
      linkText: 'Đọc tiếp',
      key: postKeys.introducingHooks,
      imageTitle: 'react hook media image'
    },
    [postGroupKeys.films]: {
      title: '',
      description: '',
      image: '',
      imgText: '',
      linkText: 'Đọc tiếp',
      key: '',
    },
    [postGroupKeys.games]: {
      title: '',
      description: '',
      image: '',
      imgText: '',
      linkText: 'Đọc tiếp',
      key: '',
    },
    [postGroupKeys.htmlCss]: {
      title: '',
      description: '',
      image: '',
      imgText: '',
      linkText: 'Đọc tiếp',
      key: '',
    },
    [postGroupKeys.novals]: {
      title: '',
      description: '',
      image: '',
      imgText: '',
      linkText: 'Đọc tiếp',
      key: '',
    },
    [postGroupKeys.travel]: {
      title: '',
      description: '',
      image: '',
      imgText: '',
      linkText: 'Đọc tiếp',
      key: '',
    }
  },
  featuredPosts: {
    [postGroupKeys.reactJs]: posts[postGroupKeys.reactJs],
    [postGroupKeys.films]: posts[postGroupKeys.films],
    [postGroupKeys.games]: posts[postGroupKeys.games],
    [postGroupKeys.htmlCss]: posts[postGroupKeys.htmlCss],
    [postGroupKeys.novals]: posts[postGroupKeys.novals],
    [postGroupKeys.travel]: posts[postGroupKeys.travel]
  },
  sidebar: {
    title: 'About',
    description:
      'A simple blogger page of Tai Tran',
    archives: [],
    social: [
      { name: 'GitHub', icon: GitHub, url: 'https://github.com/thanhtai-personal' },
      { name: 'Linkedin', icon: LinkedIn, url: 'https://www.linkedin.com/in/tran-thanh-tai-539250129/' },
      { name: 'Personal Site', icon: Person, url: 'https://tttgalaxy.co.uk' },
    ],
  },
  detail: {},
  activeTab: postGroupKeys.reactJs
}

const bloggerReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case UPDATE_DETAIL_BLOG:
      return {
        ...state,
        detail: posts[state.activeTab].find(post => post.key === payload) || {}
      }
    case UPDATE_ACTIVE_TAB:
      return {
        ...state,
        activeTab: payload || postGroupKeys.reactJs
      }
    default:
      return state
  }
}

export default bloggerReducer