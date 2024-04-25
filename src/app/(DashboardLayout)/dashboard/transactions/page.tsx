import Image from 'next/image';
import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import logo from '../../../../../public/images/staff1.jpg'
const TransactionPage = () => {
  return (
    <div>
      {/* monthly transaction bar */}
      <div className="flex justify-between border shadow-xl rounded-md text-2xl font-bold px-3 py-4"> <button className="text-gray-600 hover:text-[#EAB308]"><FaChevronLeft  />
  </button> <p className="text-[#9ACD32]"> April 2024 </p> <button className="text-gray-600 hover:text-[#EAB308]"><FaChevronRight />
  </button> </div>
  {/* transaction cards */}

  <div>
    <Image className="rounded-full" src={logo} width={100} height={100} alt='expense category images'/>
  </div>
    </div>
  )
}

export default TransactionPage;