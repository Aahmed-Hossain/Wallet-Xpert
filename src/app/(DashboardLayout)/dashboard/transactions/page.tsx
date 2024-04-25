import Image from 'next/image';
import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import img1 from '../../../../../public/images/staff1.jpg'
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
      <div className="flex justify-between border shadow-xl rounded-md text-2xl font-bold px-3 py-4"> <button className="text-gray-600 hover:text-[#EAB308]"><FaChevronLeft  />
  </button> <p className="text-[#9ACD32]"> April 2024 </p> <button className="text-gray-600 hover:text-[#EAB308]"><FaChevronRight />
  </button> </div>
  {/* transaction cards */}

  <div>
    <Image className="rounded-full " src={img1} width={10} height={10} alt='expense category images'/>
    <div>
      <p>Entertainment</p>
      
    </div>
  </div>
    </div>
  )
}

export default TransactionPage;