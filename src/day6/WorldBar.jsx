import React from 'react'

function WorldBar(props) {
  return (
    <div className='worldBar'>
        <label>{props.country}</label>
        <p>{props.population}</p>
    </div>
  )
}

export default WorldBar