import React from 'react'
import homebanner from '../../assets/homebanner.png'

function HomeSlide1() {
  return (
<div className='relative'>
  <div className='w-full h-[579px] p-14 md:p-36 relative' style={{backgroundImage:`url(${homebanner})`,backgroundSize:"cover",backgroundPosition: "70% 30%"}}>
    <div className='absolute inset-0 bg-green-950 opacity-50'></div>
    <div className='relative md:w-4/5 w-full'>
      <h1 className='font_poppins font-bold text-white text-[30px] md:text-[50px] md:leading-[62px] mb-3 mt-20 md:mt-0'>Lorem ipsum dolor sit amet, consectetur adighughd.</h1>
      <p className='font_poppins text-white font-light md:text-[15px] md:w-2/3 w-full'>Sed at elit ultricies, convallis sapien vitae, iaculis felis. Sed a dui urna. Nullam molestie lectus sed dictum ultricies.</p>
      <button className='rounded-full px-4 py-2 border-[1px] border-slate-600 font_poppins text-[18px] font-semibold mt-5'>More Details</button>
    </div>
  </div>
</div>

  )
}

export default HomeSlide1