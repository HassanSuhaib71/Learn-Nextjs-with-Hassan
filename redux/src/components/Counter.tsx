'use client'

import { increment,decrement, reset, addval, subval, addAsync } from "@/redux/counter/counterSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function Counter() {

    
    const{value,status} = useSelector((state:RootState)=>state.counter);
    const dispatch = useDispatch<AppDispatch>()
    const [input,setInput] = useState(0);

    const handlchange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInput(Number(e.target.value))
    }

  return (

<main className={`w-screen h-screen ${status === 'pending' ? "bg-blend-overlay, opacity-50" : "opacity-100"}`}>
    <div className="flex flex-col gap-y-4">
        <h1 className="text-2xl font-bold uppercase text-center">Counter</h1>
        <div  className="flex items-end justify-center gap-x-4">
            <button disabled={status === "pending"} onClick={()=>{dispatch(decrement())}} className="bg-teal-500 text-sm tex-slate-100 font-bold px-2 rounded">-</button>
            <span className="block text-5xl font-bold">{value}</span>
            <button disabled={status === "pending"} onClick={()=>{dispatch(increment())}} className="bg-teal-500 text-sm tex-slate-100 font-bold px-2 rounded ">+</button>
        </div>
    
    <div className="flex justify-center items-center gap-x-2">
        <button onClick={()=>{dispatch(addval(input))}} className="bg-blue-700 text-sm rounded px-3 py-1 text-slate-100">
            Inc. value
        </button>
        <input
        onChange={handlchange}
        type="text"
        value={input}
        disabled={status === "pending"}
         className="block w-10 text-center px-2 border-2 rounded-md font-bold focus:border-teal-500  "
      />
      <button disabled={status === "pending"} onClick={()=>{dispatch(subval(input))}} className="bg-red-700 text-sm rounded px-3 py-1 text-slate-100">
        Dec. value
      </button>
      <button disabled={status === "pending"} onClick={()=>{dispatch(addAsync(input))}} className="bg-green-700 text-sm rounded px-3 py-1 text-slate-100">
        Add sync
      </button>
      <button disabled={status === "pending"} onClick={()=>{dispatch(reset())}} className="bg-yellow-500 text-sm rounded px-3 py-1 text-slate-100">
        Reset
      </button>
    </div>
    </div>
</main>

  )
  
}
