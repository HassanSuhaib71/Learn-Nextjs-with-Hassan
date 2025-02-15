'use client'
import { UserContext } from "@/context/UserContext"
import { useContext } from "react"

export default function Test() {
        const {user} = useContext<any>(UserContext)
    
  return (
    <div className="flex flex-col items-center justify-between p-6 m-6 ring ring-teal-500">
    <h3 className="text-xl font-bold m-2">Test Component</h3>
    { user &&
    <div>
    <p>{user.name}</p>
    <p>{user.email}</p>
    </div>
    }
    
    </div>
  )
}
