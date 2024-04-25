import Image from 'next/image';
import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import img1 from '../../../../../public/images/staff1.jpg'
import { BsThreeDotsVertical } from "react-icons/bs";

const data = [
  {id: 1, image: img1, transactionType:'Entertainment', transactionFrom: 'wallet', amount: 43, date: '12/02/2024'  },
  {id: 2, image: '', transactionType:'Eating Out', transactionFrom: 'wallet', amount: 43, date: '12/02/2024'  },
  {id: 3, image: '', transactionType:'Fual', transactionFrom: 'wallet', amount: 13, date: '12/02/2024'  },
  {id: 4, image: '', transactionType:'Shopping', transactionFrom: 'wallet', amount: 80, date: '12/02/2024'  }
]
const TransactionPage = () => {
  return (
    <div>
      {/* monthly transaction bar */}
      <div className="flex justify-between border shadow- rounded-md text-2xl font-bold px-3 py-4"> <button className="text-gray-600 hover:text-[#EAB308]"><FaChevronLeft  />
  </button> <p className="text-[#9ACD32]"> April 2024 </p> <button className="text-gray-600 hover:text-[#EAB308]"><FaChevronRight />
  </button> </div>
  {/* transaction cards */}

  <div className='flex justify-between items-center border px-6 py-2 hover:bg-gray-100 cursor-pointer  rounded-md border-r-8 border-r-red-400'>
  <div className='flex  items-center'>
  <Image className="rounded-full h-full w-full " src={img1} width={50} height={50} alt='expense category images'/>
    <div className='ml-3'>
      <p className='font-semibold text-gray-600'>Entertainment</p>
      <p className='font-semibold text-gray-600'>Wallet</p>
    </div>
    </div>

    <div className='ml-3 flex'>
      <div>
      <p className='font-semibold text-gray-600'> -৳ 9.00</p>
      <p className='font-semibold text-gray-600'>12/03/24</p>
      </div>
      <button className="font-bold p-4 mx-1 border hover:bg-slate-100">< BsThreeDotsVertical  /></button>
      <p className='border-l-4 border-[#EAB308] '></p>
    </div>
    


  </div>
    </div>
  )
}

export default TransactionPage;