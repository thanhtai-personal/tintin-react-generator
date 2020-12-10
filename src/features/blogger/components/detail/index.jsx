import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Container } from '@material-ui/core'
import MarkDown from './../markdown'
import { updateDetailBlogger } from './../../actions'

const BlogDetail = (props) => {

  const [markdown, setMarkdown] = useState('')
  const { updateDetailBlogger, detail = {} } = props
  const { content } = detail
  useEffect(() => {
    updateDetailBlogger && typeof updateDetailBlogger === 'function' && updateDetailBlogger(props.match?.params?.key || 'noPost')
  }, [updateDetailBlogger, props.match?.params?.key])

  useEffect(() => {
    content && fetch(content)
      .then(response => {
        return response?.text()
      })
      .then(text => {
        setMarkdown(text)
      })
      .catch((error) => {
        console.log('mdfile error === ', error)
      })
  }, [content])

  return (
    <Container>
      <MarkDown style={{ padding: '2em', minHeight: '91vh' }}>
        {markdown}
      </MarkDown>
    </Container>
  )
}

const mapState = (state) => ({
  detail: state.blogger?.detail
})

const mapProps = {
  updateDetailBlogger
}

export default connect(mapState, mapProps)(BlogDetail)