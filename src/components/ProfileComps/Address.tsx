import React from 'react'
import AddressCard from '../AddressCard'
AddressCard
function Address() {


  return (
    <div className='w-[100%] h-auto '>
  <div className="grid grid-cols-[repeat(auto-fill,_minmax(270px,_1fr))]  place-items-center w-full">
      <AddressCard/>
      <AddressCard/>
      <AddressCard/>
      </div>

    </div>
  )
}

export default Address
Address