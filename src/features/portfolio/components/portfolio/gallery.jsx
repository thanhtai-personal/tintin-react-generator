import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import { makeStyles } from '@material-ui/core/styles'
import gallery1 from 'root/assert/images/galerry/1.JPG'
import gallery2 from 'root/assert/images/galerry/2.jpg'
import gallery3 from 'root/assert/images/galerry/3.jpg'
import gallery6 from 'root/assert/images/galerry/6.jpg'
import gallery7 from 'root/assert/images/galerry/7.jpg'
import gallery8 from 'root/assert/images/galerry/8.jpg'
import gallery9 from 'root/assert/images/galerry/9.jpg'
import gallery10 from 'root/assert/images/galerry/10.jpg'
import gallery11 from 'root/assert/images/galerry/11.jpg'
import gallery12 from 'root/assert/images/galerry/12.jpg'
import gallery13 from 'root/assert/images/galerry/13.JPG'
import gallery14 from 'root/assert/images/galerry/14.JPG'
import gallery15 from 'root/assert/images/galerry/15.JPG'
import gallery16 from 'root/assert/images/galerry/16.JPG'
import gallery17 from 'root/assert/images/galerry/17.JPG'
import gallery18 from 'root/assert/images/galerry/18.JPG'
import gallery19 from 'root/assert/images/galerry/19.JPG'
import gallery20 from 'root/assert/images/galerry/20.JPG'
import gallery21 from 'root/assert/images/galerry/21.JPG'
import gallery22 from 'root/assert/images/galerry/22.JPG'
import gallery23 from 'root/assert/images/galerry/22.JPG'
import gallery24 from 'root/assert/images/galerry/24.jpg'
import gallery25 from 'root/assert/images/galerry/25.jpg'

const images = [
  {
    original: gallery24,
    thumbnail: gallery24,
  },
  {
    original: gallery2,
    thumbnail: gallery2,
  },
  {
    original: gallery3,
    thumbnail: gallery3,
  },
  {
    original: gallery6,
    thumbnail: gallery6,
  },
  {
    original: gallery8,
    thumbnail: gallery8,
  },
  {
    original: gallery9,
    thumbnail: gallery9,
  },
  {
    original: gallery7,
    thumbnail: gallery7,
  },
  {
    original: gallery11,
    thumbnail: gallery11,
  },
  {
    original: gallery12,
    thumbnail: gallery12,
  },
  {
    original: gallery25,
    thumbnail: gallery25,
  },
  {
    original: gallery13,
    thumbnail: gallery13,
  },
  {
    original: gallery14,
    thumbnail: gallery14,
  },
  {
    original: gallery15,
    thumbnail: gallery15,
  },
  {
    original: gallery16,
    thumbnail: gallery16,
  },
  {
    original: gallery17,
    thumbnail: gallery17,
  },
  {
    original: gallery18,
    thumbnail: gallery18,
  },
  {
    original: gallery19,
    thumbnail: gallery19,
  },
  {
    original: gallery20,
    thumbnail: gallery20,
  },
  {
    original: gallery21,
    thumbnail: gallery21,
  },
  {
    original: gallery22,
    thumbnail: gallery22,
  },
  {
    original: gallery23,
    thumbnail: gallery23,
  },
  {
    original: gallery1,
    thumbnail: gallery1,
  },
]

const useStyles = makeStyles((theme) => ({
  imageGallery: {
    animation: `$imageAppear 1000ms ${theme.transitions.easing.easeInOut}`
  },
  '@keyframes imageAppear': {
    '0%': {
      opacity: 0,
      backgroundColor: 'transparent'
    },
    '100%': {
      opacity: 1
    }
  }
}))
 
const Gallery = (props) => {
  const classes = useStyles()
  return (
    <ImageGallery
      additionalClass={classes.imageGallery}
      items={images}
      lazyLoad
      slideDuration={2000}
      showThumbnails
      showIndex
    />
  )
}

export default Gallery