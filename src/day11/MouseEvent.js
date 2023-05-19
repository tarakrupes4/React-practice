import React from 'react'
import { useState } from 'react'

function MouseEvent() {
    const[value,setState] = useState({ backgroundColor: '#BBF2FC',
    fontFamily: 'Courier New',
    height: 'fit-content',
    width: 'fit-content',
    textAlign: 'center',
    borderRadius: '10px',
    marginTop: '20px',
    marginLeft: '100px',
    justifyContent: 'center'})
   
    const handleEvent = ()=>{
        let top = Math.floor((Math.random() * 1000) + 1);
        let left = Math.floor((Math.random()*1000)+1);
        const newState = mouseEve;
        newState.marginTop = top;
        newState.marginLeft = left;
        setState({newState});
    }
    const mouseEve = {
        
            backgroundColor: '#BBF1FC',
            fontFamily: 'Courier New',
            height: 'fit-content',
            width: 'fit-content',
            textAlign: 'center',
            borderRadius: '10px',
            marginTop: '20px',
            marginLeft: '100px',
            justifyContent: 'center'
    }
  return (
    <h1 style={value} onMouseEnter ={handleEvent}>30 Days of react</h1>
  )
}

export default MouseEvent