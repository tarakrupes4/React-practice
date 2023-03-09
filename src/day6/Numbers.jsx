import React from 'react'

function Numbers(props) {
    const numberStyle = {
        padding: '20px 20px 20px 20px',
        border:'solid',
        color : 'white',
        backgroundColor :props.color,
        height:'145px',
        width :'145px',
        justifyContent: 'center',
        textAlign : 'center',
        borderWidth : '5px',
        borderColor : 'white'
      }
  return (
    <div style={numberStyle}>{props.number}</div>
  )
}

export default Numbers