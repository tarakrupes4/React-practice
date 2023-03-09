import React from 'react'
import Input from './Input'

function Home() {
  return (
    <div className='container home'>
    <h1>SUBSCRIBE</h1>
    <p>Sign up with your email address to receive news and updates.</p>
    <Input name = 'field' holder = 'first name'/>
    <Input name = 'field' holder = 'last name'/>
    <Input name = 'field' holder = ' E-mail '/>
    <br/>
    <button className='danger-button feild'>Subscribe</button>
    </div>
  )
}

export default Home