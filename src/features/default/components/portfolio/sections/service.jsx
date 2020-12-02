import React from 'react'

const Service = (props) => {
  const { data } = props
  return (
    <div className='service_area' id='service'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-12'>
            <p className='short-des'>
              <span className='firstcharacter'>{data.firstCharacter}</span> {data.content}
			        </p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Service