import React from 'react'
import {GiCrossMark} from 'react-icons/gi'

 function Hide({setActive}) {
    const changeToFalse = ()=>{
        setActive(false)
    }
  return (
    <div className='hide' onClick={changeToFalse}><GiCrossMark className='icon'/></div>
  )
}
export default Hide
