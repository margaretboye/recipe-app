import { HeartIcon, PlusIcon } from '@heroicons/react/24/solid'
import { BookmarkIcon, HomeIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { NavLink } from 'react-router-dom'

const BottomNav = () => {
  return (
    <div className='flex justify-evenly items-center h-[96px]'>
        <NavLink to="/recipe">
            <HomeIcon className='size-[24px]'/>
        </NavLink>
        <NavLink to="/categories">
            <BookmarkIcon  className='size-[24px]'/>
        </NavLink>
        <NavLink to="/favorites">
            <HeartIcon  className='size-[24px]'/>
        </NavLink>
        <NavLink to="/recipe/new">
            <PlusIcon  className='size-[24px]'/>
        </NavLink>
    </div>
  )
}

export default BottomNav