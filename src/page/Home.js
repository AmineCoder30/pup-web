import React, { useState } from 'react'
import {Routes,Route} from 'react-router-dom'

import Contact from '../component/Contact'
import Hide from '../component/Hide'
import NavBAr from '../component/NavBAr'
import Team from '../component/Team'
import Title from '../component/Title'
import Welcome from '../component/Welcome'
import Work from '../component/Work'
 
 function Home() {
    const [active,setActive] = useState(false)
    
  return (
    <div className='home container'>
    <div className='tm-bg'></div>
    <div className='home-nav row'>
        <Title />
        <NavBAr setActive={setActive}/>
    </div>
      <div className={active?'home_routes show container':'home_routes container'}>
            <Hide setActive={setActive}/>
            <Routes>
            <Route path='/Welcome' element={<Welcome/>}/>
            <Route path='/Team' element={<Team/>}/>
            <Route path='/Work' element={<Work/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            </Routes>
      </div>
    </div>
 
  )
}
export default Home