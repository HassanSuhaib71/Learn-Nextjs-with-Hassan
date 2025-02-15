'use client'
import { useState } from "react";

import Button from "@/components/button";
import { addEmployee } from "@/lib/addEmployee";


export default function page() {

    const [bookData,setBookData] =  useState({
        book_id:"",
        name:"",
        type:""

    })

    const handleInputChange =  (e:React.ChangeEvent<HTMLInputElement>) =>{
        const {name,value} = e.target;
        setBookData({...bookData,[name]:value})
    }

    const handleSubmit= async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        await addEmployee(bookData)
        setBookData({
            book_id : "",
            name :"",
            type :""
        })

    }


  return (
    <div className="mx-auto my-6 max-w-3xl">
      <form onSubmit={handleSubmit} className="flex flex-col bg-slate-200 p-10">
        <div className="my-6 flex justify-between items-center w-full flex-1">
         

          <label>
            Name :
            <input
              type="text"
              name="name"
              value={bookData.name}
              onChange={handleInputChange}
              placeholder="Enter Book Name"
              className="text-xs italic ml-5 border py-2 px-4 rounded-md w-auto"
            ></input>
          </label>

          <label>
            Type :
            <input
              type="text"
              name="type"
              value={bookData.type}
              onChange={handleInputChange}
              placeholder="Enter Book Type"
              className="text-xs italic ml-5 border py-2 px-4 rounded-md w-auto"
            ></input>
          </label>
        </div>
        <Button buttonText="Submit" className="py-2 px-4 rounded-md"/>
      </form>
    </div>
  );
}
