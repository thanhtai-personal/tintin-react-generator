import React from 'react'
import { connect } from 'react-redux'
import { portfolioActions } from '../../actions'

const PortfolioComponent = (props) => {
  return (
    <div className='container home-page' style={{ opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>
      <span className='tags top-tags'> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
      <div className='text-zone'>
        <h1 aria-label=' Hi, I’m ack,web developer.' className='blast-root'>
          <span className='blast' aria-hidden='true' style={{opacity: 1}}>H</span>
          <span className='blast' aria-hidden='true' style={{opacity: 1}}>i</span>
          <span className='blast' aria-hidden='true' style={{opacity: 1}}>,</span>
          <br />
          <span className='blast' aria-hidden='true' style={{opacity: 1}}>I</span>
          <span className='blast' aria-hidden='true' style={{opacity: 1}}>’</span>
          <span className='blast' aria-hidden='true' style={{opacity: 1}}>m</span>
          <img src='https://jacekjeznach.com/wp-content/themes/jj/img/jj.png'
            alt='Wordpress Developer Name, Web Developer Name' className='animation-logo'
          />
          <span className='blast' aria-hidden='true' style={{opacity: 1}}>a</span>
          <span className='blast' aria-hidden='true' style={{opacity: 1}}>c</span>
          <span className='blast' aria-hidden='true' style={{opacity: 1}}>k</span>
          <span className='blast' aria-hidden='true' style={{opacity: 1}}>,</span>
          <br />
          <span className='blast' aria-hidden='true' style={{opacity: 1}}>w</span>
          <span className='blast' aria-hidden='true' style={{opacity: 1}}>e</span>
          <span className='blast' aria-hidden='true' style={{opacity: 1}}>b</span>
          <span className='blast' aria-hidden='true' style={{opacity: 1}}>d</span>
          <span className='blast' aria-hidden='true' style={{opacity: 1}}>e</span>
          <span className='blast' aria-hidden='true' style={{opacity: 1}}>v</span>
          <span className='blast' aria-hidden='true' style={{opacity: 1}}>e</span>
          <span className='blast' aria-hidden='true' style={{opacity: 1}}>l</span>
          <span className='blast' aria-hidden='true' style={{opacity: 1}}>o</span>
          <span className='blast' aria-hidden='true' style={{opacity: 1}}>p</span>
          <span className='blast' aria-hidden='true' style={{opacity: 1}}>e</span>
          <span className='blast' aria-hidden='true' style={{opacity: 1}}>r</span>
          <span className='blast' aria-hidden='true' style={{opacity: 1}}>.</span>
        </h1>
        <h2>Front End Developer / WordPress Expert</h2>
        <br />
        <a rel='contact' href='https://jacekjeznach.com/contact/' className='flat-button'> Contact me! </a>
      </div>
      <span className='tags bottom-tags'> &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br /> &lt;/html&gt; </span>
      <div id='bulb' className='bulb'>
        <a className='animated' href=''>
        </a>
      </div>
    </div>
  )
}

const mapState = (state) => ({
})

const mapDispatch = {
  portfolioActions,
}

export default connect(mapState, mapDispatch)(PortfolioComponent)