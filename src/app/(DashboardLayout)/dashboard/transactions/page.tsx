"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import img1 from '../../../../../public/images/staff1.jpg'
import img2 from '../../../../../public/images/staff2.jpg'
import img3 from '../../../../../public/images/staff3.jpg'
import img4 from '../../../../../public/images/staff4.jpg'
import { BsThreeDotsVertical } from "react-icons/bs";

const data = [
  {id: 1, image: img1, transactionType:'Entertainment', transactionFrom: 'wallet', amount: 43, date: '12/02/2024'  },
  {id: 2, image: img2, transactionType:'Eating', transactionFrom: 'wallet', amount: 43, date: '31/02/2024'  },
  {id: 3, image: img3, transactionType:'Fual', transactionFrom: 'wallet', amount: 13, date: '15/02/2024'  },
  {id: 4, image: img4, transactionType:'Shopping', transactionFrom: 'wallet', amount: 80, date: '08/02/2023'  }
]
const TransactionPage = () => {

  const [optionsOpen, setOptionsOpen] = useState(false);

  const toggleOptions = () => {
    setOptionsOpen(!optionsOpen);
  };

  const handleEdit = () => {
    // Handle edit functionality here
    // For example, navigate to edit page or perform edit operation
    console.log("Edit button clicked");
    setOptionsOpen(false); // Close options after clicking
  };

  const handleDelete = () => {
    // Handle delete functionality here
    // For example, show confirmation modal or perform delete operation
    console.log("Delete button clicked");
    setOptionsOpen(false); // Close options after clicking
  };


  return (
    <div>
      {/* monthly transaction bar */}
      <div className="flex justify-between border border-[#EAB308] text-2xl font-bold px-3 py-4  mt-2 md:mt-0"> <button className="text-gray-600 hover:text-[#EAB308]"><FaChevronLeft  />
  </button> <p className="text-[#9ACD32]"> April 2024 </p> <button className="text-gray-600 hover:text-[#EAB308]"><FaChevronRight />
  </button> </div>
  {/* transaction cards */}
<div className='border font-normal md:font-semibold text-gray-600 '>
  <div className='flex px-2 md:px-6 py-6 justify-between  text-gray-600'><h1> Transactions:4</h1>  <p>Total: <span className='text-green-500'>৳ 345</span></p></div>
{
    data.map((datum)=>
      <div key={datum.id} className='flex justify-between items-center border-t px-2 md:px-6 py-2 hover:bg-gray-100 cursor-pointer  '>
    <div className='flex items-center'>
    <Image className="rounded-full h-full w-full " src={datum.image} width={40} height={40} alt='expense category images'/>
      <div className='ml-1 md:ml-3'>
        <p >{datum.transactionType}</p>
        <p >{datum.transactionFrom}</p>
      </div>
      </div>
  
      <div className='flex mr-1'>
        <div className='mr-1'>
        <p > -৳ 9.00</p>
        <p >12/03/24</p>
        </div>
        <button onClick={toggleOptions} className="font-bold px-4 mx-1 border hover:bg-slate-200">< BsThreeDotsVertical />
        {/* options button */}
        {optionsOpen && (
        <div className="absolute top-1/2 right-3 mt-1 bg-white shadow-lg border rounded ">
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-[#EAB308]" onClick={handleEdit}>
            Edit
          </button>
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-[#EAB308]" onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
        </button>

        <span className='border-r-4 border-r-green-500 ml-2'></span>
      </div>
    </div>)
  }
</div>

    </div>
  )
}

export default TransactionPage;