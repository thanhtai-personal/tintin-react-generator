
import Utils from 'root/utils'
import { BLOGGER_ACTION } from '../actions/types'
import post1 from './data/blog-post.1.md'
import post2 from './data/blog-post.2.md'
import post3 from './data/blog-post.3.md'
import GitHubIcon from '@material-ui/icons/GitHub'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'

const initalState = {
  sections: [
    { title: 'ReactJS', url: '/' },
    { title: 'HTML/Css', url: '/' },
    { title: 'Games', url: '/' },
    { title: 'Travel', url: '/' },
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
      'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    archives: [
      { title: 'March 2020', url: '#' },
      { title: 'February 2020', url: '#' },
      { title: 'January 2020', url: '#' },
      { title: 'November 1999', url: '#' },
      { title: 'October 1999', url: '#' },
      { title: 'September 1999', url: '#' },
      { title: 'August 1999', url: '#' },
      { title: 'July 1999', url: '#' },
      { title: 'June 1999', url: '#' },
      { title: 'May 1999', url: '#' },
      { title: 'April 1999', url: '#' },
    ],
    social: [
      { name: 'GitHub', icon: GitHubIcon },
      { name: 'Twitter', icon: TwitterIcon },
      { name: 'Facebook', icon: FacebookIcon },
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