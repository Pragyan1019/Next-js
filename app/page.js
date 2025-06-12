import Image from "next/image";


export default function Home() {
  return (
  <main>
  
    
   <div className=" mx-auto w-1/2 flex flex-col    justify-center h-[89vh]">
    <div className="mx-auto font-sans mb-10 text-2xl">Loved by 1,000,000+ creators</div>
    <div className="mx-auto font-bold text-8xl text-gray-950 ">Fund your </div><div className="mx-auto font-bold text-8xl mb-7 text-gray-950"> creative work</div>
    <div className="mx-auto font-[sans-serif] text-2xl">Accept support. Start a membership. Setup a shop. It’s easier </div><div className="mx-auto font-[sans-serif] text-2xl"> than you think.</div>
    <button className="mx-auto bg-yellow-400 font-semibold pt-5 pb-5 pr-6 pl-6 text-xl mt-10 rounded-[70px] text-gray-950">Start my page</button>
    <span className="mx-auto mt-3">It’s free and takes less than a minute!</span>
   </div>
  </main>
  );
}
