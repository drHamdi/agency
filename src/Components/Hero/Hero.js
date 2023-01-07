import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import './heroStyle.css'
import Video from '../../Assets/maldivesVideo.mp4'

function Hero () {
  return (
    <div className='hero'>
      <video autoPlay loop muted id='video' >
        <source src={Video} type='video/mp4' />
      </video>
      <div className='overplay'></div>
      <div className='content'>
        <h1>First Class Travel</h1>
        <h2>Top 1% location worldwide</h2>
        <form className='form'>
          <div>
            <input type='text' placeholder='Search Destination' />
          </div>
          <div>
            <button> <AiOutlineSearch className='icon' /></button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Hero
