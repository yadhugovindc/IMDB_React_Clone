import React, { useState } from 'react'

const Pagination = ({handleprev,handlefor,pageNo}) => {
  
  return (
    <div className='bg-gray-400 p-4 mt-4 flex justify-center gap-5'>
     <div onClick={handleprev} className='' ><i className="fa-solid fa-arrow-left"></i></div>
     <div className=''>{pageNo}</div>
     <div onClick={handlefor} className=''><i className="fa-solid fa-arrow-right"></i></div>
     
     
     
    </div>
  )
}

export default Pagination