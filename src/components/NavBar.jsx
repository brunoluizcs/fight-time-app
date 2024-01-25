import React from 'react'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-orange-600 text-4x1 font-bold cursor-pointer'>FUMAÇA FLIX</h1>
        <div>
            <button className='text-white pr-4'>Sign In</button>
            <button className='bg-orange-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
        </div>
    </div>
  )
}

export default NavBar
