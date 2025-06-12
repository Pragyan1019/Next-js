"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [showdropdown, setshowdropdown] = useState(false)
  const { data: session } = useSession()



  return (
    <nav className="flex  justify-between p-5 pr-7 h-20 sticky top-0">
      <ul className="flex gap-7 p-1 font-semibold">
        <li className="cursor-pointer"><Link href={"/"}> Home </Link></li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Projects</li>
      </ul>
      <div className="logo font-semibold text-xl font-[ Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji]">
        Get me a chiya®
      </div>
      <ul className="flex gap-7">
          {session && <li className="flex items p-1  relative">
            
<button onClick={()=>setshowdropdown(!showdropdown)}
   id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" bg-yellow-300 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-yellow-400 dark:hover:bg-yellow-300 dark:focus:bg-yellow-400" type="button">My accounts <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
</svg>
</button>


<div id="dropdown" className={`z-10 ${showdropdown?"":"hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-36  dark:bg-gray-700 absolute top-10`}>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <Link href={"/dashboard"} className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
      </li>
      <li>
        <Link href={"/"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"> Your Page</Link>
      </li>
      <li>
        <Link href="#" onClick={()=>signOut()} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
      </li>
    </ul>
</div>

     
          
        </li> }
        <li className="flex items p-1 ">
          {session &&  <button className="font-semibold cursor-pointer" onClick={()=>signOut()}>Log out</button>}
     {!session && <Link href={"/Login"}>
          
            <button className="font-semibold cursor-pointer">Log in</button>
          </Link>}
          
        </li>
       {!session &&  <li>
          <button className="flex items bg-yellow-300 p-2 pr-4 pl-4 rounded-3xl font-semibold cursor-pointer ">
           
            Sign up
          </button>
        </li>}
      </ul>
    </nav>
  );
};

export default Navbar;
