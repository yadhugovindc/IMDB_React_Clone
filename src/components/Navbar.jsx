import React from 'react'
import Logo from '../pngegg.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>

      <img className="w-[50px]"  src={Logo} alt="" />
      <Link className='text-blue-500 text-2xl font-bold' to="/">Home</Link>
      <Link className='text-blue-500 text-2xl font-bold' to="/watchlist">WatchList</Link>
    </div>
  )
}

export default Navbar