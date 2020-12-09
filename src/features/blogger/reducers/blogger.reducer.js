
import Utils from 'root/utils'
import { BLOGGER_ACTION } from '../actions/types'
import post1 from './data/blog-post.1.md'
import post2 from './data/blog-post.2.md'
import post3 from './data/blog-post.3.md'
import { GitHub, LinkedIn, Person } from '@material-ui/icons'

const initalState = {
  sections: [
    { title: 'ReactJS', url: '/blogger?query=reactjs' },
    { title: 'HTML/CSS', url: '/blogger?query=htmlcss' },
    { title: 'Games', url: '/blogger?query=game' },
    { title: 'Travel', url: '/blogger?query=travel' },
    { title: 'Novals', url: '/blogger?query=novals' },
    { title: 'Film', url: '/blogger?query=film' },
  ],
  mainFeaturedPost: {
    title: 'Title of a longer featured blog post',
    description:
      `Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.`,
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'Continue reading…',
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
  posts: [post1, post2, post3],
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
  }
}

const bloggerReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case BLOGGER_ACTION:
      return {
        ...state,
        ...payload
      }
    case Utils.makeSagasActionType(BLOGGER_ACTION).SUCCESS:
      return {
        ...state,
        ...payload
      }
    case Utils.makeSagasActionType(BLOGGER_ACTION).FAILED:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}

export default bloggerReducer