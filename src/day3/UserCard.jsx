import React from 'react'
import {AiOutlineFieldTime} from 'react-icons/ai'
import {AiFillCheckCircle} from 'react-icons/ai'
import Skill from './Skill'

let profile = require('./images/profile.jpg')


function UserCard() {
  const skillList = ['HTML','CSS','Sass','JS','REACT','REDUX','Java','Python','Ruby','Rust','c++','c#'];
  return (
    <div className='container userCard'>
        <img className= 'profileImg' src = {profile} alt='Profile'></img>
        <p>TARAK RUPESH<AiFillCheckCircle/></p>
        <small>Senior Developer,India</small>
        <p>SKILLS</p>
        <div className='skills'>
         {
           skillList.map((data)=><Skill skillName ={data}/>)
         }
        </div>
        <p><AiOutlineFieldTime/> Joined on Aug 30, 2020</p>
    </div>
  )
}

export default UserCard