import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Container } from '@material-ui/core'
import MarkDown from './../markdown'
import { updateDetailBlogger } from './../../actions'

const BlogDetail = (props) => {

  const [markdown, setMarkdown] = useState('')
  const { updateDetailBlogger, detail } = props

  useEffect(() => {
    updateDetailBlogger && typeof updateDetailBlogger === 'function' && updateDetailBlogger(props.match?.params?.key || 'noPost')
  }, [updateDetailBlogger, props.match?.params?.key])

  useEffect(() => {
    fetch(detail?.content)
      .then(response => {
        return response?.text()
      })
      .then(text => {
        setMarkdown(text)
      })
    //eslint-disable-next-line
  }, [])

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