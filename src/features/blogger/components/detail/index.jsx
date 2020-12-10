import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import MarkDown from './../markdown'
import { updateDetailBlogger } from './../../actions'

const BlogDetail = (props) => {

  const { updateDetailBlogger } = props

  useEffect(() => {
    updateDetailBlogger && typeof updateDetailBlogger === 'function' && updateDetailBlogger(props.match?.params?.key || 'noPost')
  }, [ updateDetailBlogger ])
  return (
    <MarkDown>
      {props.detail?.content || ''}
    </MarkDown>
  )
}

const mapState = (state) => ({
  detail: state.blogger?.detail
})

const mapProps = {
  updateDetailBlogger
}

export default connect(mapState, mapProps)(BlogDetail)