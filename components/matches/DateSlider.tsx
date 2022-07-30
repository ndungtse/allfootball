import React from 'react'
import NavSlider from '../../helpers/NavSlider'

const DateSlider = () => {
  return (
    <NavSlider>
      <div className='flex items-center  w-full'>
      <input  onChange={(e:any)=> console.log(e.target.value)} placeholder='date' className='hidden ml-3' type="date" name="" id="date" />
        <label onClick={(e: any)=> { e.target.control.value = e.target.textContent; console.log(e.target.control.value);
         }} htmlFor='date' className="flex items-center mx-1 px-3
         border-2 border-orange-600 cursor-pointer bg-orange-600 justify-center">
         2022/07/14
        </label>
        <label onClick={(e: any)=> { e.target.control.value = e.target.textContent; console.log(e.target.control.value);
         }} htmlFor='date' className="flex items-center mx-1 px-3
         border-2 border-orange-600 cursor-pointer justify-center">
         2022/07/17
        </label>
        <label onClick={(e: any)=> { e.target.control.value = e.target.textContent; console.log(e.target.control.value);
         }} htmlFor='date' className="flex items-center mx-1 px-3
         border-2 border-orange-600 cursor-pointer justify-center">
         2022/07/18
        </label>
        <label onClick={(e: any)=> { e.target.control.value = e.target.textContent; console.log(e.target.control.value);
         }} htmlFor='date' className="flex items-center mx-1 px-3
         border-2 border-orange-600 cursor-pointer justify-center">
         2022/07/18
        </label>
        <label onClick={(e: any)=> { e.target.control.value = e.target.textContent; console.log(e.target.control.value);
         }} htmlFor='date' className="flex items-center mx-1 px-3
         border-2 border-orange-600 cursor-pointer justify-center">
         2022/07/18
        </label>
        <label onClick={(e: any)=> { e.target.control.value = e.target.textContent; console.log(e.target.control.value);
         }} htmlFor='date' className="flex items-center mx-1 px-3
         border-2 border-orange-600 cursor-pointer justify-center">
         2022/07/18
        </label>
      </div>
    </NavSlider>
  )
}

export default DateSlider