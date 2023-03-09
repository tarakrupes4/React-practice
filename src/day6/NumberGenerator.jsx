import React from 'react'
import Numbers from './Numbers';

function NumberGenerator() {
    const numbers = (n)=>{
        let arr = []
        for(let i = 0;i<=n;i++){
            arr.push(i)
        }
        return arr;
    }
    const checkNumber = (value)=>{
        let numberIs = '';
        if(value%2===0){
            numberIs = 'Even'
        }else{
            numberIs = 'Odd'
        }
        if(value>2){
            let isPrime = true
            for(let i = 2;i<value;i++){
                if(value % i === 0){
                    isPrime = false
                }
            }
            if(isPrime){
                numberIs = 'Prime'
            }
        }
        if(value===2){
            numberIs = 'Prime'
        }
        return numberIs
      }
      const getColor = (value)=>{
        let color = ''
          if(value==='Even'){
             color = '#73F781'
          }else if(value==='Odd'){
             color = '#F9B939'
          }else if(value==='Prime'){
            color = '#FA6157'
          }
          return color
      }
  return (
    <div className='container'>
        <h1>30 days of React</h1>
        <h3>Number generator</h3>
        <div className='skills'>
        {
            numbers(31).map(number=><Numbers color={getColor(checkNumber(number))} number={number}/>)
        }
        </div>
    </div>
  )
}

export default NumberGenerator