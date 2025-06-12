
import React from 'react'
const Username = ({params}) => {
     

  return (
    <>
  
   
    <div className='cover relative pb-10'>
      <img className='w-full h-96' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/381444/21316fdc464e470f88b487f8abd46263/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/1.jpg?token-hash=Orp5geOvHK3XZZ1RGnpLeyiSLS_sbJUKi8ZpfzYSzJA%3D&amp;token-time=1751587200" alt="" />
      <div className="profile">
        <img className='w-[150px] h-[150px]  absolute right-[45%] -bottom-14 rounded-full object-cover' src="https://cdn.pixabay.com/photo/2023/06/29/10/33/lion-8096155_1280.png" alt="" />
      </div>
      
    </div>
    
    <div className="info flex justify-center mt-16 text-2xl font-semibold">
        @{params.username}
      </div>
      <div className='flex justify-center my-2 '>
        "Love what I build? Help me build more!"
      </div >
      <div className='flex justify-center text-slate-600 mb-10'>449 paid members . 55 posts</div>
      <div className="payments flex mx-auto w-[80%]">
        <div className="names w-1/2 text-center p-10  mx-4">
        <h1 className='m-3 font-semibold text-2xl'>Supporters</h1>
          <ul className=' flex flex-col gap-4'>
            <li>Sushant donated rs 1000 with a message""</li>
            <li>Sushant donated rs 1000 with a message""</li>
            <li>Sushant donated rs 1000 with a message""</li>
            <li>Sushant donated rs 1000 with a message""</li>
            <li>Sushant donated rs 1000 with a message""</li>
           
          </ul>
        </div>
        <div className="payment w-1/2  p-10 ">
<h1 className='m-3 font-semibold text-xl'>Make a Payments</h1>
<div className='flex gap-2 flex-col'>
  <input type="text" placeholder='Enter Name' className='border-2 border-slate-600 text-black p-1 w-full outline-none rounded'/>
  <input type="text" placeholder='Enter Message' className='border-2 border-slate-600 text-black p-1 w-full outline-none rounded'/>
  <input type="text" placeholder='Enter Amount' className='border-2 border-slate-600 text-black p-1 w-full outline-none rounded'/>
<button type="button" className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
</div>
<div className='flex my-3'>
<button className='border-2 border-slate-600 text-black p-2 mx-2 rounded'>Pay Rs1000</button> 
<button className='border-2 border-slate-600 text-black p-2 mx-2 rounded'>Pay Rs2000</button> 
<button className='border-2 border-slate-600 text-black p-2 mx-2 rounded'>Pay Rs3000</button> 
</div>
        </div>
      </div>
    </>
)
}

export default Username
