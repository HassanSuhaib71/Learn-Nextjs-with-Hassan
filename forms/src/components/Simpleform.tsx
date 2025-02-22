'use client'

import { useState } from "react";

export default function Simpleform() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log({name,email,password});
        
    }

    return (
        <main className="flex h-screen items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-slate-100 px-10 py-4 shadow-md rounded w-1/4 flex flex-col justify-between"
          >
            <h1 className="text-3xl font-bold text-gray-700">Sign Up</h1>
    
            <div className="mt-6">
              {/* Name Field */}
              <div className="pb-4">
                <input
                  onChange={(e)=>setName(e.target.value)}  
                  minLength={3}
                  maxLength={20}
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="mt-1 w-full rounded text-sm p-2"
                />
              </div>
    
              {/* Email Field */}
              <div className="pb-4">
                <input
                  onChange={(e)=>setEmail(e.target.value)}  
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="mt-1 w-full rounded  text-sm p-2"
                />
              </div>
    
              {/* Password Field */}
    
              <div className="pb-4">
                <input
                  onChange={(e)=>setPassword(e.target.value)}  
                  required
                  min={8}
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="block mt-1 w-full rounded  text-sm p-2"
                />
              </div>
    
              {/* Confirm Password Field */}
    
              <div className="pb-4">
                <input
                  onChange={(e)=>setConfirmPassword(e.target.value)}  
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="mt-1 w-full rounded text-sm p-2"
                />
    
                {/* Submit Button */}
    
                <button
                  type="submit"
                  className={`mt-4 w-full bg-teal-500 text-white p-2 rounded `}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </main>
      );
}
