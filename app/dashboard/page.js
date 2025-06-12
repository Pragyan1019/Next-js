"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
const Dashboard = () => {
      const { data: session } = useSession()
  if(!session){
            const router=useRouter()
      router.push('/Login')
       }
  return (
    
    <div className='mx-auto'>
      <h1 className='text-2xl font-semibold my-6 text-center'>Welcome to dashboard</h1>
      <div className="flex flex-col w-[40%]  mx-auto font-semibold gap-1 my-2">
      <label htmlFor="name">Name</label>
      <input type="text" id='name' className=' border-2 p-1 rounded border-slate-600' />
      </div>
      <div className="flex flex-col w-[40%]  mx-auto font-semibold gap-1 my-2">
      <label htmlFor="emial">Email</label>
      <input type="text" id='email' className=' border-2 p-1 rounded border-slate-600' />
      </div>
      <div className="flex flex-col w-[40%]  mx-auto font-semibold gap-1 my-2">
      <label htmlFor="username">Username</label>
      <input type="text" id='username' className=' border-2 p-1 rounded border-slate-600' />
      </div>
      <div className="flex flex-col w-[40%]  mx-auto font-semibold gap-1 my-2">
      <label htmlFor="pp">Profile picture</label>
      <input type="text" id='pp' className=' border-2 p-1 rounded border-slate-600' />
      </div>
      <div className="flex flex-col w-[40%]  mx-auto font-semibold gap-1 my-2">
      <label htmlFor="name">Cover picture</label>
      <input type="text" id='name' className=' border-2 p-1 rounded border-slate-600' />
      </div>
      <div className="flex flex-col w-[40%]  mx-auto font-semibold gap-1 my-2">
      <label htmlFor="esewa">Esewa Credentials</label>
      <input type="text" id='esewa' className=' border-2 p-1 rounded border-slate-600' />
      <button type="button" class="w-full mt-3 cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Save</button>
      </div>

    </div>
  )
}

export default Dashboard
