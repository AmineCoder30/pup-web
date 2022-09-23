import React from 'react'
import {AiFillHome,AiOutlineTeam,AiFillMessage} from 'react-icons/ai'
import {HiOutlineHand} from 'react-icons/hi'
import { Link,Outlet } from 'react-router-dom'
import {motion} from 'framer-motion'


 function NavBAr({setActive}) {
    const changeToTrue = ()=>{
        setActive(true)
    }
  return (
    <>
            <nav className='col-12 col-sm-6 grid'>
            <Link  className='grid__item' onClick={changeToTrue} to='/Welcome'>
                <AiFillHome className='icon'/>
                <motion.p
                initial={{y:200}}
                animate={{y:0}}
                >Welcome</motion.p>
            </Link>

            <Link className='grid__item' onClick={changeToTrue} to='/Team'>
                <AiOutlineTeam className='icon'/>
                <motion.p
                initial={{y:200}}
                animate={{y:0}}
                >Our Team</motion.p>
            </Link>

            <Link className='grid__item' onClick={changeToTrue} to='/Work'>
                <HiOutlineHand className='icon'/>
                <motion.p
               
                initial={{y:200}}
                animate={{y:0}}
                >Our Work</motion.p>
            </Link>

            <Link className='grid__item' onClick={changeToTrue} to='/Contact'>
                <AiFillMessage className='icon'/>
                <motion.p
               
                initial={{y:200}}
                animate={{y:0}}
                >Contact</motion.p>
            </Link>
        </nav>
        <Outlet/>
    </>
 

  )
}
export default NavBAr