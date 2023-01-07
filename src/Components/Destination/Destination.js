import React from 'react'
import './DestiStyle.css' 

import borabora from '../../Assets/borabora.jpg'
import borabora2 from '../../Assets/borabora2.jpg'
import Maldive from '../../Assets/maldives.jpg'
import Maldive2 from '../../Assets/maldives2.jpg'
import Keywest from '../../Assets/keywest.jpg'

function Destination() {
  return (
    <div className='destination'>
        <div className='container'>
            <h1>All-Inclusive Resorts</h1>
            <p>On the Caribean's Best Beaches</p>
            <div className='img-container'>
            <img className='span-3 image-grid-row-2' src={borabora} alt='/' />
            <img src={borabora2} alt='/' />
            <img src={Maldive} alt='/' />
            <img src={Maldive2} alt='/' />
            <img src={Keywest} alt='/' />
            </div>
        </div>
    </div>
  )
}

export default Destination