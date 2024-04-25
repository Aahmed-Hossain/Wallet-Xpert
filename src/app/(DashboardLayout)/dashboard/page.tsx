import React from 'react'
import { TbCurrencyTaka } from "react-icons/tb";
import { Divider } from '@mui/material'

const DashboardPage = () => {
  return (
    <div>
      {/* balance summary card */}
      <div className="shadow-xl hover:shadow-2xl rounded-md border px-4 py-8 w-72 ">
       <h2 className="text-xl font-bold">Summary</h2>
        <div className='flex justify-between'>
          <p className="font-semibold text-gray-600" >Balance</p> <p className='text-green-500'> ৳ 00.00</p>
        </div>
        <div className='flex justify-between'>
          <p className="font-semibold text-gray-600">Credit Cards: </p> <p className='text-red-500'> -৳ 00.00</p>
        </div>
        <Divider/>
        <div className='flex justify-between'>
          <p className="font-semibold text-gray-600">Total Remanings:</p> <p className='text-green-500'> -৳ 00.00</p>
        </div>
      </div>
    </div>



  )
}

export default DashboardPage