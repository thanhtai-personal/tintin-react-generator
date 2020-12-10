import React from 'react'
import ReactMarkdown from 'markdown-to-jsx'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Link } from '@material-ui/core'
import MarkdownImage from './markdowns/markdownImage'

const styles = (theme) => ({
  listItem: {
    marginTop: theme.spacing(1),
  },
  codeBlock: {
    backgroundColor: 'black',
    color: 'white',
    padding: '2em'
  }
})

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h5',
        align: 'center'
      },
    },
    h2: { component: Typography, props: { gutterBottom: true, variant: 'h6' } },
    h3: { component: Typography, props: { gutterBottom: true, variant: 'subtitle1' } },
    h4: {
      component: Typography,
      props: { gutterBottom: true, variant: 'caption', paragraph: true },
    },
    p: { component: Typography, props: { paragraph: true } },
    a: { component: Link },
    li: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <li className={classes.listItem}>
          <Typography component='span' {...props} />
        </li>
      )),
    },
    endArea: { component: Typography, props: { align: 'center', style: { bottom: '0px' } } },
    mdImage: {
      component: withStyles(styles)((props) => (
        <MarkdownImage {...props} />
      )),
    },
    italicText: { component: Typography, props: { style: { fontStyle: 'italic' } } },
    boldText: { component: Typography, props: { style: { fontWeight: 'bold' } } },
    code: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <div className={classes.codeBlock}><code {...props}></code></div>
      )),
    },
  }
}

export default function Markdown(props) {
  return <ReactMarkdown options={options} {...props} />
}
