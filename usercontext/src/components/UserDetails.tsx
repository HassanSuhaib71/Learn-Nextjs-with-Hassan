'use client'
import { UserContext } from "@/context/UserContext"
import { useContext, useEffect } from "react"

export default function UserDetails() {

    const user1 ={
        id:1,
        name:"Hassan",
        email:"hassan@example.com"
    }

    const getuser = () => {
        setuser(user1)
    }

    const {user,setuser} = useContext<any>(UserContext)
    const handlechange = () =>{
        setuser(user.id===1?{
            id:2,
            name:"suhaib",
            email:"suhaib@example.com"
        }: user1)
    }

useEffect(()=>{
    getuser()
},[])
  return (
    <div className="flex flex-col items-center justify-between p-6 m-6 ring ring-teal-500">
    <h3 className="text-xl font-bold m-2">UserDetails</h3>
    { user &&
    <div>
    <p>{user.name}</p>
    <p>{user.email}</p>
    <button className="mt-2 bg-teal-200 px-3 py-2 rounded" onClick={handlechange}>Change User</button>
    </div>
    }
    
    </div>
  )
}
