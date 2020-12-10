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
  }, [ updateDetailBlogger, props.match?.params?.key])

  useEffect(() => {
    console.log('detail?.content', detail?.content)
    fetch(detail?.content)
      .then(response => {
        console.log('response', response)
        return response?.text()
      })
      .then(text => {
        console.log('text', text)
        setMarkdown(text)
      })
  }, [detail])

  return (
    <Container>
      <MarkDown style={{ padding: '2em', minHeight: '91vh'}}>
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