import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <h1 className='text-[75px] text-center'>
            404 page not found
        </h1>

        <NavLink to="/">Go to home page</NavLink>
    </div>
  )
}

export default Error