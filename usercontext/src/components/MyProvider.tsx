'use client'

import { UserContext } from "@/context/UserContext";
import { useState} from "react";
import { user } from "../../types";

export default function MyProvider({children}:{children:React.ReactNode}){

    const [user,setuser] = useState<user | null>(null)

    return(
        <UserContext.Provider value={{user,setuser}}>
            {children}
        </UserContext.Provider>
    )

}