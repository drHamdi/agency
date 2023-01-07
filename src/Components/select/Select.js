import React from 'react'
import './selectStyle.css' 

import borabora from '../../Assets/borabora.jpg'
import borabora2 from '../../Assets/borabora2.jpg'
import Maldive from '../../Assets/maldives.jpg'
import Maldive2 from '../../Assets/maldives2.jpg'
import Maldive3 from '../../Assets/maldives3.jpg'
import Keywest from '../../Assets/keywest.jpg'

import Selectimg from '../selectimgs/Selectimg'

function Select() {
  return (
    <div name='views' className='selects'>
    <div className='container'>
        <Selectimg bgImg={borabora} text='Bora Bora' />
        <Selectimg bgImg={borabora2} text='Emerald Bay' />
        <Selectimg bgImg={Maldive} text='Maldives' />
        <Selectimg bgImg={Maldive2} text='Grenada' />
        <Selectimg bgImg={Maldive3} text='Barbados' />
        <Selectimg bgImg={Keywest} text='Key West' />
    </div>

</div>
  )
}

export default Select